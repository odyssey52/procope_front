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

  // useEffect(() => {
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   console.log(refreshToken);
  //   if (refreshToken) {
  //     createAccessTokenWithRefreshToken.mutate(
  //       { refreshToken },
  //       {
  //         onSuccess: (res) => {
  //           const accessToken = res;
  //           setAccessToken(accessToken);
  //         },
  //         onError: (error) => {
  //           console.log(error);
  //           localStorage.removeItem('refreshToken');
  //           console.log('리프레시토큰 삭제');
  //           router.push('/login');
  //         },
  //       },
  //     );
  //   }
  // }, []);

  useEffect(() => {
    if (accessToken) {
      router.push('/team');
    }
  }, [accessToken]);

  return <div>로그인 시도 중... 잠시만 기다려 주세요</div>;
};

page.displayName = 'page';

export default page;
