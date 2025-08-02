'use client';

import styled from 'styled-components';
interface TextSkeletonProps {
  width?: string;
  height?: number;
}

const TextSkeleton = ({ width = '118px', height = 34 }: TextSkeletonProps) => {
  return <Skeleton $width={width} $height={height} />;
};

const Skeleton = styled.div<{ $width: string; $height: number }>`
  padding: 8px 12px;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height}px;
  border-radius: ${({ $height }) => $height / 2}px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
`;

TextSkeleton.displayName = 'TextSkeleton';

export default TextSkeleton;
