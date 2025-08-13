'use client';

import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import styled from 'styled-components';

const SkeletonSidePanelContent = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TextSkeleton width="70px" height={20} />
        <TextSkeleton width="100%" height={34} />
      </TitleWrapper>
      <ProblemInfo>
        <TextSkeleton width="30%" height={24} />
        <TextSkeleton width="30%" height={24} />
        <TextSkeleton width="30%" height={28} />
      </ProblemInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
  padding-top: 24px;
  overflow-y: scroll;
  flex-grow: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

const ProblemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

SkeletonSidePanelContent.displayName = 'SkeletonSidePanelContent';

export default SkeletonSidePanelContent;
