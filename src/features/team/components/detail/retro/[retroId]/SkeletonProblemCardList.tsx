'use client';

import { ProblemKanbanStatus } from '@/features/team/services/retroService.type';
import { IconPlus } from '@/shared/assets/icons/line';
import SkeletonTaskCard from '@/shared/ui/card/SkeletonTaskCard';
import Divider from '@/shared/ui/line/Divider';
import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import styled from 'styled-components';
import { KANBAN_STATUS } from './ProblemCardList';
import CreateCardButton from './CreateCardButton';

interface SkeletonProblemCardListProps {
  kanbanStatus: ProblemKanbanStatus;
}

const SkeletonProblemCardList = ({ kanbanStatus }: SkeletonProblemCardListProps) => {
  return (
    <Wrapper>
      <Head>
        <Title>
          <TextSkeleton width="40%" height={24} />
          <IconPlus size={24} />
        </Title>
        <Divider
          color={KANBAN_STATUS[kanbanStatus as keyof typeof KANBAN_STATUS].color}
          padding={0}
          width={4}
          radius={2}
        />
      </Head>
      <Content>
        <CardList>
          <SkeletonTaskCard />
          <SkeletonTaskCard />
          <CreateCardButton onClick={() => {}} />
        </CardList>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 100%;
  border-radius: 16px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  height: fit-content;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 0;
  gap: 4px;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  gap: 8px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

SkeletonProblemCardList.displayName = 'SkeletonProblemCardList';

export default SkeletonProblemCardList;
