'use client';

import { createRetroMember } from '@/features/team/services/retroService';
import { RetroMemberListItem } from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import Avatar from '@/shared/ui/avatar/Avatar';
import SelectOption from '@/shared/ui/select/SelectOption';
import Toggle from '@/shared/ui/toggle/Toggle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

interface MemberFinderItemProps {
  user: RetroMemberListItem;
  teamId: string;
  retroId: string;
}

const MemberFinderItem = ({ user, teamId, retroId }: MemberFinderItemProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();

  // useState 제거!
  // const [inviteStatus, setInviteStatus] = useState(user.inviteStatus);

  const createRetroMemberMutation = useMutation({
    mutationFn: (targetUserId: string) => createRetroMember({ teamId, retroId }, { targetUserId }),
    onMutate: async (targetUserId) => {
      await queryClient.cancelQueries({ queryKey: ['retroMembers', teamId, retroId] });

      const previousMembers = queryClient.getQueryData(['retroMembers', teamId, retroId]);

      // Query 캐시를 직접 업데이트
      queryClient.setQueryData(['retroMembers', teamId, retroId], (old: any) => {
        return old?.map((member: any) => (member.userId === targetUserId ? { ...member, inviteStatus: true } : member));
      });

      return { previousMembers };
    },
    onError: (err, targetUserId, context) => {
      if (context?.previousMembers) {
        queryClient.setQueryData(['retroMembers', teamId, retroId], context.previousMembers);
      }
      handleError(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['retroMembers', teamId, retroId] });
    },
  });

  const handleToggleInviteStatus = async () => {
    try {
      // setInviteStatus(true); // 이 줄 제거!
      await createRetroMemberMutation.mutateAsync(user.userId);
    } catch (error) {
      // setInviteStatus(false); // 이 줄도 제거!
      handleError(error);
    }
  };

  // 현재 상태를 Query 캐시에서 가져옴
  const members = queryClient.getQueryData(['retroMembers', teamId, retroId]) as RetroMemberListItem[] | undefined;
  const currentMember = members?.find((m: RetroMemberListItem) => m.userId === user.userId);
  const inviteStatus = currentMember?.inviteStatus ?? user.inviteStatus;

  return (
    <Wrapper>
      <SelectOption
        value={user.name}
        valueHandler={() => {}}
        width="100%"
        leftContent={<Avatar image={user.profileImage} size={32} />}
        rightContent={<Toggle onClick={handleToggleInviteStatus} checked={inviteStatus} />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

MemberFinderItem.displayName = 'MemberFinderItem';

export default MemberFinderItem;
