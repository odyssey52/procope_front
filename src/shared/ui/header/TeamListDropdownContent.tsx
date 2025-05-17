'use client';

import teamQueries from '@/features/team/query/teamQueries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import ItemList from '../select/ItemList';

const TeamListDropdownContent = () => {
  const router = useRouter();
  const { data: teamData } = useSuspenseQuery({ ...teamQueries.readTeamList });

  const selectOptionList =
    teamData?.team.map((team) => ({
      value: team.name,
      id: team.teamId,
    })) || [];

  const handleTeamSelect = (value: string, id?: string | number) => {
    if (id) {
      router.push(`/team/${id}/dashboard`);
    }
  };

  return (
    <Wrapper>
      <ItemList selectOptionList={selectOptionList} valueHandler={handleTeamSelect} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

TeamListDropdownContent.displayName = 'TeamListDropdownContent';

export default TeamListDropdownContent;
