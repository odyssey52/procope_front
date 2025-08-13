'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetro, deleteRetro } from '@/features/team/services/retroService';
import { ReadRetroListItem } from '@/features/team/services/retroService.type';
import { IconSortArrow } from '@/shared/assets/icons/line';
import { toastActions } from '@/shared/store/modal/toast';
import Avatar from '@/shared/ui/avatar/Avatar';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import MoreArea from '@/shared/ui/button/MoreArea';
import Empty from '@/shared/ui/empty/Empty';
import ItemList from '@/shared/ui/select/ItemList';
import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import Table from '@/shared/ui/table/Table';
import Text from '@/shared/ui/Text';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import PageSubTitleSkeleton from '@/shared/ui/title/PageSubTitleSkeleton';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

export interface RetroItem {
  title: string;
  user: {
    profileImage: string;
    name: string;
  };
  members: number;
  createdAt: string;
  updatedAt: string;
  actions: React.ReactNode;
}

const EMPTY_TITLE = '등록된 회고록이 없습니다.';
const EMPTY_DESCRIPTION = '회고록을 추가하여 회고를 진행해 주세요.';

const renderTitle = (item: ReadRetroListItem, index: number, teamId: string) => (
  <Link href={`/team/${teamId}/retro/${item.id}`}>
    <Text variant="body_14_medium" color="primary" ellipsis lines={1}>
      {item.title}
    </Text>
  </Link>
);

const renderCreator = (item: ReadRetroListItem, index: number) => (
  <CreatorWrapper>
    <Avatar nickname={item.createUserName} image={item.picture} />
    <Text variant="body_14_regular" color="secondary" ellipsis>
      {item.createUserName}
    </Text>
  </CreatorWrapper>
);

const renderMembers = (item: ReadRetroListItem, index: number) => (
  <Text variant="body_14_underline" color="primary">
    {item.joinedUserIds.length}명
  </Text>
);

const renderDate = (date: string) => (
  <Text variant="body_14_medium" color="primary">
    {formatDateToDot(date)}
  </Text>
);

const renderCreatedAt = (item: ReadRetroListItem, index: number) => renderDate(item.createdAt);

const renderUpdatedAt = (item: ReadRetroListItem, index: number) => renderDate(item.updatedAt);

type ColumnConfig = {
  key: string;
  title: string;
  width: string;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
  icon?: React.ReactNode;
  render: (item: ReadRetroListItem, index: number) => React.ReactNode;
};

const RetroList = () => {
  const router = useRouter();
  const params = useParams();
  const teamId = params.teamId as string;
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    ...retroQueries.readRetroList({ teamId }),
  });

  const createRetroMutation = useMutation({ mutationFn: createRetro });

  const deleteRetroMutation = useMutation({
    mutationFn: (retroId: string | number) => deleteRetro({ teamId, retroId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroList({ teamId }).queryKey,
      });
    },
  });

  const paths = [
    {
      name: '회고 관리',
      path: `/team/${teamId}`,
      clickable: false,
    },
    {
      name: '회고 목록',
      path: `/team/${teamId}/retro`,
      clickable: true,
    },
  ];

  const addRetro = async () => {
    try {
      const payload = {
        title: '새 회고',
        teamId: teamId as string,
      };
      const { retroId } = await createRetroMutation.mutateAsync(payload);
      router.push(`/team/${teamId}/retro/${retroId}`);
    } catch {
      toastActions.open({
        state: 'error',
        title: '회고 생성 실패',
      });
    }
  };

  const columns: ColumnConfig[] = [
    {
      key: 'title',
      title: '제목',
      width: '700px',
      render: (item, index) => renderTitle(item, index, teamId),
    },
    {
      key: 'creator',
      title: '생성자',
      width: '240px',
      render: renderCreator,
    },
    {
      key: 'memberCount',
      title: '참여자',
      width: '140px',
      render: renderMembers,
    },
    {
      key: 'createdAt',
      title: '회고 일자',
      width: '184px',
      sortable: true,
      icon: <IconSortArrow />,
      render: renderCreatedAt,
    },
    {
      key: 'updatedAt',
      title: '업데이트 일자',
      width: '184px',
      sortable: true,
      icon: <IconSortArrow />,
      render: renderUpdatedAt,
    },
    {
      key: 'more',
      title: '',
      width: '60px',
      minWidth: '60px',
      render: (item) => (
        <MoreArea
          size={40}
          menuList={
            <ItemList
              selectOptionList={[{ value: '삭제', label: '삭제' }]}
              valueHandler={() => deleteRetroMutation.mutate(item.id)}
              width="112px"
            />
          }
        />
      ),
    },
  ];
  return (
    <Wrapper>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={paths} />
          {isLoading ? <TextSkeleton /> : <PageTitle title="회고 목록" />}
        </TitleBox>
      </Head>
      <Content>
        {isLoading ? (
          <PageSubTitleSkeleton />
        ) : (
          <PageSubTitle first="총" point={`${data?.length || 0}`} last="개">
            <Button onClick={addRetro}>추가</Button>
          </PageSubTitle>
        )}
        <Table
          data={data}
          columns={columns}
          keyExtractor={(item) => item.title}
          caption="회고 목록"
          isError={isError}
          isLoading={isLoading}
          emptyNode={<Empty title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} onClick={addRetro} />}
        />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

RetroList.displayName = 'RetroList';

export default RetroList;
