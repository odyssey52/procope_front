'use client';

import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import useUserStore from '@/shared/lib/store/user/user';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LogoPlace from './LogoPlace';

const LoginContinuePage = () => {
  const { data, isSuccess } = useQuery({ ...userInfoQueries.readUserInfo });
  const { setUser } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      const { id, name, email, username } = data.userContext;
      setUser({ id, name, email, username });
      if (data.isNewUser) {
        router.replace('/onboarding');
      } else {
        router.replace('/team');
      }
    }
  }, [data, isSuccess]);

  return <LogoPlace />;
};

LoginContinuePage.displayName = 'LoginContinuePage';

export default LoginContinuePage;
