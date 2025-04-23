import { AuthGuard } from '@/features/auth/components/authguard/AuthGuard';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => <AuthGuard>{children}</AuthGuard>;

export default layout;
