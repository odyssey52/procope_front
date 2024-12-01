'use client';

import Login from '@/components/pages/login/Login';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      router.push('/login/continue');
    }
  }, []);

  return <Login />;
};

page.displayName = 'page';

export default page;
