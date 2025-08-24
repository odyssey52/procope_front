'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetroProblem, updateRetroProblem } from '@/features/team/services/retroService';
import { UpdateRetroProblemPayload } from '@/features/team/services/retroService.type';
import { IconApps, IconDirectionRight1, IconUser } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import useDebounce from '@/shared/hooks/useDebounce';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
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
import { formatDateToDot } from '@/shared/utils/date';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SkeletonSidePanelContent from './SkeletonSidePanelContent';

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
  const close = useSidePanelStore((state) => state.close);

  const ref = useClickOutside<HTMLDivElement>(close, '.task-card');
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

  const deleteRetroProblemMutation = useMutation({
    mutationFn: (problemId: string | number) => deleteRetroProblem({ retroId, problemId }),
    onSuccess: () => {
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
          });
        }
      }
    };
  }, [isInitialized, retroId, problemId]);

  return (
    <RefContainer ref={ref}>
      <PanelControl>
        <CloseButton onClick={close}>
          <IconDirectionRight1 />
        </CloseButton>
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
      </PanelControl>
      {isLoading && <SkeletonSidePanelContent />}
      {!isLoading && !isSuccess && <Error title="서버 에러" description="문제를 찾을 수 없습니다." />}
      {!isLoading && isSuccess && (
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
      )}
    </RefContainer>
  );
};

const RefContainer = styled.div`
  position: relative;
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

KeepSidePanelContent.displayName = 'KeepSidePanelContent';

export default KeepSidePanelContent;
