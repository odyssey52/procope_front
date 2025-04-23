'use client';

import { createInviteTeam } from '@/features/team/services/teamService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toastActions } from '@/shared/lib/store/modal/toast';

const InvitePage = ({ code }: { code: string }) => {
  const router = useRouter();

  const createInviteTeamMutation = useMutation({
    mutationFn: createInviteTeam,
    onSuccess: () => {
      toastActions.open({
        state: 'success',
        title: '팀에 성공적으로 합류했습니다.',
      });
      router.push('/team');
    },
    onError: () => {
      toastActions.open({
        state: 'error',
        title: '팀 합류에 실패했습니다.',
        description: '초대 링크가 유효하지 않거나 만료되었습니다.',
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
