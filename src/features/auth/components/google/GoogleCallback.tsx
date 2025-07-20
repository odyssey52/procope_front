'use client';

import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import { createTokenWithGoogle } from '@/features/auth/services/callback/socialAuthService';
import useAuthStore from '@/shared/lib/store/auth/auth';
import useUserStore from '@/shared/lib/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import LogoPlace from '@/features/login/continue/LogoPlace';

const GoogleCallback = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const { setUser } = useUserStore();
  const router = useRouter();
  const search = useSearchParams();
  const authorizationCode = search.get('code');
  const { data: userInfoData, isSuccess: isSuccessReadUserInfo } = useQuery({
    ...userInfoQueries.readUserInfo(accessToken || ''),
    enabled: !!accessToken,
  });

  const createTokenWithGoogleMutation = useMutation({ mutationFn: createTokenWithGoogle });

  const requestAccessToken = async (authorizationCode: string) => {
    const payload = { authorizationCode };
    await createTokenWithGoogleMutation.mutateAsync(payload, {
      onSuccess: (res) => {
        setAccessToken(res.accessToken);
      },
    });
  };

  useEffect(() => {
    if (isSuccessReadUserInfo) {
      const { id, name, email, username } = userInfoData.userContext;
      setUser({ id, name, email, username });
      if (userInfoData.isNewUser) {
        router.replace('/onboarding');
      } else {
        const previousPath = localStorage.getItem('previousPath');
        if (previousPath) {
          localStorage.removeItem('previousPath');
          router.replace(previousPath);
        } else {
          router.replace('/team');
        }
      }
    }
  }, [isSuccessReadUserInfo, userInfoData]);

  useEffect(() => {
    if (authorizationCode) {
      requestAccessToken(authorizationCode);
    } else {
      alert('로그인에 실패했습니다.');
      router.replace('/');
    }
  }, [router]);
  return <LogoPlace />;
};

export default GoogleCallback;
