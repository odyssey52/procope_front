'use client';

import teamQueries from '@/features/team/query/teamQueries';
import { ReadRetroListItem } from '@/features/team/services/teamService.type';
import { IconSortArrow } from '@/shared/assets/icons/line';
import Avatar from '@/shared/ui/avatar/Avatar';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import Empty from '@/shared/ui/empty/Empty';
import Table from '@/shared/ui/table/Table';
import Text from '@/shared/ui/Text';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatToDotDate } from '@/shared/utils/date';
import { useQuery } from '@tanstack/react-query';
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

const columns = [
  {
    key: 'title',
    title: '제목',
    width: '700px',
    render: (item: ReadRetroListItem) => (
      <Text variant="body_14_medium" color="primary" ellipsis lines={1}>
        {item.title}
      </Text>
    ),
  },
  {
    key: 'user',
    title: '생성자',
    width: '240px',
    render: (item: ReadRetroListItem) => (
      <>
        <Avatar nickname={item.createUserName} />
        <Text variant="body_14_regular" color="secondary" ellipsis>
          {item.createUserName}
        </Text>
      </>
    ),
  },
  {
    key: 'members',
    title: '참여자',
    width: '140px',
    render: (item: ReadRetroListItem) => (
      <Text variant="body_14_underline" color="primary">
        {item.joinedUserIds.length}명
      </Text>
    ),
  },
  {
    key: 'createdAt',
    title: '회고 일자',
    width: '184px',
    sortable: true,
    icon: <IconSortArrow />,
    render: (item: ReadRetroListItem) => (
      <Text variant="body_14_medium" color="primary">
        {formatToDotDate(item.createdAt)}
      </Text>
    ),
  },
  {
    key: 'updatedAt',
    title: '업데이트 일자',
    width: '184px',
    sortable: true,
    icon: <IconSortArrow />,
    render: (item: ReadRetroListItem) => (
      <Text variant="body_14_medium" color="primary">
        {formatToDotDate(item.updatedAt)}
      </Text>
    ),
  },
  // {
  //   key: 'actions',
  //   title: ' ',
  //   maxWidth: '60px',
  //   width: '60px',
  //   render: (item: ReadRetroListItem) => item.actions,
  // },
];
// const mockData: RetroItem[] = [
//   {
//     title: '2025년 7월 첫째주 개발 회의 및 스프린트 회고',
//     user: {
//       // 예시 이미지를 웹사이트에서 가져오기
//       profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
//       name: '홍길동',
//     },
//     members: 5,
//     createdAt: '2023.07.07',
//     updatedAt: '2023.07.10',
//     actions: <IconMenuCircleVertical />,
//   },
//   {
//     title: '프로젝트 중간 회고',
//     user: {
//       profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
//       name: '김철수',
//     },
//     members: 7,
//     createdAt: '2023.07.15',
//     updatedAt: '2023.07.15',
//     actions: <IconMenuCircleVertical />,
//   },
//   {
//     title: '팀 빌딩 세션 회고',
//     user: {
//       profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
//       name: '이영희',
//     },
//     members: 10,
//     createdAt: '2023.07.20',
//     updatedAt: '2023.07.22',
//     actions: <IconMenuCircleVertical />,
//   },
//   {
//     title: '디자인 시스템 논의 회고',
//     user: {
//       profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
//       name: '박지민',
//     },
//     members: 4,
//     createdAt: '2023.07.25',
//     updatedAt: '2023.07.27',
//     actions: <IconMenuCircleVertical />,
//   },
//   {
//     title: '백엔드 연동 작업 회고',
//     user: {
//       profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
//       name: '최준호',
//     },
//     members: 6,
//     createdAt: '2023.08.01',
//     updatedAt: '2023.08.03',
//     actions: <IconMenuCircleVertical />,
//   },
// ];

const RetroList = () => {
  const router = useRouter();
  const params = useParams();
  const { data, isError } = useQuery({ ...teamQueries.readRetroList({ teamId: params.teamId as string }) });
  const paths = [
    {
      name: '회고 관리',
      path: `/team/${params.teamId}`,
      clickable: false,
    },
    {
      name: '회고 목록',
      path: `/team/${params.teamId}/retro`,
      clickable: true,
    },
  ];

  const addRetro = () => {
    // 추후 추가 로직으로 변경
    router.push(`/team/${params.teamId}/retro/${123}`);
  };

  return (
    <Wrapper>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={paths} />
          <PageTitle title="회고 목록" />
        </TitleBox>
      </Head>
      <Content>
        <PageSubTitle first="총" point={`${data?.length || 0}`} last="개">
          <Button onClick={addRetro}>추가</Button>
        </PageSubTitle>
        <Table
          data={data}
          columns={columns}
          keyExtractor={(item) => item.title}
          caption="회고 목록"
          isError={isError}
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

RetroList.displayName = 'RetroList';

export default RetroList;
