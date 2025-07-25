'use client';

import styled, { css } from 'styled-components';

interface MoreIndicatorProps {
  count: number;
  size?: 16 | 24 | 32 | 48;
  type?: 'transparent';
}

const MoreIndicator = ({ count, size = 24, type }: MoreIndicatorProps) => {
  return (
    <Wrapper $size={size} $type={type}>
      {count}
    </Wrapper>
  );
};

const getTypeStyles = (type?: 'transparent') => {
  if (type === 'transparent') {
    return css`
      background-color: ${({ theme }) => theme.sementicColors.bg.info_subtle};
      color: ${({ theme }) => theme.sementicColors.text.brand};
      border: 1px solid ${({ theme }) => theme.sementicColors.border.info_subtle};
    `;
  }
  return css`
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
    border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
    color: ${({ theme }) => theme.sementicColors.text.primary};
  `;
};

const getSizeStyles = (size?: 16 | 24 | 32 | 48) => {
  switch (size) {
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
};

const Wrapper = styled.div<{ $size?: 16 | 24 | 32 | 48; $type?: 'transparent' }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  ${({ theme }) => theme.fontStyle.body_16_medium};
  ${({ $type }) => getTypeStyles($type)}
  ${({ $size }) => getSizeStyles($size)}
`;

MoreIndicator.displayName = 'MoreIndicator';

export default MoreIndicator;
