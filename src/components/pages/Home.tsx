'use client';

import userInfoQueries from '@/query/user/info/userInfoQueries';
import useUserStore from '@/store/user/user';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const { data, isSuccess, isError } = useQuery({ ...userInfoQueries.readUserInfo });

  useEffect(() => {
    if (isError) {
      router.replace('/login');
      return;
    }

    if (!isSuccess) {
      return;
    }

    const { id, name, email, username } = data.userContext;
    setUser({ id, name, email, username });

    const redirectPath = data.isNewUser ? '/onboarding' : '/team';
    router.replace(redirectPath);
  }, [data, isSuccess, isError, router, setUser]);

  return null;
};

export default Home;
