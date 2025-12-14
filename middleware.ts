import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminPage = createRouteMatcher(["/admin(.*)"]);
const isAdminApi = createRouteMatcher(["/api/admin(.*)"]);

export default clerkMiddleware((auth, req) => {
  const path = req.nextUrl.pathname;

  // Protect admin APIs always
  if (isAdminApi(req)) {
    auth.protect();
    return NextResponse.next();
  }

  // Protect admin pages, but NEVER protect the sign-in page (avoid redirect loop)
  if (isAdminPage(req) && !path.startsWith("/admin/sign-in")) {
    auth.protect();
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
