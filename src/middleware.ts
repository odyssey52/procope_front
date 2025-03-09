import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 로그인 페이지에서만 리프레시 토큰 체크
  if (pathname === '/login') {
    const refreshToken = request.cookies.get('refreshToken')?.value;
    if (refreshToken) {
      return NextResponse.redirect(new URL('/login/continue', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login'],
};
