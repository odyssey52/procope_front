'use client';

import { RetroProblemRoleItem } from '@/features/team/services/retroService.type';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import React, { useState } from 'react';
import styled from 'styled-components';
import TagJob, { JobType } from '@/shared/ui/tag/TagJob';
import { theme } from '@/shared/styles/theme';
import { zIndex } from '@/shared/styles/mixin';
import ItemList from '@/shared/ui/select/ItemList';
import propertiesRolesQueries from '@/features/properties/query/roles/propertiesRolesQueries';
import { useQuery } from '@tanstack/react-query';

interface ProblemCategorySelectProps {
  roles: RetroProblemRoleItem[];
  onToggle: (roleId: number) => void;
}

const ProblemCategorySelect = ({ roles, onToggle }: ProblemCategorySelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const { data } = useQuery({
    ...propertiesRolesQueries.readPropertiesRoles,
    enabled: isOpen,
  });

  const roleList = data?.roles.map((role) => ({
    id: role.id,
    role: role.name as JobType,
  }));

  const handleToggle = (e: React.MouseEvent<SVGSVGElement>, roleId: number) => {
    e.stopPropagation();
    e.preventDefault();
    onToggle(roleId);
  };

  console.log(roleList);
  console.log(data);
  return (
    <Wrapper ref={ref} $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {roles.map((role) => (
        <TagJob
          key={role.id}
          type={role.role}
          bgColor={theme.sementicColors.bg.tertiary_hover_pressed}
          onClose={(e) => handleToggle(e, role.id)}
        />
      ))}
      {isOpen && roleList && (
        <ItemListWrapper>
          <ItemList<RetroProblemRoleItem, JobType>
            selectOptionList={roleList.map((role) => ({
              id: role.role,
              value: role,
              label: <TagJob type={role.role} bgColor={theme.sementicColors.bg.tertiary_hover_pressed} />,
            }))}
            valueHandler={(value) => onToggle(value.id)}
            value={roles[0]}
            width="100%"
          />
        </ItemListWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 40px;
  gap: 8px;
  flex-grow: 1;
  padding: 7px;
  border-radius: 8px;
  border: 1px solid transparent;
  &:hover {
    background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  }
`;

const ItemListWrapper = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 100%;
  ${zIndex.layer1}
`;

ProblemCategorySelect.displayName = 'ProblemCategorySelect';

export default ProblemCategorySelect;
