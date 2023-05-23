import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const jwt = request.cookies.get("userToken");

  // if (jwt && request.nextUrl.pathname.includes("/login")) {
  //   return NextResponse.redirect(new URL("/HomePageAdmin", request.url));
  // }

  // if (jwt === undefined && !request.nextUrl.pathname.includes("/login")) {
  //   console.log("Validation1");
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

}

export const config = {
  matcher: ["/HomePageAdmin", "/profileteacher", "/HomePage", "/login"],
};
