'use client';

import styled from 'styled-components';
import Tag from '../tag/Tag';

interface TagData {
  id: string | number;
  leftIcon?: string;
  rightIcon?: string;
  label: string;
  size?: 'large';
}

interface TaskCardProps {
  tags: TagData[];
  title: string;
  startDate: string;
  endDate: string;
  totalComments: number;
  user: {
    nickname: string;
    profileImage: string;
  };
}
const TaskCard = ({ tags, title, startDate, endDate, user, totalComments }: TaskCardProps) => {
  return (
    <Wrapper>
      <Top>
        <TagBox>
          <TagList>
            {tags.map((tag) => (
              <Tag key={tag.id} $size={tag.size} $leftIcon={tag.leftIcon} $rightIcon={tag.rightIcon}>
                {tag.label}
              </Tag>
            ))}
          </TagList>
        </TagBox>
      </Top>
      TaskCard
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.invers}; */
  border-radius: 12px;
  padding: 24px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

TaskCard.displayName = 'TaskCard';

export default TaskCard;
