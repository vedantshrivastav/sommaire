import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/summaries(.*)",
  "/upload(.*)",
]);

export default clerkMiddleware(async(auth, req) => {
  const { userId } = await auth();
  const url = req.nextUrl;

  // 🔐 Protect private routes
  if (isProtectedRoute(req)) {
    auth.protect();
  }

  // 🚫 Redirect logged-in users away from landing page
  if (userId && url.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
