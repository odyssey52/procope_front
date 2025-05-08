'use client';

import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import useUserStore from '@/shared/lib/store/user/user';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
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

  return <div>로그인 시도 중... 잠시만 기다려 주세요</div>;
};

page.displayName = 'page';

export default page;
