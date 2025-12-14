import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAdminArea = createRouteMatcher(["/admin(.*)", "/api/admin(.*)"]);
const isAdminSignIn = createRouteMatcher(["/admin/sign-in(.*)"]);

export default clerkMiddleware(
  async (auth, req) => {
    if (isAdminArea(req) && !isAdminSignIn(req)) {
      await auth.protect();
    }
  },
  {
    // make redirects deterministic (and avoid invalid URL issues)
    signInUrl: "/admin/sign-in",
  }
);

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
