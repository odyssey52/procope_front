'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // 홈 페이지에 진입할 때 로그인 페이지로 리다이렉트
    router.push('/login');
  }, [router]);

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div``;

Page.displayName = 'Page';

export default Page;
