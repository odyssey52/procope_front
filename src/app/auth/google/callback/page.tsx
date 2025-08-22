'use client';

import GoogleCallbackPage from '@/features/auth/components/google/GoogleCallbackPage';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GoogleCallbackPage />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
