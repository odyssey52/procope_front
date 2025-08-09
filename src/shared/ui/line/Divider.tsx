'use client';

import styled from 'styled-components';

interface DividerProps {
  width?: number;
  padding?: number;
  color?: string;
  radius?: number;
}

const Divider = ({ width = 1, padding = 2, color, radius }: DividerProps) => {
  return (
    <Wrapper $padding={padding}>
      <Line $width={width} $color={color} $radius={radius} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $padding?: DividerProps['padding'] }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding: ${({ $padding }) => ($padding ? `${$padding}px 0` : '0')};
`;

const Line = styled.span<{
  $width?: DividerProps['width'];
  $color?: DividerProps['color'];
  $radius?: DividerProps['radius'];
}>`
  position: relative;
  display: block;
  background-color: ${({ $color, theme }) => $color ?? theme.sementicColors.border.primary};
  height: ${({ $width }) => $width}px;
  border-radius: ${({ $radius }) => ($radius ? `${$radius}px` : '0')};
`;

Divider.displayName = 'Divider';

export default Divider;
