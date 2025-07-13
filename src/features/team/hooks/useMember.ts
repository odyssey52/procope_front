import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTeamUser } from '../services/teamService';

export function useMember(teamId: string) {
  const queryClient = useQueryClient();

  const deleteTeamUserMutation = useMutation({ mutationFn: deleteTeamUser });

  const deleteUserHandle = async (userId: string) => {
    await deleteTeamUserMutation.mutateAsync({ teamId, userId });
    queryClient.removeQueries({ queryKey: ['teamUser'] });
  };

  return {
    deleteUserHandle,
  };
}
