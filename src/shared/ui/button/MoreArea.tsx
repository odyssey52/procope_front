'use client';

import { IconMenuCircleVertical } from '@/shared/assets/icons/line';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { zIndex } from '@/shared/styles/mixin';
import React, { useState } from 'react';
import styled from 'styled-components';

interface MoreAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  menuList?: React.ReactNode;
}

const MoreArea = ({ size = 24, menuList, ...props }: MoreAreaProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  return (
    <Wrapper {...props} ref={ref} $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <MoreButton>
        <IconMenuCircleVertical size={size} />
      </MoreButton>
      {isOpen && <MenuList>{menuList}</MenuList>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: relative;
  cursor: pointer;
  ${({ $isOpen }) => $isOpen && zIndex.layer3};
`;

const MoreButton = styled.button`
  font-size: 0;
`;

const MenuList = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

MoreArea.displayName = 'MoreButton';

export default MoreArea;
