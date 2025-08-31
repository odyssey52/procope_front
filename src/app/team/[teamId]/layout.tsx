'use client';

import HeaderLayout from '@/features/layout/HeaderLayout';
import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import { TEAM_SIDE_NAV_TABS } from '@/shared/constants/sideNavTab';
import useTeamStore from '@/shared/store/team/team';
import SideNav from '@/shared/ui/tab/SideNav';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const layout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const teamId = params.teamId as string;
  const { setTeamInfo, resetTeamInfo } = useTeamStore();

  const { data: teamData } = useTeamDetailQuery();

  useEffect(() => {
    setTeamInfo(teamData || null);
    return () => {
      resetTeamInfo();
    };
  }, [teamData]);

  return (
    <HeaderLayout>
      <ContentWrapper>
        <SideNav tabList={TEAM_SIDE_NAV_TABS(teamId)} />
        <Content>{children}</Content>
      </ContentWrapper>
    </HeaderLayout>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-grow: 1;
  height: calc(100vh - 56px);
`;

export default layout;
