'use client';
import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';
import NaverLoginButton from './NaverLoginButton';
import Logo from '@/components/common/Logo';
import Text from '@/components/common/ui/Text';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginSection = () => {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

  return (
    <Wrapper>
      <Content>
        <Logo type="iconText" size={147} />
        <TitleBox>
          <Text variant="heading_24">소셜 계정으로 로그인해 주세요.</Text>
          <Text variant="body_16_semibold" color="tertiary">
            로그인 후 서비스를 이용할 수 있습니다.
          </Text>
        </TitleBox>
        <ButtonBox>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLoginButton />
          </GoogleOAuthProvider>
          <NaverLoginButton />
        </ButtonBox>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  max-width: 480px;
  width: 80%;
  justify-content: center;
  flex-direction: column;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 40px;
`;

const ButtonBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > button {
    width: 100%;
  }
`;
LoginSection.displayName = 'LoginSection';

export default LoginSection;
