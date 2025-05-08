'use client';

import { createInviteTeam } from '@/features/team/services/teamService';
import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const InvitePage = ({ code }: { code: string }) => {
  const router = useRouter();

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
    createInviteTeamMutation.mutate({ url: code });
  }, [code]);

  return <div>팀에 합류 중입니다...</div>;
};

InvitePage.displayName = 'InvitePage';

export default InvitePage;
