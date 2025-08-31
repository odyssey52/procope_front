'use client';

import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import retroQueries from '@/features/team/query/retroQueries';
import {
  deleteRetroProblem,
  updateRetroProblem,
  updateRetroProblemCompletedAt,
  updateRetroProblemStatus,
} from '@/features/team/services/retroService';
import {
  ProblemKanbanStatus,
  RetroProblemSolutionListItem,
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
import { useClickOutside } from '@/shared/hooks/useClickOutside';
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
import TagJob, { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import Tiptap from '@/shared/ui/tiptap/Tiptap';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot, formatDotToISO } from '@/shared/utils/date';
import { useMutation, useQuery } from '@tanstack/react-query';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CalendarArea from './CalendarArea';
import ProblemStatusSelect from './ProblemStatusSelect';
import SkeletonSidePanelContent from './SkeletonSidePanelContent';
import SolutionWrapper from './SolutionWrapper';

interface ProblemSidePanelContentProps {
  retroId: string | number;
  problemId: string | number;
}

const mockSolutions: RetroProblemSolutionListItem[] = [
  {
    id: 1,
    title: 'Solution 1',
    updatedAt: '2021-01-01',
    createUserInfo: {
      id: '1',
      name: 'User 1',
      profileImageUrl: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 2,
    title: 'Solution 2',
    updatedAt: '2021-01-02',
    createUserInfo: {
      id: '2',
      name: 'User 2',
      profileImageUrl: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 3,
    title: 'Solution 3',
    updatedAt: '2021-01-03',
    createUserInfo: {
      id: '3',
      name: 'User 3',
      profileImageUrl: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 4,
    title: 'Solution 4',
    updatedAt: '2021-01-04',
    createUserInfo: {
      id: '4',
      name: 'User 4',
      profileImageUrl: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 5,
    title: 'Solution 5',
    updatedAt: '2021-01-05',
    createUserInfo: {
      id: '5',
      name: 'User 5',
      profileImageUrl: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 6,
    title: 'Solution 6',
    updatedAt: '2021-01-06',
    createUserInfo: {
      id: '6',
      name: 'User 6',
      profileImageUrl: 'https://via.placeholder.com/150',
    },
  },
];

const ProblemSidePanelContent = ({ retroId, problemId }: ProblemSidePanelContentProps) => {
  const { id } = useUserStore();
  const { handleError } = useApiError();
  const close = useSidePanelStore((state) => state.close);
  const ref = useClickOutside<HTMLDivElement>(close, '.task-card-for-useClickOutside-hook');

  const { data: teamInfo, isLoading: isTeamInfoLoading } = useTeamDetailQuery();
  const {
    data,
    isLoading: isProblemDetailLoading,
    isSuccess,
  } = useQuery({
    ...retroQueries.readRetroProblemDetail({ retroId, problemId }),
  });

  const role = teamInfo?.myRole;
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

  return (
    <RefContainer ref={ref}>
      <PanelControl>
        <CloseButton onClick={close}>
          <IconDirectionRight1 />
        </CloseButton>
        {isEditable && (
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
        )}
      </PanelControl>
      {isLoading && <SkeletonSidePanelContent />}
      {!isLoading && !isSuccess && <Error title="서버 에러" description="문제를 찾을 수 없습니다." />}
      {!isLoading && isSuccess && (
        <Wrapper>
          <TitleWrapper>
            <Checkbox label={`PBM-${problemId}`} id={`PBM-${problemId}`} onClick={() => {}} checked />
            <PageTitle
              title={currentTitle}
              setTitle={isEditable ? setCurrentTitle : undefined}
              placeholder="제목을 작성해 주세요"
            />
          </TitleWrapper>
          <ProblemInfo>
            <ProblemInfoItem>
              <ProblemInfoItemTitle>
                <IconLoading size={20} color={theme.sementicColors.icon.disabled} />
                진행상태
              </ProblemInfoItemTitle>
              <ProblemStatusSelect status={currentKanbanStatus} onChange={handleChangeKanbanStatus} />
            </ProblemInfoItem>
            <ProblemInfoItem>
              <ProblemInfoItemTitle>
                <IconApps size={20} color={theme.sementicColors.icon.disabled} />
                카테고리
              </ProblemInfoItemTitle>
              <ProblemInfoItemContent>
                <TagJob type={data.userRole as JobType} bgColor={theme.sementicColors.bg.tertiary_hover_pressed} />
              </ProblemInfoItemContent>
            </ProblemInfoItem>
            <ProblemInfoItem>
              <ProblemInfoItemTitle>
                <IconUser size={20} color={theme.sementicColors.icon.disabled} />
                만든사람
              </ProblemInfoItemTitle>
              <ProblemInfoItemContent>
                <TextButton
                  $type="24"
                  leftIcon={<Avatar size={24} image={data.createUserInfo.profileImageUrl} />}
                  $clickable={false}
                >
                  {data.createUserInfo.name}
                </TextButton>
              </ProblemInfoItemContent>
            </ProblemInfoItem>
            <ProblemInfoItem>
              <ProblemInfoItemTitle>
                <IconClockCircle size={20} color={theme.sementicColors.icon.disabled} />
                업데이트 날짜
              </ProblemInfoItemTitle>
              <ProblemInfoItemContent>
                <Text variant="body_16_medium" color="tertiary">
                  {formatDateToDot(data.updatedAt)}
                </Text>
              </ProblemInfoItemContent>
            </ProblemInfoItem>
            {currentKanbanStatus === 'OK' && (
              <ProblemInfoItem>
                <ProblemInfoItemTitle>
                  <IconFlag size={20} color={theme.sementicColors.icon.disabled} />
                  개선완료 날짜
                </ProblemInfoItemTitle>
                <CalendarArea
                  selectedDate={formatDateToDot(currentCompletedAt)}
                  onChange={(date) => handleChangeCompletedAt(formatDotToISO(date))}
                />
              </ProblemInfoItem>
            )}
          </ProblemInfo>
          <Divider color={theme.sementicColors.border.primary} />
          <SolutionWrapper retroId={retroId} problemId={problemId} solutions={mockSolutions} />
          <Divider color={theme.sementicColors.border.primary} />
          {editor && <Tiptap editor={editor} editable={isEditable} />}
        </Wrapper>
      )}
    </RefContainer>
  );
};

const RefContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
  padding-top: 24px;
  overflow-y: scroll;
  flex-grow: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

const ProblemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProblemInfoItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 2px 0;
`;

const ProblemInfoItemTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 140px;
  ${({ theme }) => theme.fontStyle.body_16_medium};
  color: ${({ theme }) => theme.sementicColors.text.tertiary};
`;

const ProblemInfoItemContent = styled.div`
  color: ${({ theme }) => theme.sementicColors.text.secondary};
  padding: 8px;
`;
const PanelControl = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

ProblemSidePanelContent.displayName = 'ProblemSidePanelContent';

export default ProblemSidePanelContent;
