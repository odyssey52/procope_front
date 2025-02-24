'use client';

import { useRouter } from 'next/navigation';
import userInfoQueries from '@/query/user/info/userInfoQueries';
import { invalidateRefreshToken } from '@/services/auth/refresh/refreshTokenService';
import useAuthStore from '@/store/auth/auth';
import useUserStore from '@/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IconHome, IconOut, IconSetting } from '@/assets/icons/line';
import { elevation } from '@/styles/mixin';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Avatar from './ui/avatar/Avatar';
import ItemList from './ui/select/ItemList';
import SelectOption from './ui/select/SelectOption';

const Header = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { data, isSuccess } = useQuery({ ...userInfoQueries.readUserInfo });
  const { setUser } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

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
  const valueHandler = (value: string) => {
    setIsOpen(false);
    if (value === '홈') router.push('/team');
    else if (value === '계정 설정') router.push('/accountSetting');
    else if (value === '로그아웃') handleLogout();
  };

  const selectOptionList = [
    {
      leftContent: <Avatar nickname="B" />,
      value: data ? data.userContext.name : '',
      description: data ? data.roleInfo.name : '',
      span: 'long',
    },
    {
      leftContent: <IconHome />,
      value: '홈',
    },
    {
      leftContent: <IconSetting />,
      value: '계정 설정',
      span: 'short',
    },
    {
      leftContent: <IconOut />,
      value: '로그아웃',
    },
  ];

  const profileHandler = () => {
    setIsOpen((prev) => !prev);
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
      <Avatar onClick={profileHandler} />
      {isOpen && (
        <SettingOption onClick={(e) => e.stopPropagation()}>
          {selectOptionList.map((value) => {
            return (
              <div key={value.value}>
                <SelectOption
                  leftContent={value.leftContent}
                  description={value.description}
                  value={value.value}
                  valueHandler={valueHandler}
                />
                {value.span && <Span $span={value.span} />}
              </div>
            );
          })}
        </SettingOption>
      )}
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
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 48px;
  right: 24px;
  width: 240px;
  background-color: white;
  border-radius: 12px;
  padding: 12px 0px;
  z-index: 1;
  ${elevation.shadow4}
`;
const Span = styled.div<{ $span?: string }>`
  width: ${({ $span }) => $span && ($span === 'long' ? '240px' : '216px')};
  border-bottom: ${({ $span, theme }) => ($span ? `1px solid ${theme.sementicColors.border.primary}` : 'none')};
  margin: 0 auto;
  padding-top: 8px;
`;

Header.displayName = 'Header';

export default Header;
