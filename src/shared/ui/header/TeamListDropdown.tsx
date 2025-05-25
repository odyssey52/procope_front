'use client';

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import { Suspense } from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from '../LoadingSpinner';
import TeamListDropdownContent from './TeamListDropdownContent';

const TeamListDropdown = ({ closeDropdown }: { closeDropdown: () => void }) => {
  const ref = useClickOutside<HTMLDivElement>(closeDropdown);

  return (
    <Wrapper ref={ref}>
      <Suspense
        fallback={
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        }
      >
        <TeamListDropdownContent />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  z-index: 1000;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(40px * 8);
  width: 240px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  box-shadow:
    0px 2px 4px 0px rgba(0, 0, 0, 0.16),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
`;

TeamListDropdown.displayName = 'TeamListDropdown';

export default TeamListDropdown;
