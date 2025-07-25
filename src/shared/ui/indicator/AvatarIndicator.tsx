'use client';

import styled, { css } from 'styled-components';

interface AvatarIndicatorProps {
  count: number;
  size?: 16 | 24 | 32 | 48;
}

const AvatarIndicator = ({ count, size = 32 }: AvatarIndicatorProps) => {
  return <Wrapper $size={size}>+{count}</Wrapper>;
};

const getMarginLeft = (size?: number) => {
  switch (size) {
    case 16:
      return '-4px';
    case 24:
      return '-8px';
    case 48:
      return '-12px';
    default:
      return '-10px';
  }
};

const Wrapper = styled.div<{ $size?: 16 | 24 | 32 | 48 }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  color: ${({ theme }) => theme.sementicColors.text.primary};
  ${({ theme }) => theme.fontStyle.body_16_medium};
  ${({ $size }) => {
    switch ($size) {
      case 16:
        return css`
          ${({ theme }) => theme.fontStyle.caption_10_regular};
        `;
      case 24:
        return css`
          ${({ theme }) => theme.fontStyle.body_14_medium};
        `;
      case 32:
        return css`
          ${({ theme }) => theme.fontStyle.body_16_medium};
        `;
      case 48:
        return css`
          ${({ theme }) => theme.fontStyle.heading_20};
        `;
      default:
        return css`
          ${({ theme }) => theme.fontStyle.body_16_medium};
        `;
    }
  }};
  margin-left: ${({ $size }) => getMarginLeft($size)};
`;

AvatarIndicator.displayName = 'AvatarIndicator';

export default AvatarIndicator;
