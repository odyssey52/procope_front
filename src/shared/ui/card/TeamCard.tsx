import { ReadTeamListResponse } from '@/features/team/services/teamService.type';
import { TeamType } from '@/shared/types/team';
import { useRouter } from 'next/navigation';
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
  tag: TeamType;
  name: string;
  description: string;
  members: ReadTeamListResponse['team'][number]['members'];
  teamId: string;
  selected?: boolean;
}

const TeamCard = ({ tag, name, description, members, teamId, selected }: TeamCardProps) => {
  const router = useRouter();

  const mappedMembers = members.map((member) => ({
    nickname: member.userId,
    image: member.picture,
  }));

  return (
    <Wrapper $selected={selected} onClick={() => router.push(`/team/${teamId}/dashboard`)}>
      <TeamInfo>
        <Tag $style="transparent" $status={TAG_LIST[tag].status}>
          {TAG_LIST[tag].label}
        </Tag>
        <TextBox>
          <Text variant="heading_18" color="primary" ellipsis lines={1}>
            {name}
          </Text>
          <Text variant="body_14_regular" color="secondary" ellipsis lines={2}>
            {description}
          </Text>
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
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.inverse};
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

TeamCard.displayName = 'TeamCard';

export default TeamCard;
