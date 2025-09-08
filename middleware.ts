import { NextResponse, NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  // TODO: Handle auth checks in each page/route

  // Relying solely on this check for security is dangerous, as anyone can manually create a cookie to bypass it.
  // You must always validate the session on your server for any protected actions or pages.

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
  // matcher: ["/", "/*"],
  // matcher: ["/", "/login", "/signup"],
};
