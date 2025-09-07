'use client';

import SkeletonTaskCard from '@/shared/ui/card/SkeletonTaskCard';
import styled from 'styled-components';

const SkeletonSolutionList = () => {
  return (
    <CardList>
      <SkeletonTaskCard />
      <SkeletonTaskCard />
      <SkeletonTaskCard />
    </CardList>
  );
};

const CardList = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  overflow: visible;
`;

SkeletonSolutionList.displayName = 'SkeletonSolutionList';

export default SkeletonSolutionList;
