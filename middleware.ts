// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAdminArea = createRouteMatcher(["/admin(.*)", "/api/admin(.*)"]);
const isAdminPublic = createRouteMatcher([
  "/admin/sign-in(.*)",
  "/admin/auth-error(.*)",
  "/admin/forbidden(.*)",
]);

export default clerkMiddleware(
  async (auth, req: NextRequest) => {
    // فقط روی ادمین
    if (!isAdminArea(req)) return NextResponse.next();

    // صفحات عمومی ادمین
    if (isAdminPublic(req)) return NextResponse.next();

    // اگر env ها روی Vercel ست نشده باشند، به جای کرش → صفحه خطا
    const hasKeys =
      !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && !!process.env.CLERK_SECRET_KEY;
    if (!hasKeys) {
      const url = new URL("/admin/auth-error?reason=missing_keys", req.url);
      return NextResponse.redirect(url);
    }

    try {
      const { userId, redirectToSignIn } = await auth();

      // لاگین نشده → برو sign-in
      if (!userId) return redirectToSignIn();

      // فقط یک ادمین
      const adminUserId = process.env.CLERK_ADMIN_USER_ID;
      if (adminUserId && userId !== adminUserId) {
        const url = new URL("/admin/forbidden", req.url);
        return NextResponse.redirect(url);
      }

      return NextResponse.next();
    } catch {
      const url = new URL("/admin/auth-error?reason=clerk_failed", req.url);
      return NextResponse.redirect(url);
    }
  },
  // اگر خواستی برای یک دیپلوی دیباگ بگیری:
  // { debug: true }
);

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
