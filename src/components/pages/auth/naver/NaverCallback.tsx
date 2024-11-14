'use client';

import { useCreateTokenWithNaver } from '@/query/auth/socialAuthQueries';
import useAuthStore from '@/store/auth/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const NaverCallback = () => {
  const { isAuthenticated, isNewUser, setAccessToken, setIsNewUser } = useAuthStore();
  const router = useRouter();
  const search = useSearchParams();
  const authorizationCode = search.get('code');
  const state = search.get('state');

  const createTokenWithNaver = useCreateTokenWithNaver();

  const requestAccessToken = async (authorizationCode: string, state: string) => {
    const payload = { authorizationCode, state };
    await createTokenWithNaver.mutateAsync(payload, {
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
    if (authorizationCode && state) {
      requestAccessToken(authorizationCode, state);
    } else {
      alert('로그인에 실패했습니다.');
      router.push('/');
    }
  }, [router]);
  return null;
};

export default NaverCallback;
