'use client';

import Logo from '@/shared/ui/Logo';
import Text from '@/shared/ui/Text';
import { GoogleOAuthProvider } from '@react-oauth/google';
import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';
import NaverLoginButton from './NaverLoginButton';

const LoginModal = () => {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

  return (
    <Wrapper>
      <Head>
        <Logo type="iconText" size={200} />
        <TitleBox>
          <Text variant="heading_24">계속하려면 로그인하세요.</Text>
          <SubTitle>
            안전한 서비스 이용을 위해 로그아웃되었습니다.
            <br />
            계속하려면 로그인이 필요합니다.
          </SubTitle>
        </TitleBox>
      </Head>
      <ButtonBox>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLoginButton />
        </GoogleOAuthProvider>
        <NaverLoginButton />
      </ButtonBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-radius: 12px;
  padding: 56px 40px 40px 40px;
  width: 480px;
  gap: 56px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const SubTitle = styled.div`
  text-align: center;
  ${({ theme }) => theme.fontStyle.body_16_semibold};
  color: ${({ theme }) => theme.sementicColors.text.disabled};
`;

const ButtonBox = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > button {
    width: 100%;
  }
`;
LoginModal.displayName = 'LoginModal';

export default LoginModal;
