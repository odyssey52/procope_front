'use client';

import HeaderLayout from '@/features/layout/HeaderLayout';
import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import useTeamStore from '@/shared/store/team/team';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const layout = ({ children, sidenav }: { children: ReactNode; sidenav: ReactNode }) => {
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
        <aside>{sidenav}</aside>
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
