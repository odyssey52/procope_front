'use client';

import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import retroQueries from '@/features/team/query/retroQueries';
import {
  createRetroProblemRole,
  deleteRetroProblem,
  deleteRetroProblemRole,
  updateRetroProblem,
  updateRetroProblemCompletedAt,
  updateRetroProblemStatus,
} from '@/features/team/services/retroService';
import {
  CreateRetroProblemRolePayload,
  DeleteRetroProblemRolePayload,
  ProblemKanbanStatus,
  UpdateRetroProblemCompletedAtPayload,
  UpdateRetroProblemPayload,
  UpdateRetroProblemStatusPayload,
} from '@/features/team/services/retroService.type';
import {
  IconApps,
  IconClockCircle,
  IconDirectionRight1,
  IconFlag,
  IconLoading,
  IconUser,
} from '@/shared/assets/icons/line';
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
import { formatDateToDot, formatDotToISO } from '@/shared/utils/date';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CalendarArea from './CalendarArea';
import ProblemCategorySelect from './ProblemCategorySelect';
import ProblemStatusSelect from './ProblemStatusSelect';
import SkeletonSidePanelContent from './SkeletonSidePanelContent';
import SolutionWrapper from './SolutionWrapper';

interface ProblemSidePanelContentProps {
  client: Client | null;
  retroId: string | number;
  problemId: string | number;
}

const ProblemSidePanelContent = ({ retroId, problemId, client }: ProblemSidePanelContentProps) => {
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

  const role = teamInfo?.myRole;
  const categories = data?.roles || [];

  const isAdmin = role === 'ADMIN';
  const isEditable = data?.createUserInfo.id === id || isAdmin;
  const isLoading = isTeamInfoLoading || isProblemDetailLoading;

  const [isInitialized, setIsInitialized] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [currentKanbanStatus, setCurrentKanbanStatus] = useState<ProblemKanbanStatus>('RCG');
  const [currentCompletedAt, setCurrentCompletedAt] = useState('');

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentTitleRef = useRef(currentTitle);
  const currentContentRef = useRef(currentContent);
  const currentKanbanStatusRef = useRef(currentKanbanStatus);
  const currentCompletedAtRef = useRef(currentCompletedAt);

  const editor = useEditor({
    extensions: [
      BulletList,
      StarterKit,
      ListItem,
      Placeholder.configure({
        placeholder: '본문을 작성해 주세요',
      }),
    ],
    content: currentContent,
  });

  const updateRetroProblemMutation = useMutation({
    mutationFn: (payload: UpdateRetroProblemPayload) => updateRetroProblem({ retroId, problemId: problemId! }, payload),
  });

  const updateRetroProblemStatusMutation = useMutation({
    mutationFn: (payload: UpdateRetroProblemStatusPayload) =>
      updateRetroProblemStatus({ retroId, problemId: problemId! }, payload),
  });

  const updateRetroProblemCompletedAtMutation = useMutation({
    mutationFn: (payload: UpdateRetroProblemCompletedAtPayload) =>
      updateRetroProblemCompletedAt({ retroId, problemId: problemId! }, payload),
  });

  const deleteRetroProblemMutation = useMutation({
    mutationFn: (problemId: string | number) => deleteRetroProblem({ retroId, problemId }),
  });

  const createRetroProblemRoleMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemRolePayload) =>
      createRetroProblemRole({ retroId, problemId: problemId! }, payload),
  });

  const deleteRetroProblemRoleMutation = useMutation({
    mutationFn: (payload: DeleteRetroProblemRolePayload) =>
      deleteRetroProblemRole({ retroId, problemId: problemId! }, payload),
  });

  const handleUpdateRetroProblem = async (title: string, content: string) => {
    try {
      await updateRetroProblemMutation.mutateAsync({
        title,
        content,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleUpdateRetroProblemStatus = async (kanbanStatus: ProblemKanbanStatus) => {
    try {
      await updateRetroProblemStatusMutation.mutateAsync({
        kanbanStatus,
        changeIndex: null,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteRetroProblem = async (problemId: string | number) => {
    try {
      await deleteRetroProblemMutation.mutateAsync(problemId);
      close();
    } catch (error) {
      handleError(error);
    }
  };

  const handleChangeKanbanStatus = (status: ProblemKanbanStatus) => {
    setCurrentKanbanStatus(status);
  };

  const handleChangeCompletedAt = (completedAt: string) => {
    setCurrentCompletedAt(completedAt);
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

  const handleUpdateRetroProblemCompletedAt = async (completedAt: string) => {
    try {
      await updateRetroProblemCompletedAtMutation.mutateAsync({ completedTime: completedAt });
    } catch (error) {
      handleError(error);
    }
  };

  const triggerSave = (immediate = false) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    if (immediate) {
      handleUpdateRetroProblem(currentTitle, currentContent);
    } else {
      saveTimer.current = setTimeout(() => {
        handleUpdateRetroProblem(currentTitle, currentContent);
      }, 3000);
    }
  };

  useEffect(() => {
    if (!editor) return;
    editor.on('update', ({ editor }) => {
      setCurrentContent(editor.getHTML());
    });
  }, [editor]);

  useEffect(() => {
    if (!data) return;
    setCurrentTitle(data.title);
    setCurrentContent(data.content);
    setCurrentKanbanStatus(data.kanbanStatus);
    setCurrentCompletedAt(data.completedAt);
    setIsInitialized(true);

    if (editor && data.content?.trim()) {
      editor.commands.setContent(data.content);
    }
  }, [data, editor]);

  useEffect(() => {
    currentTitleRef.current = currentTitle;
    currentContentRef.current = currentContent;
    if (!isInitialized) return;
    if (!data) return;
    if (currentTitle !== data.title || currentContent !== data.content) {
      triggerSave(false);
    }
  }, [currentTitle, currentContent]);

  useEffect(() => {
    currentKanbanStatusRef.current = currentKanbanStatus;
    if (!isInitialized) return;
    if (!data) return;
    if (currentKanbanStatus !== data.kanbanStatus) {
      handleUpdateRetroProblemStatus(currentKanbanStatus);
    }
  }, [currentKanbanStatus]);

  useEffect(() => {
    currentCompletedAtRef.current = currentCompletedAt;
    if (!isInitialized) return;
    if (!data) return;
    if (currentCompletedAt !== data.completedAt) {
      handleUpdateRetroProblemCompletedAt(currentCompletedAt);
    }
  }, [currentCompletedAt]);

  useEffect(() => {
    return () => {
      if (!isInitialized) return;
      if (saveTimer.current) clearTimeout(saveTimer.current);

      if (currentTitleRef.current !== data?.title || currentContentRef.current !== data?.content) {
        handleUpdateRetroProblem(currentTitleRef.current, currentContentRef.current);
      }
    };
  }, [isInitialized, data]);

  useEffect(() => {
    if (client && client.connected && retroId) {
      const subscription = client.subscribe(`/user/topic/retrospectives/problems/${problemId}`, (message) => {
        const data = JSON.parse(message.body);
        if (data.code === 'UPDATE') {
          // 즉시 리페칭해서 로컬 상태 업데이트
          queryClient.refetchQueries({
            queryKey: retroQueries.readRetroProblemDetail({ retroId, problemId }).queryKey,
          });
        }
      });
      // solutions 도 구독
      const solutionSubscription = client.subscribe(`/user/topic/retrospectives/${problemId}/solutions`, (message) => {
        const data = JSON.parse(message.body);
        if (data.code === 'UPDATE') {
          queryClient.refetchQueries({
            queryKey: retroQueries.readRetroSolutionList({ retroId, problemId }).queryKey,
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
      // 구독 정리
      return () => {
        subscription.unsubscribe();
        solutionSubscription.unsubscribe();
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
                <Checkbox label={`PBM-${data.problemId}`} id={`PBM-${data.problemId}`} onClick={() => {}} checked />
                <PageTitle
                  title={currentTitle}
                  setTitle={isEditable ? setCurrentTitle : undefined}
                  placeholder={isEditable ? '제목을 작성해 주세요' : '새 카드'}
                />
              </CardDetail.Title>
              <CardDetail.Info>
                <CardDetail.InfoItem>
                  <CardDetail.InfoItemTitle>
                    <IconLoading size={20} color={theme.sementicColors.icon.disabled} />
                    진행상태
                  </CardDetail.InfoItemTitle>
                  <ProblemStatusSelect status={currentKanbanStatus} onChange={handleChangeKanbanStatus} />
                </CardDetail.InfoItem>
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
                  <CardDetail.InfoItemTitle>
                    <IconClockCircle size={20} color={theme.sementicColors.icon.disabled} />
                    업데이트 날짜
                  </CardDetail.InfoItemTitle>
                  <CardDetail.InfoItemContent>
                    <Text variant="body_16_medium" color="tertiary">
                      {formatDateToDot(data.updatedAt)}
                    </Text>
                  </CardDetail.InfoItemContent>
                </CardDetail.InfoItem>
                {currentKanbanStatus === 'OK' && (
                  <CardDetail.InfoItem>
                    <CardDetail.InfoItemTitle>
                      <IconFlag size={20} color={theme.sementicColors.icon.disabled} />
                      개선완료 날짜
                    </CardDetail.InfoItemTitle>
                    <CalendarArea
                      selectedDate={formatDateToDot(currentCompletedAt)}
                      onChange={(date) => handleChangeCompletedAt(formatDotToISO(date))}
                    />
                  </CardDetail.InfoItem>
                )}
              </CardDetail.Info>
              <Divider />
            </CardDetail.Header>
          }
        >
          <SolutionWrapper retroId={retroId} problemId={problemId} client={client} />
          <Divider />
          {editor && <Tiptap editor={editor} editable={isEditable} />}
        </SidePanelScaffold>
      )}
    </CardDetail.PanelContainer>
  );
};

// Content 영역은 SidePanelScaffold가 제공하므로 별도 스타일 불필요

ProblemSidePanelContent.displayName = 'ProblemSidePanelContent';

export default ProblemSidePanelContent;
