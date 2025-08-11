'use client';

import styled from 'styled-components';

interface BoxSkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: number;
}

const BoxSkeleton = ({ width = '100%', height = '324px', borderRadius = 16 }: BoxSkeletonProps) => {
  return <Skeleton $width={width} $height={height} $borderRadius={borderRadius} />;
};

const Skeleton = styled.div<{ $width: string; $height: string; $borderRadius: number }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
`;

BoxSkeleton.displayName = 'BoxSkeleton';

export default BoxSkeleton;
