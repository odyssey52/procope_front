import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  if (request.nextUrl.pathname === '/login') {
    if (refreshToken) {
      return NextResponse.redirect(new URL('/login/continue', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/login'],
};
