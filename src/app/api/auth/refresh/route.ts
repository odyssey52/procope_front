import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';
import axios from 'axios';

// Route Handler for refreshing access token
export async function GET(req: NextRequest) {
  try {
    // HTTP-only 쿠키에서 refreshToken 추출
    const cookies = req.headers.get('cookie') || '';
    const parsedCookies = cookie.parse(cookies);
    const { refreshToken } = parsedCookies;

    if (!refreshToken) {
      return NextResponse.json({ message: 'Refresh token is missing' }, { status: 401 });
    }

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_USER_API_HOST}auth/refresh`,
      { refreshToken },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );

    return NextResponse.json({ accessToken: data }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error refreshing access token:', error.message);

      // 에러 응답 처리
      const responseError = (error as any).response; // Axios 에러일 가능성 처리
      const errorMessage = responseError?.data?.message || 'Internal server error';
      const statusCode = responseError?.status || 500;

      return NextResponse.json({ message: errorMessage }, { status: statusCode });
    }
    console.error('Unknown error type:', error);
    return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
  }
}
