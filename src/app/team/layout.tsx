import PrivateRouteLayout from '@/components/layout/PrivateRouteLayout';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => <PrivateRouteLayout>{children}</PrivateRouteLayout>;

export default layout;
