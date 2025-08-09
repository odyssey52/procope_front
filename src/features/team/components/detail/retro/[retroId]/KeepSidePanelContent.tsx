'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { updateRetroProblem } from '@/features/team/services/retroService';
import { UpdateRetroProblemPayload } from '@/features/team/services/retroService.type';
import { IconApps, IconUser } from '@/shared/assets/icons/line';
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

interface KeepSidePanelContentProps {
  retroId: string | number;
  problemId: string | number;
}

const KeepSidePanelContent = ({ retroId, problemId }: KeepSidePanelContentProps) => {
  const { handleError } = useApiError();
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const queryClient = useQueryClient();

  const currentTitleRef = useRef('');
  const currentContentRef = useRef('');

  const debouncedTitle = useDebounce(currentTitle, 3000);
  const debouncedContent = useDebounce(currentContent, 3000);

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

  const { data, isLoading, isSuccess } = useQuery({
    ...retroQueries.readRetroProblemDetail({ retroId, problemId }),
  });

  const updateRetroProblemMutation = useMutation({
    mutationFn: (payload: UpdateRetroProblemPayload) => updateRetroProblem({ retroId, problemId: problemId! }, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemDetail({ retroId, problemId }).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }).queryKey,
      });
    },
  });

  const handleUpdateRetroProblem = async (title?: string, content?: string) => {
    try {
      await updateRetroProblemMutation.mutateAsync({
        title: title ?? currentTitle,
        content: content ?? currentContent,
        kanbanStatus: 'KEP',
      });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (editor) {
      editor.on('update', ({ editor }) => {
        const newContent = editor.getHTML();
        setCurrentContent(newContent);
        currentContentRef.current = newContent;
      });
    }
  }, [editor]);

  useEffect(() => {
    currentTitleRef.current = currentTitle;
  }, [currentTitle]);

  useEffect(() => {
    currentContentRef.current = currentContent;
  }, [currentContent]);

  useEffect(() => {
    if (data) {
      setCurrentTitle(data.title);
      setCurrentContent(data.content);
      currentTitleRef.current = data.title;
      currentContentRef.current = data.content;
      setIsInitialized(true);

      if (editor) {
        if (data.content && data.content.trim() !== '') {
          editor.commands.setContent(data.content);
        }
      }
    }
  }, [data, editor]);

  useEffect(() => {
    if (
      isInitialized &&
      data &&
      ((debouncedTitle !== data.title && debouncedTitle !== '') ||
        (debouncedContent !== data.content && debouncedContent !== ''))
    ) {
      handleUpdateRetroProblem(debouncedTitle, debouncedContent);
    }
  }, [debouncedTitle, debouncedContent, isInitialized, data]);

  useEffect(() => {
    return () => {
      if (isInitialized) {
        const finalTitle = currentTitleRef.current;
        const finalContent = currentContentRef.current;

        if (data && (finalTitle !== data.title || finalContent !== data.content) && (finalTitle || finalContent)) {
          updateRetroProblemMutation.mutate({
            title: finalTitle,
            content: finalContent,
            kanbanStatus: 'KEP',
          });
        }
      }
    };
  }, [isInitialized, retroId, problemId]);

  if (isLoading) return <LoadingSpinner />;
  if (!isSuccess) return <Error title="서버 에러" description="문제를 찾을 수 없습니다." />;
  return (
    <Wrapper>
      <TitleWrapper>
        <Checkbox label={`KEP-${problemId}`} id={`KEP-${problemId}`} onClick={() => {}} checked />
        <PageTitle title={currentTitle} setTitle={setCurrentTitle} placeholder="제목을 작성해 주세요" />
      </TitleWrapper>
      <ProblemInfo>
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
KeepSidePanelContent.displayName = 'KeepSidePanelContent';

export default KeepSidePanelContent;
