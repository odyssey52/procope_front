'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroProblem, updateRetroProblem } from '@/features/team/services/retroService';
import { CreateRetroProblemPayload, UpdateRetroProblemPayload } from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import Checkbox from '@/shared/ui/checkbox/Checkbox';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

interface KeepSidePanelContentProps {
  retroId: string;
  problemId?: string; // 수정 시에 필요
}

const KeepSidePanelContent = ({ retroId, problemId }: KeepSidePanelContentProps) => {
  const { handleError } = useApiError();
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const queryClient = useQueryClient();

  const createRetroProblemMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemPayload) => createRetroProblem({ retroId }, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }).queryKey,
      });
    },
  });

  const updateRetroProblemMutation = useMutation({
    mutationFn: (payload: UpdateRetroProblemPayload) => updateRetroProblem({ retroId, problemId: problemId! }, payload),
  });

  const handleCreateRetroProblem = async () => {
    if (problemId || !currentTitle) return;
    try {
      await createRetroProblemMutation.mutateAsync({
        title: currentTitle,
        content: currentContent,
        kanbanStatus: 'KEP',
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleUpdateRetroProblem = async () => {
    if (!problemId) return;
    try {
      await updateRetroProblemMutation.mutateAsync({
        title: currentTitle,
        content: currentContent,
        kanbanStatus: 'KEP',
      });
    } catch (error) {
      handleError(error);
    }
  };

  const onChange = () => {
    try {
      if (!problemId) handleCreateRetroProblem();
      else handleUpdateRetroProblem();
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <Wrapper>
      <Head>
        <TitleWrapper>
          <Checkbox label="KEP-1" id="KEP-1" onClick={() => {}} checked />
          <PageTitle
            title={currentTitle}
            setTitle={setCurrentTitle}
            placeholder="제목을 작성해 주세요"
            onBlur={onChange}
          />
        </TitleWrapper>
      </Head>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 24px;
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

const Head = styled.div`
  display: flex;
  gap: 12px;
  padding: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

KeepSidePanelContent.displayName = 'KeepSidePanelContent';

export default KeepSidePanelContent;
