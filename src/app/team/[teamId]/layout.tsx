'use client';

import SideNav from '@/shared/ui/tab/SideNav';
import HeaderLayout from '@/features/layout/HeaderLayout';
import { TEAM_SIDE_NAV_TABS } from '@/shared/constants/sideNavTab';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import useTeamStore from '@/shared/lib/store/team/team';
import { useQuery } from '@tanstack/react-query';
import teamQueries from '@/features/team/query/teamQueries';

const layout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const teamId = params.teamId as string;
  const { setTeamInfo, resetTeamInfo } = useTeamStore();

  const { data: teamData } = useQuery({
    ...teamQueries.readTeamDetail({ teamId }),
    enabled: !!teamId,
  });

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
  flex-grow: 1;
`;

export default layout;
