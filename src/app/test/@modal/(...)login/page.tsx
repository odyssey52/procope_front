'use client';

import { LoginSection } from '@/features/login';
import { useUserInfo } from '@/shared/hooks/useUserInfo';
import useAuthStore from '@/shared/store/auth/auth';
import Modal from '@/shared/ui/modal/common/Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import styled from 'styled-components';

// 로그인 모달 컨텐츠 컴포넌트
function LoginModalContent() {
  const { accessToken } = useAuthStore();
  const { isLoading } = useUserInfo();
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';

  useEffect(() => {
    // 인증된 상태라면 원래 페이지로 리다이렉트
    if (!isLoading && accessToken) {
      router.replace(from);
    }
  }, [isLoading, accessToken, router, from]);

  return (
    <Modal portalId="confirm-dialog">
      <LoginSection />
    </Modal>
  );
}

// 메인 페이지 컴포넌트
export default function LoginModal() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginModalContent />
    </Suspense>
  );
}

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 480px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
