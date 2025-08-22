'use client';

import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import useAuthStore from '@/shared/store/auth/auth';
import useTeamStore from '@/shared/store/team/team';
import useUserStore from '@/shared/store/user/user';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import TeamListArea from './TeamListArea';
import UserArea from './UserArea';

const Header = () => {
  const { accessToken, logoutType } = useAuthStore();
  const { setUser } = useUserStore();
  const { teamInfo } = useTeamStore();

  const { data, isSuccess } = useQuery({
    ...userInfoQueries.readUserInfo(accessToken || ''),
    enabled: logoutType !== 'manual',
  });

  const { userContext, roleInfo } = data || {};

  useEffect(() => {
    if (isSuccess) {
      const { id, name, email, username } = userContext || {};
      setUser({ id: id || '', name: name || '', email: email || '', username: username || '' });
    }
  }, [userContext, isSuccess, setUser]);
  return (
    <Wrapper>
      <LeftBox>
        <Logo type="icon" size={36} />
        {teamInfo && <TeamListArea teamName={teamInfo.name} />}
      </LeftBox>
      <UserArea
        userData={{
          name: userContext?.name,
          picture: userContext?.picture,
          roleName: roleInfo?.name,
        }}
      />
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
