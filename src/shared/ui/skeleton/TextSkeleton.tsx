'use client';

import { Colors } from '@/shared/styles/theme';
import styled from 'styled-components';
interface TextSkeletonProps {
  width?: string;
  height?: number;
  color?: keyof Colors['bg'];
}

const TextSkeleton = ({ width = '118px', height = 34, color = 'tertiary' }: TextSkeletonProps) => {
  return <Skeleton $width={width} $height={height} $color={color} />;
};

const Skeleton = styled.div<{ $width: string; $height: number; $color: keyof Colors['bg'] }>`
  position: relative;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height}px;
  border-radius: ${({ $height }) => $height / 2}px;
  background: ${({ theme, $color }) => theme.sementicColors.bg[$color]};
`;

TextSkeleton.displayName = 'TextSkeleton';

export default TextSkeleton;
