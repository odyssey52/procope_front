'use client';

import LogoPlace from '@/features/login/continue/LogoPlace';
import { createInviteTeam } from '@/features/team/services/teamService';
import { MESSAGES } from '@/shared/constants/messages';
import useApiError from '@/shared/hooks/useApiError';
import { toastActions } from '@/shared/store/modal/toast';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
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
      if (error instanceof AxiosError && error.response?.status === 400) {
        toastActions.open({
          state: 'error',
          title: MESSAGES.TEAM_JOIN_ALREADY_MEMBER,
        });
        router.replace('/team');
        return;
      }
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

  return <LogoPlace />;
};

InvitePage.displayName = 'InvitePage';

export default InvitePage;
