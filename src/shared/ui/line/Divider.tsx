'use client';

import { Colors } from '@/shared/styles/theme';
import styled from 'styled-components';

interface DividerProps {
  width?: 2 | 4; // border width 선의 굵기를 의미
  padding?: 4;
  color?: keyof Colors[keyof Colors]; // 모든 색상 임시 허용
}

const Divider = ({ width, padding, color }: DividerProps) => {
  return (
    <Wrapper $padding={padding}>
      <Line $width={width} $color={color} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $padding?: DividerProps['padding'] }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding: ${({ $padding }) => ($padding ? `${$padding}px 0` : '2px 0')};
`;

const Line = styled.span<{ $width?: DividerProps['width']; $color?: DividerProps['color'] }>`
  position: relative;
  display: block;
  background-color: ${({ $color, theme }) => $color ?? theme.sementicColors.border.primary};
  height: ${({ $width }) => $width ?? 1}px;
`;

Divider.displayName = 'Divider';

export default Divider;
