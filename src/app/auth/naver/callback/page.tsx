'use client';

import NaverCallbackPage from '@/features/auth/components/naver/NaverCallbackPage';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <NaverCallbackPage />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
