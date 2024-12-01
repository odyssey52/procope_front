'use client';

import { useReadAccessTokenWithRefreshToken } from '@/query/auth/refresh/refreshTokenQueries';
import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  // const readAccessTokenWithRefreshToken = useReadAccessTokenWithRefreshToken();
  const { isError, isSuccess, data } = useReadAccessTokenWithRefreshToken();
  const { accessToken, setAccessToken } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      router.push('/login');
    } else if (isSuccess) {
      const { accessToken } = data;
      setAccessToken(accessToken);
    }
  }, [isError, isSuccess, data]);

  useEffect(() => {
    if (accessToken) {
      router.push('/team');
    }
  }, [accessToken]);

  return null;
};

page.displayName = 'page';

export default page;
