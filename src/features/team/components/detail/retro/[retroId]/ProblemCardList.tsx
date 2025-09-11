'use client';

import { ProblemKanbanStatus, RetroProblemListItem } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle, IconPlus } from '@/shared/assets/icons/line';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { theme } from '@/shared/styles/theme';
import TaskCard from '@/shared/ui/card/TaskCard';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Divider from '@/shared/ui/line/Divider';
import Tag from '@/shared/ui/tag/Tag';
import { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { Client } from '@stomp/stompjs';
import styled from 'styled-components';
import CreateCardButton from './CreateCardButton';
import ProblemSidePanelContent from './ProblemSidePanelContent';

interface ProblemCardListProps {
  retroId: string;
  kanbanStatus: ProblemKanbanStatus;
  client: Client | null;
  problems: RetroProblemListItem[];
  onCreateCard: () => void;
}

export const KANBAN_STATUS = {
  RCG: {
    title: '개선점',
    color: theme.sementicColors.bg.danger,
  },
  PRG: {
    title: '개선중',
    color: theme.sementicColors.bg.warning_bold,
  },
  OK: {
    title: '개선완료',
    color: theme.sementicColors.bg.success_bold,
  },
};

const ProblemCardList = ({ retroId, kanbanStatus, client, problems, onCreateCard }: ProblemCardListProps) => {
  const handleSwitchCard = useSidePanelStore((state) => state.handleSwitchCard);

  const onClickTaskCard = (item: RetroProblemListItem) => {
    handleSwitchCard({
      cardId: `${retroId}-PBM-${item.id}-${kanbanStatus}-TaskCard`,
      content: <ProblemSidePanelContent retroId={retroId} problemId={item.id} client={client} />,
    });
  };

  return (
    <Wrapper>
      <Head>
        <Title>
          <TextWrapper>
            <Text variant="body_16_semibold" color="primary">
              {KANBAN_STATUS[kanbanStatus as keyof typeof KANBAN_STATUS].title}
            </Text>
            <MoreIndicator count={problems.length} type="transparent" />
          </TextWrapper>
          <PlusButton onClick={onCreateCard}>
            <IconPlus size={24} />
          </PlusButton>
        </Title>
        <Divider
          color={KANBAN_STATUS[kanbanStatus as keyof typeof KANBAN_STATUS].color}
          padding={0}
          width={4}
          radius={2}
        />
      </Head>
      <Content>
        <Droppable droppableId={`${kanbanStatus}`}>
          {(provided, snapshot) => (
            <CardList ref={provided.innerRef} {...provided.droppableProps}>
              {problems &&
                problems.length > 0 &&
                problems.map((item, index) => (
                  <Draggable draggableId={`${item.id}`} key={`${retroId}-PBM-${item.id}-${kanbanStatus}`} index={index}>
                    {(provided, draggableSnapshot) => (
                      <>
                        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                          <TaskCard
                            key={`${retroId}-PBM-${item.id}-${kanbanStatus}-TaskCard`}
                            onClick={() => onClickTaskCard(item)}
                            tags={[
                              <Tag
                                key={`${item.id}-${kanbanStatus}-TaskCard-Tag`}
                                $size="large"
                                $style="transparent"
                                $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                              >
                                PBM-{item.id}
                              </Tag>,
                            ]}
                            tagJob={item.userRole as JobType}
                            title={item.title}
                            startDate={item.updatedAt}
                            endDate={item.completedAt ?? undefined}
                            user={{
                              nickname: item.createUserInfo.name,
                              profileImage: item.createUserInfo.profileImageUrl,
                            }}
                          />
                        </div>
                        {/* {draggableSnapshot.isDragging && (
                              <Clone className="task-card-clone">
                                <TaskCard
                                  key={`${retroId}-PBM-${item.id}-${kanbanStatus}-TaskCard-clone`}
                                  tags={[
                                    <Tag
                                      key={`${item.id}-${kanbanStatus}-TaskCard-Tag`}
                                      $size="large"
                                      $style="transparent"
                                      $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                                    >
                                      PBM-{item.id}
                                    </Tag>,
                                  ]}
                                  tagJob={item.userRole as JobType}
                                  title={item.title}
                                  startDate={item.updatedAt}
                                  user={{
                                    nickname: item.createUserInfo.name,
                                    profileImage: item.createUserInfo.profileImageUrl,
                                  }}
                                />
                              </Clone>
                            )} */}
                      </>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
        <CreateCardButton onClick={onCreateCard} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: fit-content;
  border-radius: 16px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  height: fit-content;
  & .task-card-clone {
    transform: none !important;
  }
`;

const Clone = styled.div`
  transform: none !important;
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

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1px;
  gap: 16px;
`;

ProblemCardList.displayName = 'ProblemCardList';

export default ProblemCardList;
