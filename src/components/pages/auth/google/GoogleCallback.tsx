'use client';

import { useCreateTokenWithGoogle } from '@/query/auth/callback/socialAuthQueries';
import useAuthStore from '@/store/auth/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const GoogleCallback = () => {
  const { isAuthenticated, isNewUser, setAccessToken, setIsNewUser } = useAuthStore();
  const router = useRouter();
  const search = useSearchParams();
  const authorizationCode = search.get('code');

  const createTokenWithGoogle = useCreateTokenWithGoogle();

  const requestAccessToken = async (authorizationCode: string) => {
    const payload = { authorizationCode };
    await createTokenWithGoogle.mutateAsync(payload, {
      onSuccess: (res) => {
        setAccessToken(res.accessToken);
        setIsNewUser(res.isNewUser);
      },
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (isNewUser) router.push('/onboarding');
      else router.push('/team');
    }
  }, [isAuthenticated, isNewUser, router]);

  useEffect(() => {
    if (authorizationCode) {
      requestAccessToken(authorizationCode);
    } else {
      alert('로그인에 실패했습니다.');
      router.push('/');
    }
  }, [authorizationCode, router]);

  return null;
};

export default GoogleCallback;
