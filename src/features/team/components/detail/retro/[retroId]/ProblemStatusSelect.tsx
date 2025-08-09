'use client';

import { ProblemKanbanStatus } from '@/features/team/services/retroService.type';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import ItemList from '@/shared/ui/select/ItemList';
import StateTag from '@/shared/ui/tag/StateTag';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface ProblemStatusSelectProps {
  status: ProblemKanbanStatus;
  onChange: (status: ProblemKanbanStatus) => void;
}

const ProblemStatusSelect = ({ status, onChange }: ProblemStatusSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const selectOptionList = [
    {
      id: 'RCG',
      value: 'RCG' as ProblemKanbanStatus,
      label: <StateTag $status="error">개선점</StateTag>,
    },
    {
      id: 'PRG',
      value: 'PRG' as ProblemKanbanStatus,
      label: <StateTag $status="warning">개선중</StateTag>,
    },
    {
      id: 'OK',
      value: 'OK' as ProblemKanbanStatus,
      label: <StateTag $status="success">개선완료</StateTag>,
    },
  ];

  const handleChange = (next: ProblemKanbanStatus) => {
    onChange(next);
    setIsOpen(false);
  };

  return (
    <ProblemStatusSelectWrapper ref={ref} $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StateTag $status="error">개선점</StateTag>
      <ItemList<ProblemKanbanStatus, string>
        selectOptionList={selectOptionList}
        valueHandler={handleChange}
        value={status}
      />
    </ProblemStatusSelectWrapper>
  );
};

const ProblemStatusSelectWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  flex-grow: 1;
  padding: 7px;
  border-radius: 8px;
  border: 1px solid transparent;
  &:hover {
    background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  }
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border: 1px solid ${({ theme }) => theme.sementicColors.border.primary_hover_pressed};
      background: ${({ theme }) => theme.sementicColors.bg.tertiary};
      box-shadow: 0 0 0 2px rgba(47, 78, 118, 0.3);
    `}
`;

ProblemStatusSelect.displayName = 'ProblemStatusSelect';

export default ProblemStatusSelect;
