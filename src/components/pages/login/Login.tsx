'use client';

import { HeroSection, LoginSection } from '@/components/pages/login';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper>
      <Content>
        <HeroSection />
        <LoginSection />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 100%;
  padding: 24px 0 24px 24px;
`;

export default Login;

Login.displayName = 'Login';
