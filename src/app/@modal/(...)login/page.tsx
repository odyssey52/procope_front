'use client';

import LoginModal from '@/features/login/LoginModal';
import Modal from '@/shared/ui/modal/common/Modal';

const page = () => {
  return (
    <Modal portalId="confirm-dialog">
      <LoginModal />
    </Modal>
  );
};

page.displayName = 'page';

export default page;
