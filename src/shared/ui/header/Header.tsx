'use client';

import { invalidateRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import { IconHome, IconOut, IconSetting } from '@/shared/assets/icons/line';
import useAuthStore from '@/shared/lib/store/auth/auth';
import useTeamStore from '@/shared/lib/store/team/team';
import useUserStore from '@/shared/lib/store/user/user';
import { elevation } from '@/shared/styles/mixin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Avatar from '../avatar/Avatar';
import SelectOption from '../select/SelectOption';
import Tab2 from '../tab/Tab2';

const Header = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { setUser } = useUserStore();
  const { teamInfo } = useTeamStore();
  const { data, isSuccess } = useQuery({ ...userInfoQueries.readUserInfo });
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState<{
    type: 'profile' | 'initial';
    image: string | undefined;
    nickname: string | undefined;
  }>(() => ({
    type: 'profile',
    image: data?.userContext.picture,
    nickname: data?.userContext.name,
  }));

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

  const profileHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setAvatar({
      type: data?.userContext.picture ? 'profile' : 'initial',
      image: data?.userContext.picture,
      nickname: data?.userContext.name,
    });
    if (isSuccess) {
      const { id, name, email, username } = data.userContext;
      setUser({ id, name, email, username });
    }
  }, [data?.userContext.picture]);

  const selectOptionList = [
    {
      leftContent: <Avatar type={avatar.type} image={avatar.image} nickname={avatar.nickname} />,
      value: data?.userContext?.name || '',
      description: data?.roleInfo?.name || '',
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

  return (
    <Wrapper>
      <LeftBox>
        <Logo type="icon" size={36} />
        {teamInfo && <Tab2 name={teamInfo.name} />}
      </LeftBox>
      {isSuccess && (
        <Avatar type={avatar.type} image={avatar.image} nickname={avatar.nickname} onClick={profileHandler} />
      )}
      {isOpen && isSuccess && (
        <SettingOption onClick={(e) => e.stopPropagation()} data-testid="setting-option">
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
  border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
