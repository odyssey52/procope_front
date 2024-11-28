import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  console.log(refreshToken);
  if (request.nextUrl.pathname === '/login') {
    if (refreshToken) {
      // 리프레시 토큰이 있다면 /login/continue로 이동
      return NextResponse.redirect(new URL('/login/continue', request.url));
    }
    // 리프레시 토큰이 없으면 /login에 머무름
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/login'], // 특정 경로에서만 Middleware를 동작시킴
};
