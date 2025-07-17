'use client';

import { createInviteTeam } from '@/features/team/services/teamService';
import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/lib/store/modal/toast';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const InvitePage = () => {
  const router = useRouter();
  const params = useParams();
  const code = params.code as string;

  const { isAuthenticated } = useAuthStore();

  const createInviteTeamMutation = useMutation({
    mutationFn: createInviteTeam,
    onSuccess: () => {
      toastActions.open({
        state: 'success',
        title: MESSAGES.TEAM_JOIN_SUCCESS,
      });
      router.push('/team');
    },
    onError: () => {
      toastActions.open({
        state: 'error',
        title: MESSAGES.TEAM_JOIN_FAILED,
        description: MESSAGES.CODE_EXPIRED,
      });
      router.push('/team');
    },
  });

  useEffect(() => {
    if (code) {
      createInviteTeamMutation.mutate({ url: code });
    }
    // if (code) {
    //   if (isAuthenticated) {
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
