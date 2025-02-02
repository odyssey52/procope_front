'use client';

import { useRouter } from 'next/navigation';
import userInfoQueries from '@/query/user/info/userInfoQueries';
import { invalidateRefreshToken } from '@/services/auth/refresh/refreshTokenService';
import useAuthStore from '@/store/auth/auth';
import useUserStore from '@/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IconHome, IconOut, IconSetting } from '@/assets/icons/line';
import { elevation } from '@/styles/mixin';
import { useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Avatar from './ui/avatar/Avatar';
import ItemList from './ui/select/ItemList';

const Header = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { data, isSuccess } = useQuery({ ...userInfoQueries.readUserInfo });
  const { setUser } = useUserStore();

  const invalidateRefreshTokenMutation = useMutation({ mutationFn: invalidateRefreshToken });

  const handleLogout = async () => {
    try {
      await invalidateRefreshTokenMutation.mutateAsync();
      logout();
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃 중 문제가 발생했습니다.');
    }
  };

  const selectOptionList = [
    {
      leftContent: <Avatar />,
      value: '강보민',
      description: '프론트엔드',
    },
    {
      leftContent: <IconHome />,
      value: '홈',
    },
    {
      leftContent: <IconSetting />,
      value: '계정 설정',
    },
    {
      leftContent: <IconOut />,
      value: '로그아웃',
    },
  ];

  const profileHandler = () => {
    return (
      <SettingOption>
        <ItemList selectOptionList={selectOptionList} valueHandler={() => {}} />
      </SettingOption>
    );
  };

  useEffect(() => {
    if (isSuccess) {
      const { id, name, email, username } = data.userContext;
      setUser({ id, name, email, username });
    }
  }, [data, isSuccess]);
  return (
    <Wrapper>
      <Logo type="icon" size={36} />
      <Avatar onClick={() => router.push('/accountSetting')} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  padding: 8px 24px;
`;

const SettingOption = styled.div`
  width: 240px;
  height: 236px;
  background-color: white;
  ${elevation.shadow4}
`;

Header.displayName = 'Header';

export default Header;
