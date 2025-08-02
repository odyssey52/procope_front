'use client';

import styled from 'styled-components';

const PageSubTitleSkeleton = () => {
  return <Skeleton />;
};

const Skeleton = styled.div`
  width: 146px;
  height: 24px;
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
`;

PageSubTitleSkeleton.displayName = 'PageSubTitleSkeleton';

export default PageSubTitleSkeleton;
