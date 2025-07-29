'use client';

import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import useAuthStore from '@/shared/store/auth/auth';
import useTeamStore from '@/shared/store/team/team';
import useUserStore from '@/shared/store/user/user';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import Logo from '../Logo';
import Tab2 from '../tab/Tab2';
import TeamListDropdown from './TeamListDropdown';
import UserArea from './UserArea';

const Header = () => {
  const { accessToken } = useAuthStore();
  const { setUser } = useUserStore();
  const { logoutType } = useAuthStore();
  const { teamInfo } = useTeamStore();
  const { data, isSuccess } = useQuery({
    ...userInfoQueries.readUserInfo(accessToken || ''),
    enabled: logoutType !== 'manual',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserAreaOpen, setIsUserAreaOpen] = useState(false);

  const [avatar, setAvatar] = useState<{
    type: 'profile' | 'initial';
    image: string | undefined;
    nickname: string | undefined;
  }>(() => ({
    type: 'profile',
    image: data?.userContext.picture,
    nickname: data?.userContext.name,
  }));

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeUserArea = useCallback(() => {
    setIsUserAreaOpen(false);
  }, []);

  const handleUserAreaClick = () => {
    setIsUserAreaOpen((prev) => !prev);
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
  }, [data?.userContext.picture, isSuccess, setUser]);

  return (
    <Wrapper>
      <LeftBox>
        <Logo type="icon" size={36} />
        {teamInfo && <Tab2 name={teamInfo.name} onClick={() => setIsDropdownOpen((prev) => !prev)} />}
        {isDropdownOpen && <TeamListDropdown closeDropdown={closeDropdown} />}
      </LeftBox>
      {isSuccess && (
        <Avatar
          type={data?.userContext.picture ? 'profile' : 'initial'}
          image={data?.userContext.picture}
          nickname={data?.userContext.name}
          onClick={handleUserAreaClick}
        />
      )}
      {isUserAreaOpen && (
        <UserArea
          userData={{
            name: data?.userContext.name,
            picture: data?.userContext.picture,
            roleName: data?.roleInfo?.name,
          }}
          closeUserArea={closeUserArea}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  padding: 0 24px;
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

Header.displayName = 'Header';

export default Header;
