'use client';

import styled from 'styled-components';

const TableSkeleton = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  width: 100%;
  height: 324px;
  padding: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
`;

TableSkeleton.displayName = 'TableSkeleton';

export default TableSkeleton;
