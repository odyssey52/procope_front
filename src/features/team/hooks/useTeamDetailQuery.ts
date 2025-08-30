// hooks/queries/useTeamDetailQuery.ts
import { useQuery } from '@tanstack/react-query';
import teamQueries from '../query/teamQueries';

interface UseTeamDetailQueryProps {
  teamId?: string;
}

export const useTeamDetailQuery = ({ teamId }: UseTeamDetailQueryProps) => {
  return useQuery({
    ...teamQueries.readTeamDetail({ teamId: teamId! }),
    enabled: !!teamId,
  });
};
