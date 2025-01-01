'use client';

import { createTokenWithGoogle } from '@/services/auth/callback/socialAuthService';
import useAuthStore from '@/store/auth/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const GoogleCallback = () => {
  const { isAuthenticated, isNewUser, setAccessToken, setIsNewUser } = useAuthStore();
  const router = useRouter();
  const search = useSearchParams();
  const authorizationCode = search.get('code');

  const createTokenWithGoogleMutation = useMutation({ mutationFn: createTokenWithGoogle });

  const requestAccessToken = async (authorizationCode: string) => {
    const payload = { authorizationCode };
    await createTokenWithGoogleMutation.mutateAsync(payload, {
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
    if (authorizationCode) {
      requestAccessToken(authorizationCode);
    } else {
      alert('로그인에 실패했습니다.');
      router.replace('/');
    }
  }, [authorizationCode, router]);

  return null;
};

export default GoogleCallback;
