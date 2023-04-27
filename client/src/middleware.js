import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const jwt = request.cookies.get("userToken");

  // if (jwt && request.nextUrl.pathname.includes("/login")) {
  //   return NextResponse.redirect(new URL("/HomePageAdmin", request.url));
  // }

  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const { value } = jwt;
    const { payload } = await jwtVerify(
      value,
      new TextEncoder().encode("secret")
    );
    console.log("payload:", payload);
    console.log(request.nextUrl.pathname);
    return NextResponse.next();
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/HomePageAdmin", "/profileteacher", "/HomePage"],
};