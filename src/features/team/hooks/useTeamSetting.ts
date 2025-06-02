import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { MESSAGES } from '@/shared/constants/messages';
import { deleteTeam, secessionTeam, updateTeam } from '../services/teamService';
import * as types from '../services/teamService.type';

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
