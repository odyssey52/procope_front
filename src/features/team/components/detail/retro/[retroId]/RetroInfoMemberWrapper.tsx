'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetro } from '@/features/team/services/retroService';
import useApiError from '@/shared/hooks/useApiError';
import { toastActions } from '@/shared/store/modal/toast';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import MoreArea from '@/shared/ui/button/MoreArea';
import ItemList from '@/shared/ui/select/ItemList';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import MemberArea from './MemberArea';

interface RetroInfoMemberWrapperProps {
  teamId: string;
  retroId: string;
  client: Client | null;
  isConnected: boolean;
}

const RetroInfoMemberWrapper = ({ teamId, retroId, client, isConnected }: RetroInfoMemberWrapperProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  const { data: onlineMemberList } = useQuery({
    ...retroQueries.readOnlineMemberList({ retroId }),
    enabled: isConnected,
  });
  const { data: retroMemberList } = useQuery({
    ...retroQueries.readRetroMemberList({ teamId, retroId }),
  });

  const sortedMemberList = useMemo(() => {
    const onlineMembers = onlineMemberList || [];
    const retroMembers = retroMemberList || [];

    const convertedOnlineMembers = onlineMembers.map((member) => ({
      userId: member.id,
      name: member.name,
      profileImage: member.picture,
      isOnline: true,
    }));

    const offlineMembers = retroMembers
      .filter((retroMember) => !onlineMembers.some((onlineMember) => onlineMember.id === retroMember.userId))
      .map((member) => ({
        ...member,
        isOnline: false,
      }));

    return [...convertedOnlineMembers, ...offlineMembers];
  }, [retroMemberList, onlineMemberList]);

  const deleteRetroMutation = useMutation({
    mutationFn: () => deleteRetro({ teamId, retroId }),
  });

  const handleDeleteRetro = async () => {
    try {
      await deleteRetroMutation.mutateAsync();
      queryClient.invalidateQueries({ queryKey: retroQueries.readRetroList({ teamId }).queryKey });
      router.replace(`/team/${teamId}/retro`);
      toastActions.open({
        title: '회고가 삭제되었습니다.',
        state: 'success',
      });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (client && client.connected) {
      const memberSubscription = client.subscribe('/user/topic/members', (message) => {
        const data = JSON.parse(message.body);
        if (data.code === 'UPDATE') {
          queryClient.invalidateQueries({ queryKey: retroQueries.readOnlineMemberList({ retroId }).queryKey });
        }
      });
      return () => {
        memberSubscription.unsubscribe();
      };
    }
  }, [client]);

  return (
    <Wrapper>
      {sortedMemberList && (
        <AvatarGroup
          profileList={sortedMemberList.map((user) => ({
            nickname: user.name,
            image: user.profileImage,
            isOnline: user.isOnline,
          }))}
          size={32}
        />
      )}
      <MemberArea teamId={teamId} retroId={retroId} />
      <MoreArea
        size={40}
        menuList={
          <ItemList
            selectOptionList={[{ value: '삭제', label: '삭제' }]}
            valueHandler={handleDeleteRetro}
            width="112px"
          />
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  align-items: center;
`;

RetroInfoMemberWrapper.displayName = 'RetroInfoMemberWrapper';

export default RetroInfoMemberWrapper;
