import { useState } from 'react';
import Avatar from '@/components/common/ui/avatar/Avatar';
import Button from '@/components/common/ui/button/Button';
import Chip from '@/components/common/ui/chip/Chip';
import Label from '@/components/common/ui/label/Label';
import Placeholder from '@/components/common/ui/placeholder/Placeholder';
import styled from 'styled-components';
import DeleteModal from './DeleteModal';

const ProfileSetting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accountDelete = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Content>
      <Avatar type="initial" size={84} nickname="B" />
      <Placeholder value="" label={{ text: '이름', required: true }} maxLength={10} />
      <Placeholder value="" disabled label={{ text: '이메일', required: false }} maxLength={200} />
      <JobSection>
        <Label required text="직무" />
      </JobSection>
      <WorkSection>
        <Label required text="담당 업무 (최대 3개)" />
        <ChipBox>
          <Chip size={12} label="UI" />
        </ChipBox>
      </WorkSection>
      <BottomSection>
        <AccountDelete onClick={accountDelete}>회원탈퇴</AccountDelete>
        <Button>수정</Button>
      </BottomSection>

      {isModalOpen && <DeleteModal onClose={closeModal} />}
    </Content>
  );
};

const Content = styled.div`
  width: 686px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const JobSection = styled.div``;
const WorkSection = styled.div``;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AccountDelete = styled.div`
  cursor: pointer;
`;
const ChipBox = styled.div``;

export default ProfileSetting;
