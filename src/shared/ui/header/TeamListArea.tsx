'use client';

import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useState } from 'react';
import styled from 'styled-components';
import TeamListDropdown from './TeamListDropdown';
import Tab2 from '../tab/Tab2';

const TeamListArea = ({ teamName }: { teamName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper ref={ref}>
      <Tab2 name={teamName} onClick={handleDropdownClick} />
      {isOpen && <TeamListDropdown />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

TeamListArea.displayName = 'TeamListArea';

export default TeamListArea;
