'use client';

import LogoPlace from '@/features/login/continue/LogoPlace';
import LoginPage from '@/features/login/LoginPage';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<LogoPlace />}>
      <LoginPage />
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
