'use client';

import { LoginSection } from '@/features/login';
import LoginModal from '@/features/login/LoginModal';
import { useAuth } from '@/shared/hooks/useAuth';
import Modal from '@/shared/ui/modal/common/Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// 로그인 모달 컨텐츠 컴포넌트
const page = () => {
  //   const { accessToken, isLoading } = useAuth();
  //   const router = useRouter();
  //   const searchParams = useSearchParams();
  //   const from = searchParams.get('from') || '/';

  //   useEffect(() => {
  //     // 인증된 상태라면 원래 페이지로 리다이렉트
  //     if (!isLoading && accessToken) {
  //       router.replace(from);
  //     }
  //   }, [isLoading, accessToken, router, from]);

  return (
    <Modal portalId="confirm-dialog">
      <LoginModal />
    </Modal>
  );

  // return <div>testtest</div>;
};

page.displayName = 'page';

export default page;
