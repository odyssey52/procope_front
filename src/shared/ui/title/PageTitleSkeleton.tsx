'use client';

import styled from 'styled-components';

const PageTitleSkeleton = () => {
  return <Skeleton />;
};

const Skeleton = styled.div`
  padding: 8px 12px;
  width: 118px;
  height: 34px;
  border-radius: 17px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
`;

PageTitleSkeleton.displayName = 'PageTitleSkeleton';

export default PageTitleSkeleton;
