'use client';

import { useAuth } from '@/shared/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LogoPlace from './login/continue/LogoPlace';

const Home = () => {
  const router = useRouter();
  const { accessToken, isLoading } = useAuth();

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

Home.displayName = 'Home';

export default Home;
