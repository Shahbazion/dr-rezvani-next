import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Example: اجازه همه مسیرها
  return NextResponse.next();
}

// مسیرهایی که middleware روی آنها اعمال می‌شود
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
