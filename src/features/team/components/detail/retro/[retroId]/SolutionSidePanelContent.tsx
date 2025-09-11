'use client';

import { useTeamDetailQuery } from '@/features/team/hooks/useTeamDetailQuery';
import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetroSolution, updateRetroSolution } from '@/features/team/services/retroService';
import { UpdateRetroSolutionPayload } from '@/features/team/services/retroService.type';
import { IconDirectionRight1, IconLoading, IconUser } from '@/shared/assets/icons/line';
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
import Text from '@/shared/ui/Text';
import Tiptap from '@/shared/ui/tiptap/Tiptap';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { useMutation, useQuery } from '@tanstack/react-query';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SkeletonSidePanelContent from './SkeletonSidePanelContent';

interface SolutionSidePanelContentProps {
  retroId: string | number;
  problemId: string | number;
  solutionId: string | number;
}

const SolutionSidePanelContent = ({ retroId, problemId, solutionId }: SolutionSidePanelContentProps) => {
  const { id } = useUserStore();
  const { handleError } = useApiError();
  const close = useSidePanelStore((state) => state.close);

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

  const [isInitialized, setIsInitialized] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentTitleRef = useRef(currentTitle);
  const currentContentRef = useRef(currentContent);

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

  const updateRetroSolutionMutation = useMutation({
    mutationFn: (payload: UpdateRetroSolutionPayload) =>
      updateRetroSolution({ retroId, problemId, solutionId }, payload),
  });

  const deleteRetroSolutionMutation = useMutation({
    mutationFn: (solutionId: string | number) => deleteRetroSolution({ retroId, problemId, solutionId }),
  });

  const handleUpdateRetroSolution = async (title: string, content: string) => {
    try {
      await updateRetroSolutionMutation.mutateAsync({
        title,
        content,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteRetroSolution = async (solutionId: string | number) => {
    try {
      await deleteRetroSolutionMutation.mutateAsync(solutionId);
      close();
    } catch (error) {
      handleError(error);
    }
  };

  const triggerSave = (immediate = false) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    if (immediate) {
      handleUpdateRetroSolution(currentTitle, currentContent);
    } else {
      saveTimer.current = setTimeout(() => {
        handleUpdateRetroSolution(currentTitle, currentContent);
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
    if (data) {
      setCurrentTitle(data.title);
      setCurrentContent(data.content);
      setIsInitialized(true);

      if (editor && data.content?.trim()) {
        editor.commands.setContent(data.content);
      }
    }
  }, [data, editor]);

  useEffect(() => {
    currentTitleRef.current = currentTitle;
    currentContentRef.current = currentContent;
    if (!isInitialized) return;

    if (data && (currentTitle !== data.title || currentContent !== data.content)) {
      triggerSave(false);
    }
  }, [currentTitle, currentContent]);

  useEffect(() => {
    return () => {
      if (!isInitialized) return;
      if (saveTimer.current) clearTimeout(saveTimer.current);

      if (data && (currentTitleRef.current !== data.title || currentContentRef.current !== data.content)) {
        handleUpdateRetroSolution(currentTitleRef.current, currentContentRef.current);
      }
    };
  }, [isInitialized, data]);

  return (
    <PanelContainer>
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
                valueHandler={() => handleDeleteRetroSolution(solutionId)}
              />
            }
          />
        )}
      </PanelControl>
      {isLoading && <SkeletonSidePanelContent />}
      {!isLoading && !isSuccess && <Error title="서버 에러" description="개선 방안을 찾을 수 없습니다." />}
      {!isLoading && isSuccess && (
        <Wrapper>
          <TitleWrapper>
            <Checkbox label={`SOL-${solutionId}`} id={`SOL-${solutionId}`} onClick={() => {}} checked />
            <PageTitle title={currentTitle} setTitle={setCurrentTitle} placeholder="제목을 작성해 주세요" />
          </TitleWrapper>
          <SolutionInfo>
            <SolutionInfoItem>
              <SolutionInfoItemTitle>
                <IconUser size={20} color={theme.sementicColors.icon.disabled} />
                만든사람
              </SolutionInfoItemTitle>
              <SolutionInfoItemContent>
                <TextButton
                  $type="24"
                  leftIcon={<Avatar size={24} image={data.createUserInfo.profileImageUrl} />}
                  $clickable={false}
                >
                  {data.createUserInfo.name}
                </TextButton>
              </SolutionInfoItemContent>
            </SolutionInfoItem>
            <SolutionInfoItem>
              <SolutionInfoItemTitle>
                <IconLoading size={20} color={theme.sementicColors.icon.disabled} />
                업데이트 날짜
              </SolutionInfoItemTitle>
              <SolutionInfoItemContent>
                <Text variant="body_16_medium" color="tertiary">
                  {formatDateToDot(data.updatedAt)}
                </Text>
              </SolutionInfoItemContent>
            </SolutionInfoItem>
          </SolutionInfo>
          <Divider color={theme.sementicColors.border.primary} />
          {editor && <Tiptap editor={editor} editable />}
        </Wrapper>
      )}
    </PanelContainer>
  );
};

const PanelContainer = styled.div`
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

const SolutionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SolutionInfoItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 2px 0;
`;

const SolutionInfoItemTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 140px;
  ${({ theme }) => theme.fontStyle.body_16_medium};
  color: ${({ theme }) => theme.sementicColors.text.tertiary};
`;

const SolutionInfoItemContent = styled.div`
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

SolutionSidePanelContent.displayName = 'SolutionSidePanelContent';

export default SolutionSidePanelContent;
