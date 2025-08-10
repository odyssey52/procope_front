'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { updateRetroProblem } from '@/features/team/services/retroService';
import { ProblemKanbanStatus, UpdateRetroProblemPayload } from '@/features/team/services/retroService.type';
import { IconApps, IconLoading, IconUser } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import useDebounce from '@/shared/hooks/useDebounce';
import { theme } from '@/shared/styles/theme';
import Avatar from '@/shared/ui/avatar/Avatar';
import TextButton from '@/shared/ui/button/TextButton';
import Checkbox from '@/shared/ui/checkbox/Checkbox';
import Error from '@/shared/ui/error/Error';
import Divider from '@/shared/ui/line/Divider';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import TagJob, { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import Tiptap from '@/shared/ui/tiptap/Tiptap';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProblemStatusSelect from './ProblemStatusSelect';

interface ProblemSidePanelContentProps {
  retroId: string | number;
  problemId: string | number;
}
const ProblemSidePanelContent = ({ retroId, problemId }: ProblemSidePanelContentProps) => {
  const { handleError } = useApiError();
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [currentKanbanStatus, setCurrentKanbanStatus] = useState<ProblemKanbanStatus>('RCG');
  const [isInitialized, setIsInitialized] = useState(false);

  const queryClient = useQueryClient();
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { data, isLoading, isSuccess } = useQuery({
    ...retroQueries.readRetroProblemDetail({ retroId, problemId }),
  });

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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemDetail({ retroId, problemId }).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'RCG' }).queryKey,
      });
    },
  });

  const handleUpdateRetroProblem = async (title: string, content: string, kanbanStatus: ProblemKanbanStatus) => {
    try {
      await updateRetroProblemMutation.mutateAsync({
        title,
        content,
        kanbanStatus,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const triggerSave = (immediate = false) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);

    if (immediate) {
      handleUpdateRetroProblem(currentTitle, currentContent, currentKanbanStatus);
    } else {
      saveTimer.current = setTimeout(() => {
        handleUpdateRetroProblem(currentTitle, currentContent, currentKanbanStatus);
      }, 3000);
    }
  };

  const handleChangeKanbanStatus = (status: ProblemKanbanStatus) => {
    setCurrentKanbanStatus(status);
  };

  // 에디터 내용 변경
  useEffect(() => {
    if (!editor) return;
    editor.on('update', ({ editor }) => {
      setCurrentContent(editor.getHTML());
    });
  }, [editor]);

  // 데이터 초기 로드
  useEffect(() => {
    if (!data) return;
    setCurrentTitle(data.title);
    setCurrentContent(data.content);
    setCurrentKanbanStatus(data.kanbanStatus);
    setIsInitialized(true);

    if (editor && data.content?.trim()) {
      editor.commands.setContent(data.content);
    }
  }, [data, editor]);

  // title / content 변경 → 디바운스 저장
  useEffect(() => {
    if (!isInitialized) return;
    if (!data) return;
    if (currentTitle !== data.title || currentContent !== data.content) {
      triggerSave(false);
    }
  }, [currentTitle, currentContent]);

  // kanbanStatus 변경 → 즉시 저장
  useEffect(() => {
    if (!isInitialized) return;
    if (!data) return;
    if (currentKanbanStatus !== data.kanbanStatus) {
      triggerSave(true);
    }
  }, [currentKanbanStatus]);

  // 언마운트 시 마지막 저장
  useEffect(() => {
    return () => {
      if (!isInitialized) return;
      if (saveTimer.current) clearTimeout(saveTimer.current);
      if (
        currentTitle !== data?.title ||
        currentContent !== data?.content ||
        currentKanbanStatus !== data?.kanbanStatus
      ) {
        handleUpdateRetroProblem(currentTitle, currentContent, currentKanbanStatus);
      }
    };
  }, [isInitialized, data]);

  if (isLoading) return <LoadingSpinner />;
  if (!isSuccess) return <Error title="서버 에러" description="문제를 찾을 수 없습니다." />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Checkbox label={`PBM-${problemId}`} id={`PBM-${problemId}`} onClick={() => {}} checked />
        <PageTitle title={currentTitle} setTitle={setCurrentTitle} placeholder="제목을 작성해 주세요" />
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
          <ProblemInfoItemTitle>업데이트 날짜</ProblemInfoItemTitle>
          <ProblemInfoItemContent>
            <Text variant="body_16_medium" color="tertiary">
              {formatDateToDot(data.updatedAt)}
            </Text>
          </ProblemInfoItemContent>
        </ProblemInfoItem>
      </ProblemInfo>
      <Divider />
      {editor && <Tiptap editor={editor} />}
    </Wrapper>
  );
};

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

const ProblemStatusSelectWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

ProblemSidePanelContent.displayName = 'ProblemSidePanelContent';

export default ProblemSidePanelContent;
