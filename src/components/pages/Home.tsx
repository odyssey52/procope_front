'use client';

import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { isAuthenticated, isNewUser } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      if (isNewUser) router.push('/onboarding');
      else router.push('/team');
    } else router.push('/login');
  }, [isAuthenticated, isNewUser, router]);
  return null;
};

export default Home;
