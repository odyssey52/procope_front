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
import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import CalendarArea from './CalendarArea';
import MemberArea from './MemberArea';
import RetroInfoMemberWrapper from './RetroInfoMemberWrapper';

interface RetroInfoWrapperProps {
  client: Client | null;
  isConnected: boolean;
}

const RetroInfoWrapper = ({ client, isConnected }: RetroInfoWrapperProps) => {
  const params = useParams();
  const teamId = params.teamId as string;
  const retroId = params.retroId as string;

  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  const { data, isSuccess } = useSuspenseQuery({
    ...retroQueries.readRetro({ teamId: teamId as string, retroId: retroId as string }),
  });
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const isChangeTitle = useMemo(() => currentTitle !== data.title, [currentTitle, data.title]);

  const updateRetroTitleMutation = useMutation({
    mutationFn: (payload: UpdateRetroTitlePayload) => updateRetroTitle({ teamId, retroId }, payload),
  });

  const updateRetroDateMutation = useMutation({
    mutationFn: (payload: UpdateRetroDatePayload) => updateRetroDate({ teamId, retroId }, payload),
  });

  const handleUpdateRetroTitle = async () => {
    if (!isChangeTitle) return;
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

  useEffect(() => {
    if (data) {
      setCurrentTitle(data.title ?? '');
      setSelectedDate(formatDateToDot(data.retroDate) ?? '');
    }
  }, [data]);

  useEffect(() => {
    if (client && client.connected) {
      const subscription = client.subscribe('/user/topic/retrospectives', (message) => {
        const data = JSON.parse(message.body);
        console.log(data);
        // AI_COACH_CREATING
        //   {
        //     "type": "AI_COACH_CREATING",
        //     "problemId": 177,
        //     "retrospectiveId": 83,
        //     "solution": {
        //         "id": 72,
        //         "solutionId": 21,
        //         "title": "",
        //         "content": "",
        //         "createdAt": "2026-02-03T13:22:00.792480266",
        //         "updatedAt": "2026-02-03T13:22:00.792480266",
        //         "createUserInfo": {
        //             "id": "bc12a1f2-086b-4249-b191-f09faec9ffb9",
        //             "name": "프로코프",
        //             "profileImageUrl": "https://lh3.googleusercontent.com/a/ACg8ocLP1qXvuUIcum0EEFqL7c_G2DMQR_oYmS8Ay4p2ZaJX9bKMsQ=s100"
        //         }
        //     }
        // }
        // AI_COACH_RESULT
        // {
        //     "type": "AI_COACH_RESULT",
        //     "problemId": 177,
        //     "retrospectiveId": 83,
        //     "solution": {
        //         "id": 72,
        //         "solutionId": 21,
        //         "title": "MVP 완성 후 기술 부채 관리로 팀 성장 이뤄내기",
        //         "content": "**공감과 인정 (Empathy)**\n프로코프님, 기획, 디자인, 개발 부채가 쌓여 어려움을 겪고 계신 것 같아요. MVP를 만드느라 정말 수고 많이 하셨겠어요. 이런 상황에서 팀원 모두가 지친 것은 당연해 보입니다.\n\n**원인 분석 (Diagnosis)**\nMVP 개발에 집중하느라 기술 부채 관리가 소홀했던 것 같아요. 회고관리 시스템의 UI와 백엔드 코드 품질이 일관되지 않은 것을 보면, 지속적인 리팩토링과 코드 리뷰가 이루어지지 않았던 것 같습니다. 또한 문구 통일 등 서비스 전반의 디자인 일관성도 부족했던 것 같네요. 이런 부분들이 팀 생산성과 사용자 경험에 부정적인 영향을 미쳤을 거예요.\n\n**구체적 솔루션 (Action Items)**\n\n**단기 처방**\n- KPT 회고 시 '기술 부채' 항목을 추가해 지속적으로 관리하세요.\n- 회고관리 시스템의 UI와 백엔드 코드를 점검하고, 팀 전체가 참여하는 코드 리뷰를 실시하세요.\n- 서비스 내 문구와 디자인 일관성을 점검하고, 개선 계획을 수립하세요.\n\n**장기 처방**\n- 매 스프린트마다 기술 부채 해소를 위한 전담 작업을 계획하세요.\n- 코드 리뷰와 리팩토링 문화를 정착시키고, 개발자 역량 강화를 위한 교육을 실시하세요.\n- 디자인 시스템을 구축하여 일관성 있는 UI/UX를 제공하세요.\n\n**격려 (Closing)**\n프로코프님, 팀원 모두가 노력한 덕분에 MVP를 만들어내셨네요. 이제는 기술 부채 관리에 집중하여 지속 가능한 성장을 이뤄내실 수 있을 거예요. 팀원 모두가 함께 힘을 합치면 반드시 좋은 결과를 얻으실 수 있을 거라 믿어요. 화이팅!",
        //         "createdAt": "2026-02-03T13:22:00.79248",
        //         "updatedAt": "2026-02-03T13:22:03.997266",
        //         "createUserInfo": {
        //             "id": "bc12a1f2-086b-4249-b191-f09faec9ffb9",
        //             "name": "프로코프",
        //             "profileImageUrl": "https://lh3.googleusercontent.com/a/ACg8ocLP1qXvuUIcum0EEFqL7c_G2DMQR_oYmS8Ay4p2ZaJX9bKMsQ=s100"
        //         }
        //     }
        // }
        if (data.type === 'AI_COACH_CREATING') {
          queryClient.invalidateQueries({
            queryKey: retroQueries.readRetroSolutionList({
              retroId,
              problemId: data.problemId,
            }).queryKey,
          });
          queryClient.invalidateQueries({
            queryKey: retroQueries.readRetroSolutionDetail({
              retroId,
              problemId: data.problemId,
              solutionId: data.solution.id,
            }).queryKey,
          });
        }
        if (data.type === 'AI_COACH_RESULT') {
          queryClient.invalidateQueries({
            queryKey: retroQueries.readRetroSolutionList({
              retroId,
              problemId: data.problemId,
            }).queryKey,
          });
          queryClient.invalidateQueries({
            queryKey: retroQueries.readRetroSolutionDetail({
              retroId,
              problemId: data.problemId,
              solutionId: data.solution.id,
            }).queryKey,
          });
        }
        if (data.code === 'UPDATE') {
          queryClient.invalidateQueries({ queryKey: retroQueries.readRetro({ teamId, retroId }).queryKey });
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [client]);

  if (!isSuccess) return <Error title="에러 발생" description="회고 정보를 불러오는 중 오류가 발생했습니다." />;
  return (
    <Wrapper>
      <TitleWrapper>
        <PageTitle
          title={currentTitle}
          setTitle={setCurrentTitle}
          placeholder="제목을 작성해 주세요"
          onBlur={handleUpdateRetroTitle}
        />
        <RetroInfoMemberWrapper teamId={teamId} retroId={retroId} client={client} isConnected={isConnected} />
      </TitleWrapper>
      <DetailInfoWrapper>
        <CreatorWrapper>
          <Text variant="body_14_regular" color="tertiary">
            만든사람
          </Text>
          <TextButton
            $type="16"
            leftIcon={<Avatar size={16} image={data.createUserInfo?.profileImageUrl} />}
            $clickable={false}
          >
            {data.createUserInfo?.name}
          </TextButton>
        </CreatorWrapper>
        <DateWrapper>
          <Text variant="body_14_regular" color="tertiary">
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
