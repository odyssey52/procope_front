'use client';

import { createRetroMember, deleteRetroMember } from '@/features/team/services/retroService';
import { RetroMemberListItem } from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import Avatar from '@/shared/ui/avatar/Avatar';
import SelectOption from '@/shared/ui/select/SelectOption';
import Toggle from '@/shared/ui/toggle/Toggle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

interface MemberFinderItemProps {
  user: RetroMemberListItem;
  teamId: string;
  retroId: string;
}

const MemberFinderItem = ({ user, teamId, retroId }: MemberFinderItemProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();

  const createRetroMemberMutation = useMutation({
    mutationFn: (targetUserId: string) => createRetroMember({ teamId, retroId }, { targetUserId }),
    onMutate: async (targetUserId) => {
      await queryClient.cancelQueries({ queryKey: ['retroMembers', teamId, retroId] });

      const previousMembers = queryClient.getQueryData(['retroMembers', teamId, retroId]);

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

  const deleteRetroMemberMutation = useMutation({
    mutationFn: (targetUserId: string) => deleteRetroMember({ teamId, retroId }, { targetUserId }),
    onMutate: async (targetUserId) => {
      await queryClient.cancelQueries({ queryKey: ['retroMembers', teamId, retroId] });

      const previousMembers = queryClient.getQueryData(['retroMembers', teamId, retroId]);

      queryClient.setQueryData(['retroMembers', teamId, retroId], (old: any) => {
        return old?.map((member: any) => {
          return member.userId === targetUserId ? { ...member, inviteStatus: false } : member;
        });
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
      if (inviteStatus) {
        await deleteRetroMemberMutation.mutateAsync(user.userId);
      } else {
        await createRetroMemberMutation.mutateAsync(user.userId);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const members = queryClient.getQueryData(['retroMembers', teamId, retroId]) as RetroMemberListItem[] | undefined;
  const currentMember = members?.find((m: RetroMemberListItem) => m.userId === user.userId);
  const inviteStatus = currentMember?.inviteStatus ?? user.inviteStatus;

  return (
    <Wrapper>
      <SelectOption
        display={user.name}
        onClick={() => {}}
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
