'use client';

import { createTokenWithNaver } from '@/services/auth/callback/socialAuthService';
import useAuthStore from '@/store/auth/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const NaverCallback = () => {
  const { isAuthenticated, isNewUser, setAccessToken, setIsNewUser } = useAuthStore();
  const router = useRouter();
  const search = useSearchParams();
  const authorizationCode = search.get('code');
  const state = search.get('state');

  const createTokenWithNaverMutation = useMutation({ mutationFn: createTokenWithNaver });

  const requestAccessToken = async (authorizationCode: string, state: string) => {
    const payload = { authorizationCode, state };
    await createTokenWithNaverMutation.mutateAsync(payload, {
      onSuccess: (res) => {
        setAccessToken(res.accessToken);
        setIsNewUser(res.isNewUser);
      },
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (isNewUser) router.replace('/onboarding');
      else router.replace('/team');
    }
  }, [isAuthenticated, isNewUser, router]);

  useEffect(() => {
    if (authorizationCode && state) {
      requestAccessToken(authorizationCode, state);
    } else {
      alert('로그인에 실패했습니다.');
      router.replace('/');
    }
  }, [router]);
  return null;
};

export default NaverCallback;
