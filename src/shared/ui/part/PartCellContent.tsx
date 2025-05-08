'use client';

import React from 'react';
import styled from 'styled-components';

interface PartCellContentProps {
  size?: 44 | 56 | 64 | 80;
  children: React.ReactNode;
}

const getIconSize = (size: PartCellContentProps['size']) => {
  switch (size) {
    case 44:
      return 36;
    case 56:
      return 36;
    case 64:
      return 48;
    case 80:
      return 48;
    default:
      return 36;
  }
};
const PartCellContent = ({ size = 56, children }: PartCellContentProps) => {
  return <Wrapper $size={size}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ $size: PartCellContentProps['size'] }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  height: ${({ $size }) => $size}px;
  border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  svg {
    width: ${({ $size }) => getIconSize($size)}px;
    height: ${({ $size }) => getIconSize($size)}px;
  }

  user-select: none;
  cursor: default;

  &:active {
    border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary_hover_pressed};
    background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }
`;

PartCellContent.displayName = 'PartCellContent';
export default PartCellContent;
