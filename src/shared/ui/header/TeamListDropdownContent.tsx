'use client';

import teamQueries from '@/features/team/query/teamQueries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { TEAM_RESOURCE_REDIRECT_RULES } from '@/shared/constants/teamRouteRules';
import ItemList from '../select/ItemList';

const TeamListDropdownContent = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split('/');
  const teamIndex = segments.indexOf('team');

  const { data: teamData } = useSuspenseQuery({ ...teamQueries.readTeamList });

  const selectOptionList =
    teamData?.team.map((team) => ({
      label: team.name,
      value: team.teamId,
    })) || [];

  const handleTeamSelect = (teamId: string) => {
    if (teamIndex === -1 || teamIndex + 1 >= segments.length) {
      router.push(`/team/${teamId}/dashboard`);
      return;
    }
    // 팀별 리소스 상세 페이지 등에서 팀 변경 시 규칙에 따라 경로 결정
    const matchedRule = TEAM_RESOURCE_REDIRECT_RULES.find((rule) => rule.pattern.test(pathname));
    if (matchedRule) {
      const redirectPath = matchedRule.getRedirectPath(teamId, segments);
      router.push(redirectPath);
      return;
    }

    const newSegments = [...segments];
    newSegments[teamIndex + 1] = teamId;

    const newPath = newSegments.join('/');

    router.push(newPath);
  };
  return <ItemList selectOptionList={selectOptionList} valueHandler={handleTeamSelect} />;
};

TeamListDropdownContent.displayName = 'TeamListDropdownContent';

export default TeamListDropdownContent;
