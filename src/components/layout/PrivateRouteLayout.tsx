'use client';

import useAuthStore from '@/store/auth/auth';
import { confirmModalActions } from '@/store/modal/confirmModal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const PrivateRouteLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(
    function authValidationCheck() {
      if (!isAuthenticated) {
        confirmModalActions.open({
          icon: (
            <Image src="/assets/icons/graphic/glass/error.png" width={80} height={80} alt="모달 에러 아이콘 이미지" />
          ),
          type: 'error',
          title: '로그인 필요',
          description: '로그인 페이지로 이동합니다.',
          cancelLabel: '뒤로가기',
          onCancel: () => router.back(),
          confirmLabel: '확인',
          onConfirm: () => router.push('/login'),
        });
      }
    },
    [router],
  );

  return children;
};

export default PrivateRouteLayout;