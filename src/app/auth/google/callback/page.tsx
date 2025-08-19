'use client';

import GoogleCallbackPage from '@/features/auth/components/google/GoogleCallbackPage';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <GoogleCallbackPage />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
