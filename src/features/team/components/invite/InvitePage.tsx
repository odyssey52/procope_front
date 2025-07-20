'use client';

import { createInviteTeam } from '@/features/team/services/teamService';
import { MESSAGES } from '@/shared/constants/messages';
import useApiError from '@/shared/lib/hooks/useApiError';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const InvitePage = () => {
  const router = useRouter();
  const params = useParams();
  const code = params.code as string;

  const { handleError } = useApiError();
  const createInviteTeamMutation = useMutation({
    mutationFn: createInviteTeam,
    onSuccess: () => {
      toastActions.open({
        state: 'success',
        title: MESSAGES.TEAM_JOIN_SUCCESS,
      });
      router.push('/team');
    },
  });

  const inviteTeam = async () => {
    try {
      await createInviteTeamMutation.mutateAsync({ url: code });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (code) {
      inviteTeam();
    }
    // if (code) {
    //   if (accessToken) {
    //     createInviteTeamMutation.mutate({ url: code });
    //   } else {
    //     localStorage.setItem('previousPath', `/invite/${code}`);
    //     router.push('/login');
    //   }
    // }
  }, [code]);

  return <div>팀에 합류 중입니다...</div>;
};

InvitePage.displayName = 'InvitePage';

export default InvitePage;
