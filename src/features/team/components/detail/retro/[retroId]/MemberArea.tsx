'use client';

import { useClickOutside } from '@/shared/hooks/useClickOutside';
import Button from '@/shared/ui/button/Button';
import { useState } from 'react';
import MemberFinder from './MemberFinder';

const MemberArea = ({ teamId, retroId }: { teamId: string; retroId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const handleMemberListOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref}>
      <Button $type="outline" pressed={isOpen} onClick={handleMemberListOpen}>
        Member
      </Button>
      {isOpen && <MemberFinder teamId={teamId} retroId={retroId} />}
    </div>
  );
};

MemberArea.displayName = 'MemberArea';

export default MemberArea;
