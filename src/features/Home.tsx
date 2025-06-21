'use client';

import { useAuth } from '@/shared/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
    if (!isLoading && isAuthenticated) {
      router.replace('/team');
    }
  }, [router, isLoading, isAuthenticated]);

  return null;
};

Home.displayName = 'Home';

export default Home;
