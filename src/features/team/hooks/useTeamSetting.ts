import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { deleteTeam, secessionTeam } from '../services/teamService';

export function useTeamSetting(teamId: string) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const secessionTeamMutation = useMutation({ mutationFn: secessionTeam });
  const deleteTeamMutation = useMutation({ mutationFn: deleteTeam });

  const secessionHandle = async () => {
    await secessionTeamMutation.mutateAsync({ teamId });
    queryClient.removeQueries({ queryKey: ['team'] });
    localStorage.clear();
    router.push('/login');
  };

  const deleteHandle = async () => {
    await deleteTeamMutation.mutateAsync({ teamId });
    queryClient.removeQueries({ queryKey: ['team'] });
    localStorage.clear();
    router.push('/team');
  };

  return {
    secessionHandle,
    deleteHandle,
  };
}
