'use client';

import styled from 'styled-components';

interface DividerProps {
  width?: 2 | 4; // border width 선의 굵기를 의미
  padding?: 4;
}

const Divider = ({ width, padding }: DividerProps) => {
  return (
    <Wrapper $padding={padding}>
      <Line $width={width} />
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

const Line = styled.span<{ $width?: DividerProps['width'] }>`
  position: relative;
  display: block;
  background-color: ${({ theme }) => theme.sementicColors.border.primary};
  height: ${({ $width }) => $width ?? 1}px;
`;

Divider.displayName = 'Divider';

export default Divider;
