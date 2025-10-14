import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/login') {
    const refreshToken = request.cookies.get('refreshToken')?.value;
    if (refreshToken) {
      return NextResponse.redirect(new URL('/login/continue', request.url));
    }
  } else if (pathname === '/login/continue') {
    const refreshToken = request.cookies.get('refreshToken')?.value;
    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/login/continue'],
};
