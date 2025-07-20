'use client';

import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import { createTokenWithNaver } from '@/features/auth/services/callback/socialAuthService';
import useAuthStore from '@/shared/lib/store/auth/auth';
import useUserStore from '@/shared/lib/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import LogoPlace from '@/features/login/continue/LogoPlace';

const NaverCallback = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const { setUser } = useUserStore();
  const router = useRouter();
  const search = useSearchParams();
  const authorizationCode = search.get('code');
  const state = search.get('state');
  const { data: userInfoData, isSuccess: isSuccessReadUserInfo } = useQuery({
    ...userInfoQueries.readUserInfo(accessToken || ''),
    enabled: !!accessToken,
  });

  const createTokenWithNaverMutation = useMutation({ mutationFn: createTokenWithNaver });

  const requestAccessToken = async (authorizationCode: string, state: string) => {
    const payload = { authorizationCode, state };
    try {
      await createTokenWithNaverMutation.mutateAsync(payload, {
        onSuccess: (res) => {
          setAccessToken(res.accessToken);
        },
      });
    } catch (error) {
      alert('로그인에 실패했습니다.');
      router.replace('/');
    }
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
    if (authorizationCode && state) {
      requestAccessToken(authorizationCode, state);
    } else {
      alert('로그인에 실패했습니다.');
      router.replace('/');
    }
  }, [router]);
  return <LogoPlace />;
};

export default NaverCallback;
