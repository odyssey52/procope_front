'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroMember, deleteRetroMember } from '@/features/team/services/retroService';
import useApiError from '@/shared/hooks/useApiError';
import Avatar from '@/shared/ui/avatar/Avatar';
import SelectOption from '@/shared/ui/select/SelectOption';
import Toggle from '@/shared/ui/toggle/Toggle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import { MemberFinderUser } from './MemberFinder';

interface MemberFinderItemProps {
  user: MemberFinderUser;
  teamId: string;
  retroId: string;
}

const MemberFinderItem = ({ user, teamId, retroId }: MemberFinderItemProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();

  const createRetroMemberMutation = useMutation({
    mutationFn: (targetUserId: string) => createRetroMember({ teamId, retroId }, { targetUserId }),
    onMutate: async (targetUserId: string) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({ queryKey: retroQueries.readRetroMemberList({ teamId, retroId }).queryKey });

      // 이전 데이터 백업
      const previousRetroMemberList = queryClient.getQueryData(
        retroQueries.readRetroMemberList({ teamId, retroId }).queryKey,
      );

      // optimistic update
      queryClient.setQueryData(retroQueries.readRetroMemberList({ teamId, retroId }).queryKey, (old: any) => {
        if (!old) return old;
        return [
          ...old,
          { userId: targetUserId, name: user.user.name, profileImage: user.user.picture, inviteStatus: true },
        ];
      });

      return { previousRetroMemberList };
    },
    onError: (err, targetUserId, context) => {
      // 실패 시 이전 데이터로 롤백
      if (context?.previousRetroMemberList) {
        queryClient.setQueryData(
          retroQueries.readRetroMemberList({ teamId, retroId }).queryKey,
          context.previousRetroMemberList,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: retroQueries.readRetroMemberList({ teamId, retroId }).queryKey });
    },
  });

  const deleteRetroMemberMutation = useMutation({
    mutationFn: (targetUserId: string) => deleteRetroMember({ teamId, retroId }, { targetUserId }),
    onMutate: async (targetUserId: string) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({ queryKey: retroQueries.readRetroMemberList({ teamId, retroId }).queryKey });

      // 이전 데이터 백업
      const previousRetroMemberList = queryClient.getQueryData(
        retroQueries.readRetroMemberList({ teamId, retroId }).queryKey,
      );

      // optimistic update
      queryClient.setQueryData(retroQueries.readRetroMemberList({ teamId, retroId }).queryKey, (old: any) => {
        if (!old) return old;
        return old.filter((member: any) => member.userId !== targetUserId);
      });

      return { previousRetroMemberList };
    },
    onError: (err, targetUserId, context) => {
      // 실패 시 이전 데이터로 롤백
      if (context?.previousRetroMemberList) {
        queryClient.setQueryData(
          retroQueries.readRetroMemberList({ teamId, retroId }).queryKey,
          context.previousRetroMemberList,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: retroQueries.readRetroMemberList({ teamId, retroId }).queryKey });
    },
  });

  const handleToggleInviteStatus = async () => {
    try {
      if (inviteStatus) {
        await deleteRetroMemberMutation.mutateAsync(user.user.id);
      } else {
        await createRetroMemberMutation.mutateAsync(user.user.id);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const inviteStatus = user.isRetroMember;

  return (
    <Wrapper>
      <SelectOption
        display={user.user.name}
        width="100%"
        leftContent={<Avatar image={user.user.picture} size={32} />}
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
