import { AuthGuard } from '@/features/auth/components/authguard/AuthGuard';
import { ReactNode } from 'react';

const layout = ({ children, modal }: { children: ReactNode; modal: ReactNode }) => (
  <AuthGuard>
    {modal}
    {children}
  </AuthGuard>
);

export default layout;
