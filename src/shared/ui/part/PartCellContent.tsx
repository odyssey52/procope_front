'use client';

import React from 'react';
import styled from 'styled-components';

interface PartCellContentProps {
  size?: 44 | 56 | 64 | 80;
  width?: string;
  children: React.ReactNode;
}

// const getIconSize = (size: PartCellContentProps['size']) => {
//   switch (size) {
//     case 44:
//       return 36;
//     case 56:
//       return 36;
//     case 64:
//       return 48;
//     case 80:
//       return 48;
//     default:
//       return 36;
//   }
// };

const PartCellContent = ({ size = 56, width, children }: PartCellContentProps) => {
  return (
    <Wrapper $size={size} $width={width}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $size: PartCellContentProps['size']; $width: PartCellContentProps['width'] }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  width: ${({ $width }) => $width};
  height: ${({ $size }) => $size}px;
  border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  position: relative;

  user-select: none;
  cursor: default;
`;

PartCellContent.displayName = 'PartCellContent';
export default PartCellContent;
