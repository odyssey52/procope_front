'use client';

import { IconUsers01 } from '@/shared/assets/icons/line';
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
      <Button
        $type="outline"
        pressed={isOpen}
        onClick={handleMemberListOpen}
        size="36"
        leftIcon={<IconUsers01 size={24} />}
      >
        Member
      </Button>
      {isOpen && <MemberFinder teamId={teamId} retroId={retroId} />}
    </div>
  );
};

MemberArea.displayName = 'MemberArea';

export default MemberArea;
