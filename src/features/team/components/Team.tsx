import HeaderLayout from '@/features/layout/HeaderLayout';
import Container from '@/shared/ui/Container';
import { Suspense } from 'react';
import styled from 'styled-components';
import SkeletonTeamContents from './SkeletonTeamContents';
import TeamContent from './TeamContents';

const Team = () => {
  return (
    <HeaderLayout>
      <TeamContainer>
        <Suspense fallback={<SkeletonTeamContents />}>
          <TeamContent />
        </Suspense>
      </TeamContainer>
    </HeaderLayout>
  );
};

const TeamContainer = styled(Container)`
  flex-grow: 1;
`;

Team.displayName = 'Team';

export default Team;
