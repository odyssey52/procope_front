'use client';

import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface PartHeaderContentProps {
  width?: string;
  size?: 44 | 56 | 64;
  title?: string;
  icon?: React.ReactNode;
}

const PartHeaderContent = ({ width, size = 56, title, icon }: PartHeaderContentProps) => {
  return (
    <Wrapper $size={size} $width={width}>
      {title && (
        <Text variant="body_14_medium" color="secondary">
          {title}
        </Text>
      )}
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $size: PartHeaderContentProps['size']; $width: PartHeaderContentProps['width'] }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: ${({ $width }) => $width};
  height: ${({ $size }) => $size}px;
  padding: 3px 12px;
  min-width: 0;
  border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  min-height: 44px;
  font-size: 0;
  > div {
    white-space: nowrap;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

PartHeaderContent.displayName = 'PartHeaderContent';
export default PartHeaderContent;
