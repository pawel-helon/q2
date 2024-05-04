import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { decrypt } from "@/lib/session";

const protectedRoutes = ["/devices", "/users"];
const publicRoutes = ["/"];
const protectedAdminRoutes = ["/users"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedAdminRoutes = protectedAdminRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/devices")
  ) {
    return NextResponse.redirect(new URL("/devices", req.nextUrl));
  }

  if (isProtectedAdminRoutes && session?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/devices", req.nextUrl));
  }

  return NextResponse.next();

}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
