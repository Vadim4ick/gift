import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PREFIX = "/create-post";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const cookieName = process.env.ADMIN_COOKIE_NAME!;
  const cookieValue = process.env.ADMIN_COOKIE_VALUE!;
  const session = req.cookies.get(cookieName)?.value;

  const isLoggedIn = session === cookieValue;

  // если уже залогинен → запрещаем доступ к /login
  if (pathname === "/login" && isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = PROTECTED_PREFIX;
    return NextResponse.redirect(url);
  }

  // если не залогинен → запрещаем доступ к защищённой зоне
  if (pathname.startsWith(PROTECTED_PREFIX) && !isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/create-post/:path*", "/login"],
};
