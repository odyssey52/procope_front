'use client';

import { useAuth } from '@/shared/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { accessToken, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !accessToken) {
      router.replace('/login');
    }
    if (!isLoading && accessToken) {
      router.replace('/team');
    }
  }, [router, isLoading, accessToken]);

  return null;
};

Home.displayName = 'Home';

export default Home;
