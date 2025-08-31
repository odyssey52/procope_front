'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import teamQueries from '../query/teamQueries';

export const useTeamDetailQuery = () => {
  const { teamId } = useParams() as { teamId: string };

  return useQuery({
    ...teamQueries.readTeamDetail({ teamId: teamId! }),
    enabled: !!teamId,
  });
};
