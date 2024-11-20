'use client';

import GoogleCallback from '@/components/pages/auth/google/GoogleCallback';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <GoogleCallback />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
