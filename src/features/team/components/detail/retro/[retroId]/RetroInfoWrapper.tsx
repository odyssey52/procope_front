'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetro, updateRetroDate, updateRetroTitle } from '@/features/team/services/retroService';
import { UpdateRetroDatePayload, UpdateRetroTitlePayload } from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import { toastActions } from '@/shared/store/modal/toast';
import Avatar from '@/shared/ui/avatar/Avatar';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import MoreArea from '@/shared/ui/button/MoreArea';
import TextButton from '@/shared/ui/button/TextButton';
import Error from '@/shared/ui/error/Error';
import ItemList from '@/shared/ui/select/ItemList';
import Text from '@/shared/ui/Text';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot, formatDotToISO } from '@/shared/utils/date';
import { Client } from '@stomp/stompjs';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CalendarArea from './CalendarArea';
import MemberArea from './MemberArea';

interface RetroInfoWrapperProps {
  client: Client | null;
}

const RetroInfoWrapper = ({ client }: RetroInfoWrapperProps) => {
  const params = useParams();
  const router = useRouter();
  const teamId = params.teamId as string;
  const retroId = params.retroId as string;

  const queryClient = useQueryClient();
  const subscriptionRef = useRef<any>(null);
  const { handleError } = useApiError();

  const { data } = useSuspenseQuery({
    ...retroQueries.readRetro({ teamId: teamId as string, retroId: retroId as string }),
  });

  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const updateRetroTitleMutation = useMutation({
    mutationFn: (payload: UpdateRetroTitlePayload) => updateRetroTitle({ teamId, retroId }, payload),
  });

  const updateRetroDateMutation = useMutation({
    mutationFn: (payload: UpdateRetroDatePayload) => updateRetroDate({ teamId, retroId }, payload),
  });

  const deleteRetroMutation = useMutation({
    mutationFn: () => deleteRetro({ teamId, retroId }),
  });

  const handleUpdateRetroTitle = async () => {
    try {
      await updateRetroTitleMutation.mutateAsync({ title: currentTitle });
      if (!client?.connected) {
        queryClient.invalidateQueries({ queryKey: retroQueries.readRetro({ teamId, retroId }).queryKey });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleUpdateRetroDate = async (date: string) => {
    try {
      if (date) {
        await updateRetroDateMutation.mutateAsync({ retroDate: formatDotToISO(date) });
      }
    } catch (error) {
      handleError(error);
    }
  };

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
      subscriptionRef.current = client.subscribe('/user/topic/retrospectives', (message) => {
        const data = JSON.parse(message.body);
        console.log('📨 실시간 데이터 수신:', data);
        if (data.code === 'UPDATE') {
          queryClient.invalidateQueries({ queryKey: retroQueries.readRetro({ teamId, retroId }).queryKey });
        }
      });
    }

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, [client]);

  useEffect(() => {
    if (data) {
      setCurrentTitle(data.title ?? '');
      setSelectedDate(formatDateToDot(data.retroDate) ?? '');
    }
  }, [data]);

  if (!data) return <Error title="에러 발생" description="회고 정보를 불러오는 중 오류가 발생했습니다." />;
  return (
    <Wrapper>
      <TitleWrapper>
        <PageTitle
          title={currentTitle}
          setTitle={setCurrentTitle}
          placeholder="제목을 작성해 주세요"
          onBlur={handleUpdateRetroTitle}
        />
        <MemberWrapper>
          <AvatarGroup
            profileList={data?.joinUserInfos?.map((user) => ({
              nickname: user.name,
              image: user.profileImageUrl,
              isOnline: true,
            }))}
            size={32}
          />
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
        </MemberWrapper>
      </TitleWrapper>
      <DetailInfoWrapper>
        <CreatorWrapper>
          <Text variant="body_16_medium" color="tertiary">
            만든 사람
          </Text>
          <TextButton
            $type="24"
            leftIcon={<Avatar size={24} image={data?.createUserInfo?.profileImageUrl} />}
            $clickable={false}
          >
            {data?.createUserInfo?.name}
          </TextButton>
        </CreatorWrapper>
        <DateWrapper>
          <Text variant="body_16_medium" color="tertiary">
            회고 날짜
          </Text>
          <CalendarArea selectedDate={selectedDate} onChange={handleUpdateRetroDate} />
        </DateWrapper>
      </DetailInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const MemberWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  align-items: center;
`;

const DetailInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const CreatorWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const DateWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`;

RetroInfoWrapper.displayName = 'RetroInfoWrapper';

export default RetroInfoWrapper;
