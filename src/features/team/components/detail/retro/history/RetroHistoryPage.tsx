'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { deleteRetro } from '@/features/team/services/retroService';
import { RetroProblemListItem } from '@/features/team/services/retroService.type';
import { IconSortArrow } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import { confirmModalActions } from '@/shared/store/modal/confirmModal';
import Avatar from '@/shared/ui/avatar/Avatar';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import MoreArea from '@/shared/ui/button/MoreArea';
import Empty from '@/shared/ui/empty/Empty';
import ItemList from '@/shared/ui/select/ItemList';
import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import Table, { TableColumn } from '@/shared/ui/table/Table';
import Text from '@/shared/ui/Text';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import PageSubTitleSkeleton from '@/shared/ui/title/PageSubTitleSkeleton';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

const EMPTY_TITLE = '등록된 회고 히스토리가 없습니다.';
const EMPTY_DESCRIPTION = '회고록을 추가하여 회고를 진행해 주세요.';

const renderType = (item: RetroProblemListItem) => (
  <Text variant="body_14_medium" color="primary">
    {item.kanbanStatus}-{item.problemId}
  </Text>
);

const renderTitle = (item: RetroProblemListItem, teamId: string) => (
  <Link href={`/team/${teamId}/retro/${item.id}`} style={{ width: '100%' }}>
    <Text variant="body_14_medium" color="primary" ellipsis lines={1}>
      {item.title}
    </Text>
  </Link>
);

const renderCreator = (item: RetroProblemListItem) => (
  <CreatorWrapper>
    <Avatar nickname={item.createUserInfo.name} image={item.createUserInfo.profileImageUrl} />
    <Text variant="body_14_regular" color="secondary" ellipsis>
      {item.createUserInfo.name}
    </Text>
  </CreatorWrapper>
);

const renderDate = (date: string) => (
  <Text variant="body_14_medium" color="primary">
    {formatDateToDot(date)}
  </Text>
);

const renderRetroDate = (item: RetroProblemListItem) => renderDate(item.updatedAt);

const renderUpdatedAt = (item: RetroProblemListItem) => renderDate(item.updatedAt);

const RetroHistoryPage = () => {
  const router = useRouter();
  const params = useParams();
  const teamId = params.teamId as string;
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  const { data, isError, isLoading } = useQuery({
    ...retroQueries.readRetroList({ teamId }),
  });

  const deleteRetroMutation = useMutation({
    mutationFn: (retroId: string | number) => deleteRetro({ teamId, retroId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroList({ teamId }).queryKey,
      });
    },
  });

  const onClickDeleteRetro = (retroId: string | number) => {
    confirmModalActions.open({
      title: '회고를 삭제하시겠습니까?',
      description: '삭제시 복구가 불가능합니다.',
      type: 'error',
      onConfirm: () => deleteRetroMutation.mutate(retroId),
    });
  };

  const paths = [
    {
      name: '회고 관리',
      path: `/team/${teamId}`,
      clickable: false,
    },
    {
      name: '회고 히스토리',
      path: `/team/${teamId}/retro/history`,
      clickable: true,
    },
  ];

  const columns: TableColumn<RetroProblemListItem>[] = [
    {
      key: 'type',
      title: '구분',
      flex: '10',
      render: (item) => renderType(item),
    },
    {
      key: 'title',
      title: '제목',
      flex: '50',
      render: (item) => renderTitle(item, teamId),
    },
    {
      key: 'creator',
      title: '생성자',
      flex: '16',
      render: renderCreator,
    },
    {
      key: 'createdAt',
      title: '회고 일자',
      flex: '11',
      sortable: true,
      icon: <IconSortArrow />,
      render: renderRetroDate,
    },
    {
      key: 'updatedAt',
      title: '업데이트 일자',
      flex: '11',
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
              valueHandler={() => onClickDeleteRetro(item.id)}
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
          {isLoading ? <TextSkeleton /> : <PageTitle title="회고 히스토리" />}
        </TitleBox>
      </Head>
      <Content>
        {isLoading ? <PageSubTitleSkeleton /> : <PageSubTitle first="총" point={`${data?.length || 0}`} last="개" />}
        {/* <TableWrapper>
          <Table
            data={data}
            columns={columns}
            keyExtractor={(item) => item.title}
            caption="회고 히스토리"
            isError={isError}
            isLoading={isLoading}
            emptyNode={<Empty title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} onClick={addRetro} />}
          />
        </TableWrapper> */}
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
  flex-grow: 1;
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

const TableWrapper = styled.div`
  flex-grow: 1;
  overflow-x: scroll;
  overflow-y: visible;
`;

RetroHistoryPage.displayName = 'RetroHistoryPage';

export default RetroHistoryPage;
