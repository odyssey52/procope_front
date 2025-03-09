import { AuthGuard } from '@/components/common/AuthGuard';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => <AuthGuard>{children}</AuthGuard>;

export default layout;
