'use client';

import NaverCallback from '@/features/auth/components/naver/NaverCallback';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <NaverCallback />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
