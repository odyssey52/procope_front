'use client';

import { IconMenuCircleVertical } from '@/shared/assets/icons/line';
import React from 'react';
import styled from 'styled-components';

interface MoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number | string;
}

const MoreButton = ({ size = 24, ...props }: MoreButtonProps) => {
  return (
    <Wrapper {...props}>
      <IconMenuCircleVertical size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-size: 0;
  cursor: pointer;
`;

MoreButton.displayName = 'MoreButton';

export default MoreButton;
