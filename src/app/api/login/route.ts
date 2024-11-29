import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // JSON 파싱
    const { authorizationCode, state } = body;

    // 백엔드로 요청
    const loginResponse = await fetch('https://dev-user-api.procope.kr/auth/callback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorizationCode, state }),
    });

    if (!loginResponse.ok) {
      return NextResponse.json({ message: 'Login failed' }, { status: loginResponse.status });
    }

    const { refreshToken } = await loginResponse.json();

    // HttpOnly 쿠키 설정
    return NextResponse.json(
      { message: 'Login successful' },
      {
        headers: {
          'Set-Cookie': [`refreshToken=${refreshToken}; HttpOnly; Path=/; Secure; SameSite=Strict`].join(', '),
        },
      },
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
