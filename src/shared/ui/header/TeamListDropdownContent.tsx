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
      label: team.name,
      value: team.teamId,
    })) || [];

  const handleTeamSelect = (teamId: string | number) => {
    router.push(`/team/${teamId}/dashboard`);
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
