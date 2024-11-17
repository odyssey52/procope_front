'use client';

import { IconFile, IconHome, IconInteractive, IconSetting, IconUsers02 } from '@/assets/icons/line';
import TabStep from '@/components/common/ui/tab/TabStep';
import { HeroSection, LoginSection } from '@/components/pages/login';
import styled from 'styled-components';

const Login = () => {
  const SIDE_NAV_TABS = [
    {
      name: '대시보드',
      path: '/dashboard',
      icon: <IconHome />,
    },
    {
      name: '목표관리',
      path: '/goal',
      icon: <IconInteractive />,
    },
    {
      name: '회고관리',
      path: '/retrospective',
      icon: <IconFile />,
    },
    {
      name: '팀 관리',
      path: '/team',
      icon: <IconUsers02 />,
      subTabs: [
        {
          name: '팀 설정',
          path: '/team/setting',
        },
        {
          name: '참여 관리',
          path: '/team/member',
        },
      ],
    },
    {
      name: '설정',
      path: '/setting',
      icon: <IconSetting />,
    },
  ];
  // 모달 및 토스트 사용 예시
  // const handleClick = () => {
  //   confirmModalActions.open({
  //     icon: <Image src="/assets/icons/graphic/glass/userbook.png" width={96} height={96} alt="유저북 아이콘 이미지" />,
  //     title: '추가정보 입력이 필요합니다.',
  //     description: '작성 중이신 회원가입 페이지로 이동합니다.',
  //     cancelLabel: '취소',
  //     onCancel: () => console.log('처음부터 다시 시작'),
  //     confirmLabel: '확인',
  //     onConfirm: () => console.log('작성 중이던 스테퍼로 이동'),
  //   });
  // };

  // const handleToast = () => {
  //   toastActions.open({
  //     state: 'warning',
  //     title: '로그인 실패',
  //   });
  // };

  return (
    <Wrapper>
      <Content>
        <HeroSection />
        <LoginSection />
        <TabStep tabList={SIDE_NAV_TABS} />
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
