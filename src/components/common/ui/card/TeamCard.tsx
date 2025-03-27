import { ReadTeamListResponse } from '@/services/team/teamService.type';
import styled from 'styled-components';
import AvatarGroup from '../avatar/AvatarGroup';
import Tag from '../tag/Tag';
import Text from '../Text';

export interface TagList {
  SQUAD: {
    label: string;
    status: 'info';
  };
  FEATURE: {
    label: string;
    status: 'success';
  };
}
const TAG_LIST: TagList = {
  // 스쿼드
  SQUAD: {
    label: '스쿼드',
    status: 'info',
  },
  // 기능
  FEATURE: {
    label: '기능',
    status: 'success',
  },
};

interface TeamCardProps {
  tag: 'SQUAD' | 'FEATURE';
  name: string;
  description: string;
  members: ReadTeamListResponse['team'][number]['members'];
  selected?: boolean;
}

const TeamCard = ({ tag, name, description, members, selected }: TeamCardProps) => {
  const mappedMembers = members.map((member) => ({
    nickname: member.userId,
    image: member.picture,
  }));

  return (
    <Wrapper $selected={selected}>
      <TeamInfo>
        <Tag $style="transparent" $status={TAG_LIST[tag].status}>
          {TAG_LIST[tag].label}
        </Tag>
        <TextBox>
          <TeamName variant="heading_18" color="primary">
            {name}
          </TeamName>
          <Description variant="body_14_regular" color="secondary">
            {description}
          </Description>
        </TextBox>
      </TeamInfo>
      <AvatarGroup profileList={mappedMembers} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 20px;
  align-items: end;
  width: 292px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.invers};
  ${({ $selected, theme }) =>
    $selected &&
    `
      border-color: ${theme.sementicColors.border.brand};
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16), 0px 0px 1px 0px rgba(0, 0, 0, 0.12);
      &:hover {
      border: 1px solid ${theme.sementicColors.border.primary_hover_pressed};
      }
    `}

  &:hover {
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.sementicColors.border.primary_hover_pressed};
    background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
    box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
  }
`;
const TeamInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TeamName = styled(Text)`
  display: -webkit-box;

  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
`;
const Description = styled(Text)`
  display: -webkit-box;
  overflow: hidden;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
`;

TeamCard.displayName = 'TeamCard';

export default TeamCard;
