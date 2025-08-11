'use client';

import styled from 'styled-components';
import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import SkeletonTaskCard from '@/shared/ui/card/SkeletonTaskCard';

const SkeletonKeepWrapper = () => {
  return (
    <Wrapper>
      <TextSkeleton width="20%" height={24} />
      <CardList>
        <SkeletonTaskCard />
        <SkeletonTaskCard />
        <SkeletonTaskCard />
      </CardList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  padding: 0 48px;
`;

const CardList = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  overflow: visible;
`;

SkeletonKeepWrapper.displayName = 'SkeletonKeepWrapper';

export default SkeletonKeepWrapper;
