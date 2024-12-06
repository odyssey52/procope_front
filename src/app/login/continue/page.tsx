'use client';

import { useReadAccessTokenWithRefreshToken } from '@/query/auth/refresh/refreshTokenQueries';
import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const { data, isError, isSuccess } = useReadAccessTokenWithRefreshToken();
  const { accessToken, setAccessToken } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      setAccessToken(data);
    }
  }, [data, isError, isSuccess]);

  useEffect(() => {
    if (accessToken) {
      router.push('/team');
    }
  }, [accessToken]);

  return <div>로그인 시도 중... 잠시만 기다려 주세요</div>;
};

page.displayName = 'page';

export default page;
