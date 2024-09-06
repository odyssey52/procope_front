import { confirmModalActions } from '@/store/modal/confirmModal';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import LoginSection from './LoginSection';
import { useEffect } from 'react';
import Icon from '@/components/common/ui/icon/Icon';

const Login = () => {
  const handleClick = () => {
    confirmModalActions.open({
      icon: <Icon src="/assets/icons/graphic/glass/userbook.svg" />,
      title: '추가정보 입력이 필요합니다.',
      description: '작성 중이신 회원가입 페이지로 이동합니다.',
      confirmLabel: '반가워요',
      onConfirm: () => console.log('hello world'),
    });
  };
  useEffect(() => {
    handleClick();
  }, []);
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
