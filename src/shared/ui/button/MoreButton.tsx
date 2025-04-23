'use client';

import { IconMenuCircleVertical } from '@/shared/assets/icons/line';
import React from 'react';
import styled from 'styled-components';

const MoreButton = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Wrapper {...props}>
      <IconMenuCircleVertical />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-size: 0;
`;

MoreButton.displayName = 'MoreButton';

export default MoreButton;
