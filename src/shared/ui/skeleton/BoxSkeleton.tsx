'use client';

import { Colors } from '@/shared/styles/theme';
import styled from 'styled-components';

interface BoxSkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: number;
  color?: keyof Colors['bg'];
}

const BoxSkeleton = ({ width = '100%', height = '324px', borderRadius = 16, color = 'tertiary' }: BoxSkeletonProps) => {
  return <Skeleton $width={width} $height={height} $borderRadius={borderRadius} $color={color} />;
};

const Skeleton = styled.div<{ $width: string; $height: string; $borderRadius: number; $color: keyof Colors['bg'] }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background: ${({ theme, $color }) => theme.sementicColors.bg[$color]};
`;

BoxSkeleton.displayName = 'BoxSkeleton';

export default BoxSkeleton;
