'use client';

import { createRetroSolution } from '@/features/team/services/retroService';
import { CreateRetroSolutionPayload, RetroProblemSolutionListItem } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle, IconSend } from '@/shared/assets/icons/line';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { theme } from '@/shared/styles/theme';
import Button from '@/shared/ui/button/Button';
import TaskCard from '@/shared/ui/card/TaskCard';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import Tag from '@/shared/ui/tag/Tag';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

const SolutionWrapper = ({
  retroId,
  problemId,
  solutions,
}: {
  retroId: string | number;
  problemId: string | number;
  solutions: RetroProblemSolutionListItem[];
}) => {
  const [content, setContent] = useState('');
  const handleSwitchCard = useSidePanelStore((state) => state.handleSwitchCard);

  const createRetroSolutionMutation = useMutation({
    mutationFn: (payload: CreateRetroSolutionPayload) => createRetroSolution({ retroId, problemId }, payload),
  });

  const addSolution = () => {
    console.log('addSolution');
  };

  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="개선방안">
          <SubTitleRightBox>
            <MoreIndicator count={solutions?.length} type="transparent" />
            <Button $type="secondary" onClick={addSolution}>
              추가
            </Button>
          </SubTitleRightBox>
        </PageSubTitle>
      </Head>
      <Content>
        <CardList>
          {solutions.map((solution) => (
            <TaskCard
              key={`SOL-${solution.id}`}
              // onClick={() => {
              //   handleSwitchCard({
              //     cardId: `${retroId}-PBM-${problemId}-SOL-${solution.id}`,
              //     content: <KeepSidePanelContent retroId={retroId} problemId={problemId} />,
              //   });
              // }}
              tags={[
                <Tag
                  key={`SolutionTaskCard-${solution.id}`}
                  $size="large"
                  $style="transparent"
                  $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                >
                  SOL-{solution.id}
                </Tag>,
              ]}
              title={solution.title}
              startDate={solution.updatedAt}
              user={{
                nickname: solution.createUserInfo.name,
                profileImage: solution.createUserInfo.profileImageUrl,
              }}
            />
          ))}
        </CardList>
      </Content>
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
