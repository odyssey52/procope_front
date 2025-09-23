'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroSolution } from '@/features/team/services/retroService';
import { CreateRetroSolutionPayload } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { theme } from '@/shared/styles/theme';
import Button from '@/shared/ui/button/Button';
import TaskCard from '@/shared/ui/card/TaskCard';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Tag from '@/shared/ui/tag/Tag';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import SkeletonSolutionList from './SkeletonSolutionList';
import SolutionSidePanelContent from './SolutionSidePanelContent';

interface SolutionWrapperProps {
  retroId: string | number;
  problemId: string | number;
  client: Client | null;
}

const SolutionWrapper = ({ retroId, problemId, client }: SolutionWrapperProps) => {
  const open = useSidePanelStore((state) => state.open);
  const { handleError } = useApiError();
  const {
    data: solutions,
    isSuccess,
    isLoading,
  } = useQuery({
    ...retroQueries.readRetroSolutionList({ retroId, problemId }),
  });

  const createRetroSolutionMutation = useMutation({
    mutationFn: (payload: CreateRetroSolutionPayload) => createRetroSolution({ retroId, problemId }, payload),
  });

  const handleSolutionCard = async () => {
    try {
      const { id } = await createRetroSolutionMutation.mutateAsync({
        title: '',
        content: '',
      });
      openSolution(id);
    } catch (error) {
      handleError(error);
    }
  };

  const openSolution = (solutionId: string | number) => {
    open({
      cardId: `${retroId}-PBM-${problemId}-SOL-${solutionId}`,
      content: (
        <SolutionSidePanelContent retroId={retroId} problemId={problemId} solutionId={solutionId} client={client} />
      ),
    });
  };

  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="개선방안">
          <SubTitleRightBox>
            <MoreIndicator count={solutions?.length} type="transparent" />
            <Button $type="secondary" onClick={handleSolutionCard}>
              추가
            </Button>
          </SubTitleRightBox>
        </PageSubTitle>
      </Head>
      {isLoading && <SkeletonSolutionList />}
      {isSuccess && solutions.length > 0 && (
        <Content>
          <CardList>
            {solutions.map((solution) => (
              <TaskCard
                key={`SOL-${solution.id}`}
                onClick={() => openSolution(solution.id)}
                tags={[
                  <Tag
                    key={`SolutionTaskCard-${solution.id}`}
                    $size="large"
                    $style="transparent"
                    $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                  >
                    SOL-{solution.solutionId}
                  </Tag>,
                ]}
                title={solution.title}
                startedAt={solution.updatedAt}
                user={{
                  nickname: solution.createUserInfo.name,
                  profileImage: solution.createUserInfo.profileImageUrl,
                }}
              />
            ))}
          </CardList>
        </Content>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
  padding: 0 24px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  gap: 12px;
`;

const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  flex-grow: 1;
  width: 100%;
  gap: 16px;
  padding: 0 48px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 0 48px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  } */
`;

const SubTitleRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-grow: 1;
`;

SolutionWrapper.displayName = 'SolutionWrapper';

export default SolutionWrapper;
