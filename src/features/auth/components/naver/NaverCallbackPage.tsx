'use client';

import { createTokenWithNaver } from '@/features/auth/services/callback/socialAuthService';
import LogoPlace from '@/features/login/continue/LogoPlace';
import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/store/auth/auth';
import { toastActions } from '@/shared/store/modal/toast';
import useUserStore from '@/shared/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const NaverCallbackPage = () => {
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
      toastActions.open({
        state: 'error',
        title: MESSAGES.LOGIN_FAILED,
      });
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
      toastActions.open({
        state: 'error',
        title: MESSAGES.LOGIN_FAILED,
      });
      router.replace('/');
    }
  }, [router]);
  return <LogoPlace />;
};

NaverCallbackPage.displayName = 'NaverCallbackPage';

export default NaverCallbackPage;
