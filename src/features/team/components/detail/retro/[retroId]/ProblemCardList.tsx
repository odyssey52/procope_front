'use client';

import { ProblemKanbanStatus, RetroProblemListItem } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle, IconPlus } from '@/shared/assets/icons/line';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { theme } from '@/shared/styles/theme';
import TaskCard from '@/shared/ui/card/TaskCard';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Divider from '@/shared/ui/line/Divider';
import Tag from '@/shared/ui/tag/Tag';
import TagJob, { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
  attachClosestEdge,
  extractClosestEdge,
  type Edge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { Client } from '@stomp/stompjs';
import React, { useEffect, useRef, useState } from 'react';
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

interface DraggableCardProps {
  retroId: string;
  item: RetroProblemListItem;
  kanbanStatus: ProblemKanbanStatus;
  index: number;
  onClickTaskCard: (item: RetroProblemListItem) => void;
  tags: React.ReactNode[];
}

const DraggableCard = ({ retroId, item, kanbanStatus, index, onClickTaskCard, tags }: DraggableCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    return combine(
      draggable({
        element,
        getInitialData: () => ({
          type: 'problem-card',
          itemId: `${item.id}`,
          sourceStatus: kanbanStatus,
          sourceIndex: index,
        }),
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      }),
      dropTargetForElements({
        element,
        getData: ({ input }) => {
          return attachClosestEdge(
            {
              type: 'problem-card',
              itemId: `${item.id}`,
              index,
              kanbanStatus,
            },
            {
              element,
              input,
              allowedEdges: ['top', 'bottom'],
            },
          );
        },
        canDrop: ({ source }) => {
          return source.data.type === 'problem-card' && source.data.itemId !== `${item.id}`;
        },
        onDragEnter: ({ self }) => {
          const edge = extractClosestEdge(self.data);
          setClosestEdge(edge);
        },
        onDrag: ({ self }) => {
          const edge = extractClosestEdge(self.data);
          setClosestEdge(edge);
        },
        onDragLeave: () => {
          setClosestEdge(null);
        },
        onDrop: () => {
          setClosestEdge(null);
        },
      }),
    );
  }, [item.id, kanbanStatus, index]);

  const completedAt = kanbanStatus === 'OK' ? (item.completedAt ?? undefined) : undefined;

  return (
    <CardWrapper ref={cardRef} $isDragging={isDragging}>
      {closestEdge === 'top' && index === 0 && <DropIndicator $position="top" />}
      <TaskCard
        key={`${retroId}-PBM-${item.id}-${kanbanStatus}-TaskCard`}
        onClick={() => onClickTaskCard(item)}
        tags={tags}
        title={item.title}
        startedAt={item.updatedAt}
        completedAt={completedAt}
        user={{
          nickname: item.createUserInfo.name,
          profileImage: item.createUserInfo.profileImageUrl,
        }}
      />
      {closestEdge === 'bottom' && <DropIndicator $position="bottom" />}
    </CardWrapper>
  );
};

const ProblemCardList = ({ retroId, kanbanStatus, client, problems, onCreateCard }: ProblemCardListProps) => {
  const handleSwitchCard = useSidePanelStore((state) => state.handleSwitchCard);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const onClickTaskCard = (item: RetroProblemListItem) => {
    handleSwitchCard({
      cardId: `${retroId}-PBM-${item.id}-${kanbanStatus}-TaskCard`,
      content: <ProblemSidePanelContent retroId={retroId} problemId={item.id} client={client} />,
    });
  };

  const tags = (item: RetroProblemListItem) => {
    const tagJobs = item.roles.map((role) => (
      <TagJob key={role.id} type={role.role as JobType} bgColor={theme.sementicColors.bg.tertiary_hover_pressed} />
    ));

    return [
      <Tag
        key={`${item.id}-${kanbanStatus}-TaskCard-Tag`}
        $size="large"
        $style="transparent"
        $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
      >
        PBM-{item.problemId}
      </Tag>,
      ...tagJobs,
    ];
  };

  useEffect(() => {
    const element = dropZoneRef.current;
    if (!element) return;

    return dropTargetForElements({
      element,
      getData: () => ({
        type: 'drop-zone',
        status: kanbanStatus,
      }),
      canDrop: ({ source }) => {
        return source.data.type === 'problem-card';
      },
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, [kanbanStatus]);

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
        <CardList ref={dropZoneRef} $isDraggedOver={isDraggedOver}>
          {problems &&
            problems.length > 0 &&
            problems.map((item, index) => (
              <DraggableCard
                key={`${retroId}-PBM-${item.id}-${kanbanStatus}`}
                retroId={retroId}
                item={item}
                kanbanStatus={kanbanStatus}
                index={index}
                onClickTaskCard={onClickTaskCard}
                tags={tags(item)}
              />
            ))}
        </CardList>
        <CreateCardButton onClick={onCreateCard} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 16px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  min-height: fit-content;
`;

const Head = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px;
  border-radius: 16px;

  background: ${({ theme }) => theme.sementicColors.bg.tertiary};

  z-index: 1;
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
  padding: 0 24px 24px;
  overflow-y: auto;
`;

const CardList = styled.div<{ $isDraggedOver: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  padding: 16px 0;
  gap: 16px;
  border-radius: 8px;
`;

const CardWrapper = styled.div<{ $isDragging: boolean }>`
  position: relative;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  border-radius: 8px;
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  transition: opacity 0.2s;
`;

const DropIndicator = styled.div<{ $position: 'top' | 'bottom' }>`
  height: 2px;
  background: ${({ theme }) => theme.sementicColors.bg.brand};
  border-radius: 1px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;

  ${({ $position }) => {
    if ($position === 'top') {
      return 'top: -8px;'; // gap 16px의 절반인 8px 위
    }
    return 'bottom: -8px;'; // gap 16px의 절반인 8px 아래
  }}

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.sementicColors.bg.brand};
  }
`;

ProblemCardList.displayName = 'ProblemCardList';

export default ProblemCardList;
