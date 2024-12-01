'use client';

import { useCreateAccessTokenWithRefreshToken } from '@/query/auth/refresh/refreshTokenQueries';
import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  // const readAccessTokenWithRefreshToken = useReadAccessTokenWithRefreshToken();
  const createAccessTokenWithRefreshToken = useCreateAccessTokenWithRefreshToken();
  const { accessToken, setAccessToken } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      createAccessTokenWithRefreshToken.mutate(
        { refreshToken },
        {
          onSuccess: (res) => {
            const accessToken = res;
            setAccessToken(accessToken);
          },
          onError: (error) => {
            console.log(error);
            localStorage.removeItem('refreshToken');
            console.log('리프레시토큰 삭제');
            router.push('/login');
          },
        },
      );
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      router.push('/team');
    }
  }, [accessToken]);

  return null;
};

page.displayName = 'page';

export default page;
