import { AUTHORITY_TAG, MEMBERLIST_TABLE_TITLE, MEMBERLIST_TABLE_WIDTH } from '@/features/team/const/member';
import { updateTeamUser } from '@/features/team/services/teamService';
import {
  ReadTeamDetailResponse,
  ReadTeamUsersResponse,
  TeamMember,
  UpdateTeamUserParams,
  UpdateTeamUserPayload,
} from '@/features/team/services/teamService.type';
import { FieldInfo } from '@/features/user/services/info/userInfoService.type';
import { IconSortArrow } from '@/shared/assets/icons/line';
import { MESSAGES } from '@/shared/constants/messages';
import { useAuth } from '@/shared/hooks/useAuth';
import { toastActions } from '@/shared/store/modal/toast';
import { UserRole } from '@/shared/types/team';
import Button from '@/shared/ui/button/Button';
import MoreArea from '@/shared/ui/button/MoreArea';
import ItemList from '@/shared/ui/select/ItemList';
import Select from '@/shared/ui/select/Select';
import Table from '@/shared/ui/table/Table';
import Tag from '@/shared/ui/tag/Tag';
import TagJob, { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import { formatDateToDot } from '@/shared/utils/date';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubModal from '../SubModal';

interface MemberListProps {
  teamUser: ReadTeamUsersResponse;
  teamData: ReadTeamDetailResponse;
}

const MemberList = ({ teamUser, teamData }: MemberListProps) => {
  const { user } = useAuth();
  const userId = String(user?.userContext.id) || '';
  const userRole = teamData.myRole;
  const isAdmin = userRole === 'ADMIN';

  const [roles, setRoles] = useState<Record<string, UserRole>>({});
  const [initialRoles, setInitialRoles] = useState<Record<string, UserRole>>({});
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveTeamUserMutation = useMutation({
    mutationFn: ({ payload, params }: { payload: UpdateTeamUserPayload; params: UpdateTeamUserParams }) =>
      updateTeamUser(payload, params),
  });

  const roleInfoName = (name: string) => {
    return <TagJob type={name as JobType} />;
  };

  const selectAuth = (value: UserRole) => {
    const tagObj = AUTHORITY_TAG.find((tag) => tag.id === value);
    return tagObj?.label;
  };

  const task = (value: FieldInfo[]) => {
    return value.map((ele) => ele.name);
  };

  const saveTeamUserHandle = async () => {
    try {
      const changedUsers: UpdateTeamUserPayload = Object.entries(roles)
        .filter(([userId, role]) => initialRoles[userId] !== role)
        .map(([userId, role]) => ({
          userId,
          role,
        }));

      if (changedUsers.length === 0) {
        toastActions.open({ state: 'info', title: '변경된 멤버가 없습니다.' });
        return;
      }

      const params = { teamId: teamData.teamId };
      await saveTeamUserMutation.mutateAsync({ payload: changedUsers, params });

      toastActions.open({
        state: 'success',
        title: MESSAGES.UPDATE_SAVE_SUCCESS,
      });

      setInitialRoles(roles);
    } catch (err) {
      toastActions.open({
        state: 'error',
        title: MESSAGES.ACCOUNT_SAVE_ERROR,
      });
    }
  };

  const columns = [
    {
      key: 'name',
      title: MEMBERLIST_TABLE_TITLE[0],
      width: `${MEMBERLIST_TABLE_WIDTH[0]}%`,
      render: (item: TeamMember[number]) => (
        <Text variant="body_14_medium" color="secondary" ellipsis>
          {item.user.name}
        </Text>
      ),
    },
    {
      key: 'email',
      title: MEMBERLIST_TABLE_TITLE[1],
      width: `${MEMBERLIST_TABLE_WIDTH[1]}%`,
      render: (item: TeamMember[number]) => (
        <Text variant="body_14_medium" color="secondary" ellipsis>
          {item.user.email}
        </Text>
      ),
    },
    {
      key: 'job',
      title: MEMBERLIST_TABLE_TITLE[2],
      width: `${MEMBERLIST_TABLE_WIDTH[2]}%`,
      render: (item: TeamMember[number]) => roleInfoName(item.user.roleInfo.name),
    },
    {
      key: 'tasks',
      title: MEMBERLIST_TABLE_TITLE[3],
      width: `${MEMBERLIST_TABLE_WIDTH[3]}%`,
      render: (item: TeamMember[number]) => (
        <>
          {task(item.user.roleInfo.fields).map((ele, idx) => (
            <Tag key={idx} $style="transparent" $size="large">
              {ele}
            </Tag>
          ))}
        </>
      ),
    },
    {
      key: 'createdAt',
      title: MEMBERLIST_TABLE_TITLE[4],
      width: `${MEMBERLIST_TABLE_WIDTH[4]}%`,
      sortable: true,
      icon: <IconSortArrow onClick={() => setTooltipIndex((prev) => (prev === 4 ? null : 4))} />,
      render: (item: TeamMember[number]) => (
        <Text variant="body_14_medium" color="secondary" ellipsis>
          {formatDateToDot(item.createdAt)}
        </Text>
      ),
    },
    {
      key: 'lastActiveAt',
      title: MEMBERLIST_TABLE_TITLE[5],
      width: `${MEMBERLIST_TABLE_WIDTH[5]}%`,
      sortable: true,
      icon: <IconSortArrow onClick={() => setTooltipIndex((prev) => (prev === 5 ? null : 5))} />,
      render: (item: TeamMember[number]) => (
        <Text variant="body_14_medium" color="secondary" ellipsis>
          {formatDateToDot(item.lastActiveAt)}
        </Text>
      ),
    },
    {
      key: 'role',
      title: MEMBERLIST_TABLE_TITLE[6],
      width: `${MEMBERLIST_TABLE_WIDTH[6]}%`,
      minWidth: '150px',
      render: (item: TeamMember[number]) =>
        isAdmin && item.teamRole !== 'ADMIN' ? (
          <Select<UserRole>
            placeholder="권한을 선택하세요"
            value={roles[item.user.id]}
            width="100%"
            valueHandler={(next) => {
              setRoles((prev) => ({
                ...prev,
                [item.user.id]: next,
              }));
            }}
            selectOptionList={AUTHORITY_TAG}
          />
        ) : (
          selectAuth(item.teamRole)
        ),
    },
    {
      key: 'actions',
      title: MEMBERLIST_TABLE_TITLE[7],
      width: '60px',
      render: (item: TeamMember[number]) =>
        isAdmin && item.user.id !== userId ? (
          <>
            <MoreArea
              size={36}
              menuList={
                <ItemList
                  selectOptionList={[{ value: '퇴출', label: '퇴출' }]}
                  width="112px"
                  valueHandler={() => setIsModalOpen(true)}
                />
              }
            />
            {isModalOpen && (
              <SubModal
                name="deleteUser"
                teamId={teamData.teamId}
                userId={item.user.id}
                onClose={() => setIsModalOpen(false)}
              />
            )}
          </>
        ) : null,
    },
  ];

  useEffect(() => {
    if (teamUser?.teamMember) {
      const map = Object.fromEntries(teamUser.teamMember.map((member) => [member.user.id, member.teamRole]));
      setRoles(map);
      setInitialRoles(map);
    }
  }, [teamUser]);
  return (
    <Wrapper>
      <Top>
        <Count>
          총 <span>{teamUser.count}</span> 명
        </Count>
        {isAdmin && (
          <Button size="36" onClick={saveTeamUserHandle}>
            변경
          </Button>
        )}
      </Top>
      <TableWrapper>
        <Table
          data={teamUser?.teamMember}
          columns={columns}
          keyExtractor={(item) => String(item.user.id)}
          caption="멤버 목록"
        />
      </TableWrapper>
    </Wrapper>
  );
};

export default MemberList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Count = styled.span`
  ${({ theme }) => theme.fontStyle.heading_18};
  color: ${({ theme }) => theme.sementicColors.text.primary};
  span {
    color: ${({ theme }) => theme.sementicColors.text.brand};
  }
`;

const TableWrapper = styled.div`
  flex-grow: 1;
  overflow-x: scroll;
  overflow-y: visible;
`;

const TooltipBox = styled.div`
  position: absolute;
  top: 140%;
`;
