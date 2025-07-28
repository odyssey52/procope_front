import { ReadTeamDetailResponse, ReadTeamUsersResponse } from '@/features/team/services/teamService.type';
import PartCellContent from '@/shared/ui/part/PartCellContent';
import PartHeaderContent from '@/shared/ui/part/PartHeaderContent';
import ItemList from '@/shared/ui/select/ItemList';
import Select from '@/shared/ui/select/Select';
import TagWrapper from '@/shared/ui/tag/Tag';
import TagJob from '@/shared/ui/tag/TagJob';
import Button from '@/shared/ui/button/Button';
import { formatDateToDotAndSlice, jobList } from '@/features/team/utils/data';
import Tooltip from '@/shared/ui/tooltip/Tooltip';
import { useMutation } from '@tanstack/react-query';
import { updateTeamUser } from '@/features/team/services/teamService';
import { toastActions } from '@/shared/store/modal/toast';
import * as types from '@/features/team/services/teamService.type';
import { MESSAGES } from '@/shared/constants/messages';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubModal from '../SubModal';

interface MemberListProps {
  teamUser: ReadTeamUsersResponse;
  teamData: ReadTeamDetailResponse;
}

const MemberList = ({ teamUser, teamData }: MemberListProps) => {
  const [openExitIndex, setOpenExitIndex] = useState<number | null>(null);
  const [roles, setRoles] = useState<Record<string, 'ADMIN' | 'MANAGER' | 'MEMBER'>>({});
  const [initialRoles, setInitialRoles] = useState<Record<string, 'ADMIN' | 'MANAGER' | 'MEMBER'>>({});
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const arrowIcon = '/assets/icons/line//sort-arrow.svg';
  const title = ['참여자', '이메일', '직무', '담당업무', '참여 일자', '마지막 활성 일자', '권한', ''];
  const width = ['8', '18', '9', '23', '11', '11', '16', '4'];

  useEffect(() => {
    if (teamUser?.teamMember) {
      const map = Object.fromEntries(teamUser.teamMember.map((member) => [member.user.id, member.teamRole]));
      setRoles(map);
      setInitialRoles(map);
    }
  }, [teamUser]);

  const roleInfoName = (name: string) => {
    return <TagJob type={jobList[name as keyof typeof jobList]} />;
  };

  const authorityTag: { id: 'ADMIN' | 'MANAGER' | 'MEMBER'; value: React.JSX.Element }[] = [
    {
      id: 'ADMIN',
      value: (
        <TagWrapper $status="info" $style="transparent" $size="large">
          최고 관리자
        </TagWrapper>
      ),
    },
    {
      id: 'MANAGER',
      value: (
        <TagWrapper $status="success" $style="transparent" $size="large">
          관리자
        </TagWrapper>
      ),
    },
    {
      id: 'MEMBER',
      value: (
        <TagWrapper $style="transparent" $size="large">
          참여자
        </TagWrapper>
      ),
    },
  ];

  const selectAuth = (value: 'ADMIN' | 'MANAGER' | 'MEMBER') => {
    const tagObj = authorityTag.find((tag) => tag.id === value);
    return tagObj?.value;
  };

  const task = (value: { id: string; name: string }[]) => {
    return value.map((ele) => ele.name);
  };

  const saveTeamUserMutation = useMutation({
    mutationFn: ({ payload, params }: { payload: types.UpdateTeamUserPayload; params: types.UpdateTeamUserParams }) =>
      updateTeamUser(payload, params),
  });

  const saveTeamUserHandle = async () => {
    try {
      const changedUsers: types.UpdateTeamUserPayload = Object.entries(roles)
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

  return (
    <Wrapper>
      <Top>
        <Count>
          총 <span>{teamUser.count}</span> 명
        </Count>
        {teamData.myRole === 'ADMIN' && (
          <Button size="36" onClick={saveTeamUserHandle}>
            변경
          </Button>
        )}
      </Top>
      <UserTable>
        <TableTitle>
          {title.map((value, index) => (
            <PartHeaderContent
              size={44}
              title={value}
              width={width[index]}
              key={index}
              icon={
                (index === 4 || index === 5) && (
                  <>
                    <Image
                      src={arrowIcon}
                      width={24}
                      height={24}
                      alt="아이콘"
                      onClick={() => setTooltipIndex((prev) => (prev === index ? null : index))}
                    />
                    {tooltipIndex === index && (
                      <div style={{ position: 'absolute' }}>
                        <Tooltip
                          text={index === 4 ? '참여 일자 최신순' : '마지막 활성 일자 최신순'}
                          position="top"
                          align="end"
                        />
                      </div>
                    )}
                  </>
                )
              }
            />
          ))}
        </TableTitle>
        {teamUser?.teamMember.map((data, index) => {
          const content = [
            data.user.name,
            data.user.email,
            roleInfoName(data.user.roleInfo.name),
            task(data.user.roleInfo.fields),
            formatDateToDotAndSlice(data.createdAt),
            formatDateToDotAndSlice(data.lastActiveAt),
            teamData.myRole === 'ADMIN' ? (
              <Select
                placeholder="권한을 선택하세요"
                value={selectAuth(roles[data.user.id])}
                width={222}
                valueHandler={(e) => {
                  if (!e || typeof e !== 'object' || !('props' in e)) return;
                  const selectedLabel = (e as React.ReactElement<{ children: string }>).props.children;
                  const matched = authorityTag.find((item) => {
                    if (!item.value || typeof item.value !== 'object' || !('props' in item.value)) return false;
                    const itemLabel = (item.value as React.ReactElement<{ children: string }>).props.children;
                    return itemLabel === selectedLabel;
                  });
                  if (matched) {
                    setRoles((prev) => ({
                      ...prev,
                      [data.user.id]: matched.id,
                    }));
                  }
                }}
                selectOptionList={authorityTag}
              />
            ) : (
              selectAuth(data.teamRole)
            ),
            teamData.myRole === 'ADMIN' && (
              <>
                <Image
                  src="/assets/icons/line/menu-circle-vertical.svg"
                  width={36}
                  height={36}
                  alt="아이콘"
                  onClick={() => setOpenExitIndex(openExitIndex === index ? null : index)}
                  style={{ position: 'relative' }}
                />
                {openExitIndex === index && (
                  <div style={{ position: 'absolute', top: '100%', right: '0', zIndex: 10 }}>
                    <ItemList
                      selectOptionList={[{ value: '퇴출' }]}
                      width="112px"
                      valueHandler={() => setIsModalOpen(true)}
                    />
                    {isModalOpen && (
                      <SubModal
                        name="deleteUser"
                        teamId={teamData.teamId}
                        userId={data.user.id}
                        onClose={() => setOpenExitIndex(null)}
                      />
                    )}
                  </div>
                )}
              </>
            ),
          ];

          return (
            <TableContent key={index}>
              {content.map((value, index) => {
                return index === 3 && Array.isArray(value) ? (
                  <PartCellContent size={56} width={width[index]} key={index}>
                    {value.map((ele, index) => (
                      <TagWrapper key={index} $style="transparent" $size="large">
                        {ele}
                      </TagWrapper>
                    ))}
                  </PartCellContent>
                ) : (
                  <PartCellContent size={56} width={width[index]} key={index}>
                    {value}
                  </PartCellContent>
                );
              })}
            </TableContent>
          );
        })}
      </UserTable>
    </Wrapper>
  );
};

export default MemberList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
const UserTable = styled.div``;
const TableTitle = styled.div`
  display: flex;
`;
const TableContent = styled.div`
  display: flex;
  flex: 1;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary_hover_pressed};
    background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }
`;
