'use client';

import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import styled from 'styled-components';

const RetroInfoSkeleton = () => {
  return (
    <Wrapper>
      <TextSkeleton width="70%" height={34} />
      <TextSkeleton width="20%" height={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

RetroInfoSkeleton.displayName = 'RetroInfoSkeleton';

export default RetroInfoSkeleton;
