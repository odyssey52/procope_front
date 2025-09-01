'use client';

import useUserInfoQuery from '@/shared/hooks/useUserInfoQuery';
import useAuthStore from '@/shared/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LogoPlace from './login/continue/LogoPlace';

const HomePage = () => {
  const router = useRouter();
  const { accessToken } = useAuthStore();
  const { isLoading } = useUserInfoQuery();
  useEffect(() => {
    if (!isLoading && !accessToken) {
      window.location.href = '/login';
    }
    if (!isLoading && accessToken) {
      router.replace('/team');
    }
  }, [router, isLoading, accessToken]);

  return <LogoPlace />;
};

HomePage.displayName = 'HomePage';

export default HomePage;
