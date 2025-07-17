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
// import { useMutation } from '@tanstack/react-query';
// import { updateTeamUser } from '@/features/team/services/teamService';
// import * as types from '@/features/team/services/teamService.type';
// import { toastActions } from '@/shared/lib/store/modal/toast';
// import { MESSAGES } from '@/shared/constants/messages';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import SubModal from '../SubModal';

interface MemberListProps {
  teamUser: ReadTeamUsersResponse;
  teamData: ReadTeamDetailResponse;
}

const MemberList = ({ teamUser, teamData }: MemberListProps) => {
  const [isExit, setIsExit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);
  const [role, setRole] = useState<'ADMIN' | 'MANAGER' | 'MEMBER'>('ADMIN');
  const arrowIcon = '/assets/icons/line//sort-arrow.svg';
  const title = ['참여자', '이메일', '직무', '담당업무', '참여 일자', '마지막 활성 일자', '권한', ''];
  const width = ['120', '280', '140', '342', '160', '160', '246', '60'];

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
    const response: string[] = [];
    value.forEach((ele) => {
      response.push(ele.name);
    });
    return response;
  };

  // const saveTeamUserMutation = useMutation({
  //   mutationFn: ({ payload, params }: { payload: types.UpdateTeamUserPayload; params: types.UpdateTeamUserParams }) => {
  //     return updateTeamUser(payload, params);
  //   },
  // });

  // const saveTeamUserHandle = async (userRole: string) => {
  //   try {
  //     const payload = {
  //       role: userRole,
  //     };
  //     const params = { teamData.teamId };

  //     await saveTeamUserMutation.mutateAsync({payload, params});
  //       toastActions.open({
  //           state: 'success',
  //           title: MESSAGES.UPDATE_SAVE_SUCCESS,
  //         });
  //       } catch (err) {
  //           toastActions.open({
  //             state: 'error',
  //             title: MESSAGES.ACCOUNT_SAVE_ERROR,
  //           });
  //         }
  // }

  return (
    <Wrapper>
      <Top>
        <Count>
          총 <span>{teamUser.count}</span> 명
        </Count>
        <Button size="36" onClick={() => {}}>
          변경
        </Button>
      </Top>
      <UserTable>
        <TableTitle>
          {title.map((value, index) => {
            return (
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
                        onClick={() => setIsTooltip(!isTooltip)}
                      />
                      {isTooltip && (
                        <div style={{ position: 'absolute' }}>
                          <Tooltip text="참여 일자 최신순" direction="right" />
                        </div>
                      )}
                    </>
                  )
                }
              />
            );
          })}
        </TableTitle>
        {teamUser?.teamMember.map((data, index) => {
          const content = [
            data.user.name,
            data.user.email,
            roleInfoName(data.user.roleInfo.name),
            task(data.user.roleInfo.fields),
            formatDateToDotAndSlice(data.createdAt),
            formatDateToDotAndSlice(data.lastActiveAt),
            teamData.myRole !== 'ADMIN' ? (
              <Select
                placeholder="권한을 선택하세요"
                value={role && selectAuth(role)}
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
                    setRole(matched.id);
                  }
                }}
                selectOptionList={authorityTag}
              />
            ) : (
              selectAuth(data.teamRole)
            ),
            teamData.myRole !== 'ADMIN' && (
              <>
                <Image
                  src="/assets/icons/line/menu-circle-vertical.svg"
                  width={36}
                  height={36}
                  alt="아이콘"
                  onClick={() => setIsExit(!isExit)}
                  style={{ position: 'relative' }}
                />
                {isExit && (
                  <div style={{ position: 'absolute', top: '100%', right: '0' }}>
                    <ItemList selectOptionList={[{ value: '퇴출' }]} valueHandler={() => setIsModalOpen(true)} />
                    {isModalOpen && (
                      <SubModal
                        name="deleteUser"
                        teamId={teamData.teamId}
                        userId={data.user.id}
                        onClose={() => setIsExit(false)}
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
                    {value.map((ele, index) => {
                      return (
                        <TagWrapper key={index} $style="transparent" $size="large">
                          {ele}
                        </TagWrapper>
                      );
                    })}
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
