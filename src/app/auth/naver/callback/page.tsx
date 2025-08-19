'use client';

import NaverCallbackPage from '@/features/auth/components/naver/NaverCallbackPage';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <NaverCallbackPage />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
