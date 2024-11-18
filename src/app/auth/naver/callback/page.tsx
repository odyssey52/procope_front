'use client';

import NaverCallback from '@/components/pages/auth/naver/NaverCallback';
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
