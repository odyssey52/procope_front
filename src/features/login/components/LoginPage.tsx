'use client';

import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/store/modal/toast';
import { down } from '@/shared/styles/media';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import LoginSection from './LoginSection';

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const logoutType = searchParams.get('logoutType');

  const openLogoutToast = () => {
    console.log('logoutType', logoutType);
    switch (logoutType) {
      case 'user':
        toastActions.open({
          title: MESSAGES.LOGOUT_SUCCESS,
          state: 'success',
        });
        router.replace('/login');
        break;
      case 'refreshTokenExpired':
        toastActions.open({
          title: MESSAGES.ERROR.UNAUTHORIZED,
          state: 'error',
        });
        router.replace('/login');
        break;
      case 'deleteAccount':
        toastActions.open({
          title: MESSAGES.TITLE_DELETE_ACCOUNT_SUCCESS,
          state: 'success',
        });
        router.replace('/login');
        break;
      default:
        router.replace('/login');
    }
  };

  useEffect(() => {
    openLogoutToast();
  }, [logoutType, router]);
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
  ${down('md')`
    padding: 0;
  `}
`;

export default LoginPage;

LoginPage.displayName = 'LoginPage';
