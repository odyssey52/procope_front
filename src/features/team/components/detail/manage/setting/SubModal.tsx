import { useTeamSetting } from '@/features/team/hooks/useTeamSetting';
import Button from '@/shared/ui/button/Button';
import Modal from '@/shared/ui/modal/common/Modal';
import Text from '@/shared/ui/Text';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  name: 'secession' | 'delete';
  teamId: string;
  onClose: () => void;
}

const SubModal = ({ name, teamId, onClose }: Props) => {
  const { secessionHandle, deleteHandle } = useTeamSetting(teamId);

  const errorIcon = '/assets/icons/graphic/fill/error.svg';
  const data = {
    secession: {
      title: '팀을 탈퇴하시겠습니까?',
      description: '팀을 탈퇴한 이후 작성하신 내용은 보존됩니다.',
      onClick: secessionHandle,
    },
    delete: {
      title: '팀을 삭제하시겠습니까?',
      description: '삭제시 복구가 불가능합니다.',
      onClick: deleteHandle,
    },
  };
  return (
    <Modal portalId="confirm-dislog">
      <Wrapper>
        <Content>
          <TopSection>
            <Image src={errorIcon} width={80} height={80} alt="에러 아이콘 이미지" />
            <TextBox>
              <Text variant="heading_20" color="primary">
                {data[name].title}
              </Text>
              <Text variant="body_16_medium" color="secondary">
                {data[name].description}
              </Text>
            </TextBox>
          </TopSection>
          <BottomSection>
            <Button $type="tertiary" size="48" onClick={() => onClose()}>
              취소
            </Button>
            <Button $type="error" size="48" onClick={data[name].onClick}>
              확인
            </Button>
          </BottomSection>
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default SubModal;

const Wrapper = styled.div`
  width: 450px;
  height: 288px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 16px;
  padding: 24px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const TopSection = styled.div`
  height: 168px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
`;
const BottomSection = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  > button {
    flex-grow: 1;
  }
`;
