'use client';

import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import styled from 'styled-components';
import SkeletonProblemCardList from './SkeletonProblemCardList';

const SkeletonProblemWrapper = () => {
  return (
    <Wrapper>
      <TextSkeleton width="25%" height={24} />
      <Content>
        <SkeletonProblemCardList kanbanStatus="RCG" />
        <SkeletonProblemCardList kanbanStatus="PRG" />
        <SkeletonProblemCardList kanbanStatus="OK" />
      </Content>
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

const Content = styled.div`
  display: flex;
  gap: 16px;
  overflow: visible;
`;

SkeletonProblemWrapper.displayName = 'SkeletonProblemWrapper';

export default SkeletonProblemWrapper;
