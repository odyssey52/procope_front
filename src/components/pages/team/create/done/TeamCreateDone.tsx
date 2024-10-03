import Button from '@/components/common/ui/button/Button';
import Container from '@/components/common/ui/Container';
import Placeholder from '@/components/common/ui/placeholder/Placeholder';
import Text from '@/components/common/ui/Text';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { toastActions } from '@/store/modal/toast';
import styled from 'styled-components';

const TeamCreateDone = () => {
  const MOCK_URL = 'www.procope.kr/teamOdyssey123456/share/link';
  const handleToast = () => {
    toastActions.open({
      state: 'success',
      title: '클립보드에 복사되었습니다.',
    });
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        handleToast();
      },
      (err) => {
        console.error('클립보드 복사 실패:', err);
      },
    );
  };
  return (
    <HeaderLayout>
      <Container>
        <Content>
          <TitleBox>
            <Text variant="heading_32" color="primary">
              팀과 함께 시작하기
            </Text>
            <Text variant="body_16_medium" color="secondary">
              URL을 공유해 팀원들을 초대해 주세요.
            </Text>
          </TitleBox>
          <ShareBox>
            <Placeholder value={MOCK_URL} disabled />
            <Button $leftIcon="/assets/icons/line/link.svg" $type="tertiary" onClick={() => copyToClipboard(MOCK_URL)}>
              초대 링크 복사
            </Button>
          </ShareBox>
          <StartButton>시작하기</StartButton>
        </Content>
      </Container>
    </HeaderLayout>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 608px;
  width: 100%;
  gap: 48px;
`;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 23.52vh;
`;
const ShareBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StartButton = styled(Button)`
  align-self: end;
`;
TeamCreateDone.displayName = 'TeamCreateDone';

export default TeamCreateDone;
