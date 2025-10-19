'use client';

import LoginModal from '@/features/login/components/LoginModal';
import Modal from '@/shared/ui/modal/common/Modal';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Modal portalId="confirm-dialog">
        <LoginModal />
      </Modal>
    </Suspense>
  );
};

page.displayName = 'page';

export default page;
