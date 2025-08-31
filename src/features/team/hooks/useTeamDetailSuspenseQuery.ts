'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import teamQueries from '../query/teamQueries';

export const useTeamDetailSuspenseQuery = () => {
  const { teamId } = useParams() as { teamId: string };

  return useSuspenseQuery({
    ...teamQueries.readTeamDetail({ teamId: teamId! }),
  });
};
