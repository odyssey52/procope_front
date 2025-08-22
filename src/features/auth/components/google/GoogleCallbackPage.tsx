'use client';

import { createTokenWithGoogle } from '@/features/auth/services/callback/socialAuthService';
import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import useAuthStore from '@/shared/store/auth/auth';
import useUserStore from '@/shared/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import LogoPlace from '@/features/login/continue/LogoPlace';
import { toastActions } from '@/shared/store/modal/toast';
import { MESSAGES } from '@/shared/constants/messages';

const GoogleCallbackPage = () => {
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
    try {
      await createTokenWithGoogleMutation.mutateAsync(payload, {
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
    if (authorizationCode) {
      requestAccessToken(authorizationCode);
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

GoogleCallbackPage.displayName = 'GoogleCallbackPage';

export default GoogleCallbackPage;
