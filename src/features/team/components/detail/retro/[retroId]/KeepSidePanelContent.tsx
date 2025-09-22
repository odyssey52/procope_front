'use client';

import useRetroAutoSave from '@/features/team/hooks/useRetroAutoSave';
import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import retroQueries from '@/features/team/query/retroQueries';
import {
  createRetroProblemRole,
  deleteRetroProblem,
  deleteRetroProblemRole,
  updateRetroProblem,
} from '@/features/team/services/retroService';
import {
  CreateRetroProblemRolePayload,
  DeleteRetroProblemRolePayload,
  UpdateRetroProblemPayload,
} from '@/features/team/services/retroService.type';
import { IconApps, IconDirectionRight1, IconUser } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
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
import SidePanelScaffold from '@/shared/ui/sidePanel/SidePanelScaffold';
import Text from '@/shared/ui/Text';
import Tiptap from '@/shared/ui/tiptap/Tiptap';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import ProblemCategorySelect from './ProblemCategorySelect';
import SkeletonSidePanelContent from './SkeletonSidePanelContent';

interface KeepSidePanelContentProps {
  retroId: string | number;
  problemId: string | number;
  client: Client | null;
}

const KeepSidePanelContent = ({ retroId, problemId, client }: KeepSidePanelContentProps) => {
  const { id } = useUserStore();
  const { handleError } = useApiError();

  const close = useSidePanelStore((state) => state.close);

  const queryClient = useQueryClient();

  const { data: teamInfo, isLoading: isTeamInfoLoading } = useTeamDetailQuery();
  const {
    data,
    isLoading: isProblemDetailLoading,
    isSuccess,
  } = useQuery({
    ...retroQueries.readRetroProblemDetail({ retroId, problemId }),
  });

  const isLoading = isTeamInfoLoading || isProblemDetailLoading;
  const role = teamInfo?.myRole;
  const isAdmin = role === 'ADMIN';
  const isEditable = data?.createUserInfo.id === id || isAdmin;
  const categories = data?.roles || [];

  // Auto-save 훅: 제목/본문 및 에디터 상태 관리 + 디바운스 저장
  const { editor, currentTitle, setCurrentTitle, triggerSave } = useRetroAutoSave({
    initialTitle: data?.title ?? '',
    initialContent: data?.content ?? '',
    save: (title, content) =>
      updateRetroProblemMutation
        .mutateAsync({
          title,
          content,
        })
        .then(() => undefined),
  });

  const updateRetroProblemMutation = useMutation({
    mutationFn: (payload: UpdateRetroProblemPayload) => updateRetroProblem({ retroId, problemId: problemId! }, payload),
  });

  const createRetroProblemRoleMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemRolePayload) =>
      createRetroProblemRole({ retroId, problemId: problemId! }, payload),
  });

  const deleteRetroProblemRoleMutation = useMutation({
    mutationFn: (payload: DeleteRetroProblemRolePayload) =>
      deleteRetroProblemRole({ retroId, problemId: problemId! }, payload),
  });

  const deleteRetroProblemMutation = useMutation({
    mutationFn: (problemId: string | number) => deleteRetroProblem({ retroId, problemId }),
  });

  const handleDeleteRetroProblem = async (problemId: string | number) => {
    try {
      await deleteRetroProblemMutation.mutateAsync(problemId);
      close();
    } catch (error) {
      handleError(error);
    }
  };

  const handleToggleRetroProblemRole = async (roleId: number) => {
    try {
      // 현재 서버 상태의 roles에 해당 role이 포함되어 있는지 확인
      const isRoleExists = categories.some((role) => role.id === roleId);

      if (isRoleExists) {
        // 포함되어 있으면 delete 요청
        await deleteRetroProblemRoleMutation.mutateAsync({ id: roleId });
      } else {
        // 포함되어 있지 않으면 create 요청
        await createRetroProblemRoleMutation.mutateAsync({ id: roleId });
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (client && client.connected && retroId) {
      const subscription = client.subscribe(`/user/topic/retrospectives/problems/${problemId}`, (message) => {
        const data = JSON.parse(message.body);

        if (data.code === 'UPDATE') {
          queryClient.refetchQueries({
            queryKey: retroQueries.readRetroProblemDetail({ retroId, problemId }).queryKey,
          });
        }
      });

      const roleSubscription = client.subscribe(`/user/topic/retrospectives/categories/${problemId}`, (message) => {
        const data = JSON.parse(message.body);
        if (data.code === 'UPDATE') {
          queryClient.refetchQueries({
            queryKey: retroQueries.readRetroProblemDetail({ retroId, problemId }).queryKey,
          });
        }
      });

      return () => {
        subscription.unsubscribe();
        roleSubscription.unsubscribe();
      };
    }
  }, [client, retroId, queryClient]);

  return (
    <CardDetail.PanelContainer>
      {isLoading && <SkeletonSidePanelContent />}
      {!isLoading && !isSuccess && <Error title="서버 에러" description="문제를 찾을 수 없습니다." />}
      {!isLoading && isSuccess && (
        <SidePanelScaffold
          title={
            <CardDetail.CloseButton onClick={close}>
              <IconDirectionRight1 />
            </CardDetail.CloseButton>
          }
          actions={
            isEditable ? (
              <MoreArea
                size={24}
                menuList={
                  <ItemList
                    width="112px"
                    selectOptionList={[{ value: '삭제', label: '삭제' }]}
                    valueHandler={() => handleDeleteRetroProblem(problemId)}
                  />
                }
              />
            ) : undefined
          }
          header={
            <CardDetail.Header>
              <CardDetail.Title>
                <Checkbox label={`KEP-${data.problemId}`} id={`KEP-${data.problemId}`} onClick={() => {}} checked />
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
                    <IconApps size={20} color={theme.sementicColors.icon.disabled} />
                    카테고리
                  </CardDetail.InfoItemTitle>
                  <ProblemCategorySelect roles={categories} onToggle={handleToggleRetroProblemRole} />
                </CardDetail.InfoItem>
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
                  <CardDetail.InfoItemTitle>업데이트 날짜</CardDetail.InfoItemTitle>
                  <CardDetail.InfoItemContent>
                    <Text variant="body_16_medium" color="tertiary">
                      {formatDateToDot(data.updatedAt)}
                    </Text>
                  </CardDetail.InfoItemContent>
                </CardDetail.InfoItem>
              </CardDetail.Info>
              <Divider />
            </CardDetail.Header>
          }
        >
          {editor && <Tiptap editor={editor} editable={isEditable} />}
        </SidePanelScaffold>
      )}
    </CardDetail.PanelContainer>
  );
};

KeepSidePanelContent.displayName = 'KeepSidePanelContent';

export default KeepSidePanelContent;
