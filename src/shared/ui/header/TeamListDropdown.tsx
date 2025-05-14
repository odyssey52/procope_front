'use client';

import { Suspense } from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from '../LoadingSpinner';
import TeamListDropdownContent from './TeamListDropdownContent';

const TeamListDropdown = () => {
  return (
    <Wrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <TeamListDropdownContent />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
  position: absolute;
  top: 100%;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px;
  margin-top: 4px;
  z-index: 1000;
`;

TeamListDropdown.displayName = 'TeamListDropdown';

export default TeamListDropdown;
