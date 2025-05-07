'use client';

import { IconLink } from '@/shared/assets/icons/line';
import Button from '@/shared/ui/button/Button';
import Container from '@/shared/ui/Container';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import HeaderLayout from '@/features/layout/HeaderLayout';
import Text from '@/shared/ui/Text';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { MESSAGES } from '@/shared/constants/messages';

const TeamCreateDone = ({ code }: { code: string }) => {
  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}team/invite/${code}`;
  const router = useRouter();
  const handleToast = () => {
    toastActions.open({
      state: 'success',
      title: MESSAGES.TOAST.CLIPBOARD_COPY_SUCCESS,
    });
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        handleToast();
      },
      (err) => {
        toastActions.open({
          state: 'error',
          title: MESSAGES.TOAST.CLIPBOARD_COPY_ERROR,
        });
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
            <Placeholder value={inviteUrl} disabled />
            <Button leftIcon={<IconLink />} $type="tertiary" onClick={() => copyToClipboard(inviteUrl)}>
              초대 링크 복사
            </Button>
          </ShareBox>
          <StartButton onClick={() => router.push('/team')}>시작하기</StartButton>
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
