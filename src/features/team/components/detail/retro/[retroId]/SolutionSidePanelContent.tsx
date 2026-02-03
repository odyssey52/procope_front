'use client';

import useRetroAutoSave from '@/features/team/hooks/useRetroAutoSave';
import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetroSolution, updateRetroSolution } from '@/features/team/services/retroService';
import { UpdateRetroSolutionPayload } from '@/features/team/services/retroService.type';
import { IconDirectionRight1, IconLoading, IconUser } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import useAiCoachStore from '@/shared/store/aiCoach/aiCoach';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import useUserStore from '@/shared/store/user/user';
import { theme } from '@/shared/styles/theme';
import Avatar from '@/shared/ui/avatar/Avatar';
import MoreArea from '@/shared/ui/button/MoreArea';
import TextButton from '@/shared/ui/button/TextButton';
import Checkbox from '@/shared/ui/checkbox/Checkbox';
import Error from '@/shared/ui/error/Error';
import Divider from '@/shared/ui/line/Divider';
import ItemList from '@/shared/ui/select/ItemList';
import CardDetail from '@/shared/ui/sidePanel/CardDetail';
import Text from '@/shared/ui/Text';
import Tiptap from '@/shared/ui/tiptap/Tiptap';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import styled from 'styled-components';
import SkeletonSidePanelContent from './SkeletonSidePanelContent';

interface SolutionSidePanelContentProps {
  retroId: string | number;
  problemId: string | number;
  solutionId: string | number;
  client: Client | null;
}

const SolutionSidePanelContent = ({ retroId, problemId, solutionId, client }: SolutionSidePanelContentProps) => {
  const { id } = useUserStore();
  const { handleError } = useApiError();
  const queryClient = useQueryClient();
  const close = useSidePanelStore((state) => state.close);
  const isGenerating = useAiCoachStore((state) => Boolean(state.generatingSolutionIds[String(solutionId)]));

  const { data: teamInfo, isLoading: isTeamInfoLoading } = useTeamDetailQuery();
  const {
    data,
    isLoading: isSolutionDetailLoading,
    isSuccess,
  } = useQuery({
    ...retroQueries.readRetroSolutionDetail({ retroId, problemId, solutionId }),
  });

  const role = teamInfo?.myRole;
  const isAdmin = role === 'ADMIN';
  const isEditable = data?.createUserInfo.id === id || isAdmin;
  const isLoading = isTeamInfoLoading || isSolutionDetailLoading;

  const { editor, currentTitle, setCurrentTitle, triggerSave } = useRetroAutoSave({
    initialTitle: data?.title ?? '',
    initialContent: data?.content ?? '',
    save: (title, content) =>
      updateRetroSolutionMutation
        .mutateAsync({
          title,
          content,
        })
        .then(() => undefined),
  });

  const updateRetroSolutionMutation = useMutation({
    mutationFn: (payload: UpdateRetroSolutionPayload) =>
      updateRetroSolution({ retroId, problemId, solutionId }, payload),
  });

  const deleteRetroSolutionMutation = useMutation({
    mutationFn: (solutionId: string | number) => deleteRetroSolution({ retroId, problemId, solutionId }),
  });

  const handleDeleteRetroSolution = async (solutionId: string | number) => {
    try {
      await deleteRetroSolutionMutation.mutateAsync(solutionId);
      close();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (client && client.connected && retroId) {
      const subscription = client.subscribe(
        `/user/topic/retrospectives/${problemId}/solutions/${solutionId}`,
        (message) => {
          const data = JSON.parse(message.body);
          if (data.code === 'UPDATE') {
            queryClient.refetchQueries({
              queryKey: retroQueries.readRetroSolutionDetail({ retroId, problemId, solutionId }).queryKey,
            });
          }
        },
      );
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [client, retroId, queryClient]);
  return (
    <CardDetail.PanelContainer>
      <CardDetail.TopBar>
        <CardDetail.CloseButton onClick={close}>
          <IconDirectionRight1 />
        </CardDetail.CloseButton>
        {isEditable && (
          <MoreArea
            size={24}
            menuList={
              <ItemList
                width="112px"
                selectOptionList={[{ value: '삭제', label: '삭제' }]}
                valueHandler={() => handleDeleteRetroSolution(solutionId)}
              />
            }
          />
        )}
      </CardDetail.TopBar>
      <BlurArea>
        <BlurContent $isBlurred={isGenerating}>
          {isLoading && <SkeletonSidePanelContent />}
          {!isLoading && !isSuccess && <Error title="서버 에러" description="개선 방안을 찾을 수 없습니다." />}
          {!isLoading && isSuccess && (
            <>
              <CardDetail.Header>
                <CardDetail.Title>
                  <Checkbox label={`SOL-${data.solutionId}`} id={`SOL-${data.solutionId}`} onClick={() => {}} checked />
                  <PageTitle
                    title={currentTitle}
                    setTitle={isEditable ? setCurrentTitle : undefined}
                    onBlur={() => {
                      triggerSave(true);
                    }}
                    placeholder={isEditable ? '제목을 작성해 주세요' : '새 카드'}
                  />
                </CardDetail.Title>
                <CardDetail.Info>
                  <CardDetail.InfoItem>
                    <CardDetail.InfoItemTitle>
                      <IconUser size={20} color={theme.sementicColors.icon.disabled} />
                      만든사람
                    </CardDetail.InfoItemTitle>
                    <CardDetail.InfoItemContent>
                      <TextButton
                        $type="24"
                        leftIcon={<Avatar size={24} image={data.createUserInfo.profileImageUrl} />}
                        $clickable={false}
                      >
                        {data.createUserInfo.name}
                      </TextButton>
                    </CardDetail.InfoItemContent>
                  </CardDetail.InfoItem>
                  <CardDetail.InfoItem>
                    <CardDetail.InfoItemTitle>
                      <IconLoading size={20} color={theme.sementicColors.icon.disabled} />
                      업데이트 날짜
                    </CardDetail.InfoItemTitle>
                    <CardDetail.InfoItemContent>
                      <Text variant="body_16_medium" color="tertiary">
                        {formatDateToDot(data.updatedAt)}
                      </Text>
                    </CardDetail.InfoItemContent>
                  </CardDetail.InfoItem>
                </CardDetail.Info>
                <Divider />
              </CardDetail.Header>
              <CardDetail.ContentWrapper>
                <CardDetail.Content>{editor && <Tiptap editor={editor} editable={isEditable} />}</CardDetail.Content>
              </CardDetail.ContentWrapper>
            </>
          )}
        </BlurContent>
        {isGenerating && (
          <BlurOverlay>
            <RotatingIcon>
              <IconLoading />
            </RotatingIcon>
            <Text variant="body_16_medium" color="secondary">
              AI가 답변을 생성중이에요
            </Text>
          </BlurOverlay>
        )}
      </BlurArea>
    </CardDetail.PanelContainer>
  );
};

SolutionSidePanelContent.displayName = 'SolutionSidePanelContent';

export default SolutionSidePanelContent;

const BlurArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
`;

const BlurContent = styled.div<{ $isBlurred: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  ${({ $isBlurred }) =>
    $isBlurred &&
    `
      filter: blur(2px);
      pointer-events: none;
    `}
`;

const BlurOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
`;

const RotatingIcon = styled.span`
  display: inline-flex;
  animation: icon-spin 1.1s linear infinite;

  @keyframes icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
