'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // 홈 페이지에 진입할 때 로그인 페이지로 리다이렉트
    router.push('/login');
  }, [router]);

  return <></>;
};

Page.displayName = 'Page';

export default Page;
