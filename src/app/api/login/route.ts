import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // JSON 파싱
    const { authorizationCode, state } = body;

    // 백엔드로 요청
    const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_USER_API_HOST}auth/callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ authorizationCode, state }),
    });

    if (!loginResponse.ok) {
      const error = await loginResponse.json(); // 백엔드 에러 응답 추출
      return NextResponse.json({ message: error.message || 'Login failed' }, { status: loginResponse.status });
    }

    const { refreshToken } = await loginResponse.json();

    if (!refreshToken) {
      return NextResponse.json({ message: 'Refresh token missing from response' }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Login successful' },
      {
        headers: {
          'Set-Cookie': [`refreshToken=${refreshToken}; HttpOnly; Path=/; Secure; SameSite=None;`].join(', '),
        },
      },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
