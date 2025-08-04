'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetro, updateRetroTitle } from '@/features/team/services/retroService';
import { ReadRetroResponse, UpdateRetroTitlePayload } from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import Avatar from '@/shared/ui/avatar/Avatar';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import MoreArea from '@/shared/ui/button/MoreArea';
import TextButton from '@/shared/ui/button/TextButton';
import ItemList from '@/shared/ui/select/ItemList';
import Text from '@/shared/ui/Text';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { Client } from '@stomp/stompjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CalendarArea from './CalendarArea';
import MemberArea from './MemberArea';

interface RetroInfoWrapperProps {
  data: ReadRetroResponse;
  client: Client | null;
}

const RetroInfoWrapper = ({ data, client }: RetroInfoWrapperProps) => {
  const params = useParams();
  const router = useRouter();
  const teamId = params.teamId as string;
  const retroId = params.retroId as string;

  const queryClient = useQueryClient();
  const subscriptionRef = useRef<any>(null);
  const { handleError } = useApiError();

  // TODO : 소켓 연결 시 데이터 업데이트 처리 필요
  const [currentTitle, setCurrentTitle] = useState<string>(data.title ?? '');
  const [selectedDate, setSelectedDate] = useState<string>(formatDateToDot(data.createdAt));

  const updateRetroTitleMutation = useMutation({
    mutationFn: (payload: UpdateRetroTitlePayload) => updateRetroTitle({ teamId, retroId }, payload),
  });

  const deleteRetroMutation = useMutation({
    mutationFn: () => deleteRetro({ teamId, retroId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: retroQueries.readRetroList({ teamId }).queryKey });
      router.push(`/team/${teamId}/retro`);
    },
  });

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
  };

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

  useEffect(() => {
    if (client && client.connected) {
      subscriptionRef.current = client.subscribe('/user/topic/retrospectives', (message) => {
        try {
          const titleData = JSON.parse(message.body);
          console.log('📨 실시간 회고 제목 수신:', titleData);

          // 추후 편집 중일 때 업데이트 되는 것 방지
          // if (!document.activeElement?.classList.contains('editing-title')) {
          //   setCurrentTitle(titleData.title || '');
          // }

          setCurrentTitle(titleData.title || '');
        } catch (error) {
          console.error('❌ 회고 제목 파싱 에러:', error);
        }
      });

      console.log('✅ 회고 제목 구독 완료');
    }

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        console.log('🔌 회고 제목 구독 해제');
      }
    };
  }, [client]);
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
            profileList={data.joinUserInfos.map((user) => ({
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
                selectOptionList={[{ value: '삭제' }]}
                valueHandler={() => deleteRetroMutation.mutate()}
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
            leftIcon={<Avatar size={24} image={data.createUserInfo.profileImageUrl} />}
            $clickable={false}
          >
            {data.createUserInfo.name}
          </TextButton>
        </CreatorWrapper>
        <DateWrapper>
          <Text variant="body_16_medium" color="tertiary">
            회고 날짜
          </Text>
          <CalendarArea selectedDate={selectedDate} onChange={handleSelectDate} />
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
