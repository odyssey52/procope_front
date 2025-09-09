'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetro } from '@/features/team/services/retroService';
import useApiError from '@/shared/hooks/useApiError';
import { toastActions } from '@/shared/store/modal/toast';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import MoreArea from '@/shared/ui/button/MoreArea';
import ItemList from '@/shared/ui/select/ItemList';
import { Client } from '@stomp/stompjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemberArea from './MemberArea';

interface RetroInfoMemberWrapperProps {
  teamId: string;
  retroId: string;
  client: Client | null;
}

const RetroInfoMemberWrapper = ({ teamId, retroId, client }: RetroInfoMemberWrapperProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  // 추후 소켓 응답 받아서 업데이트
  const [onlineMemberList, setOnlineMemberList] = useState([]);
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
        console.log('📨 실시간 데이터 수신:', data);
        if (data.code === 'UPDATE') {
          queryClient.invalidateQueries({ queryKey: retroQueries.readRetroMemberList({ teamId, retroId }).queryKey });
        }
      });
      return () => {
        memberSubscription.unsubscribe();
      };
    }
  }, [client]);

  return (
    <Wrapper>
      {/* <AvatarGroup
        profileList={onlineMemberList.map((user) => ({
          nickname: user.name,
          image: user.profileImageUrl,
          isOnline: true,
        }))}
        size={32}
      /> */}
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
