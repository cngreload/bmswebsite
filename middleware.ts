import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminArea = createRouteMatcher(["/admin(.*)", "/api/admin(.*)"]);
const isAdminPublic = createRouteMatcher([
  "/admin/sign-in(.*)",
  "/admin/auth-error(.*)",
  "/admin/forbidden(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isAdminArea(req) || isAdminPublic(req)) return NextResponse.next();
  await auth.protect();
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
