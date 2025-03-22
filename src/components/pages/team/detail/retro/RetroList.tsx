'use client';

import { IconMenuCircleVertical, IconSortArrow } from '@/assets/icons/line';
import Avatar from '@/components/common/ui/avatar/Avatar';
import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import Button from '@/components/common/ui/button/Button';
import Empty from '@/components/common/ui/empty/Empty';
import Table, { TableColumn } from '@/components/common/ui/table/Table';
import Text from '@/components/common/ui/Text';
import PageSubTitle from '@/components/common/ui/title/PageSubTitle';
import PageTitle from '@/components/common/ui/title/PageTitle';
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
const EMPTY_LIST = [];

const columns: TableColumn<RetroItem>[] = [
  {
    key: 'title',
    title: '제목',
    width: '700px',
    render: (item) => (
      <Text variant="body_14_medium" color="primary" ellipsis lines={1}>
        {item.title}
      </Text>
    ),
  },
  {
    key: 'user',
    title: '생성자',
    width: '240px',
    render: (item) => (
      <>
        <Avatar image={item.user.profileImage} nickname={item.user.name} />
        <Text variant="body_14_regular" color="secondary" ellipsis>
          {item.user.name}
        </Text>
      </>
    ),
  },
  {
    key: 'members',
    title: '참여자',
    width: '140px',
    render: (item) => (
      <Text variant="body_14_underline" color="primary">
        {item.members}명
      </Text>
    ),
  },
  {
    key: 'createdAt',
    title: '회고 일자',
    width: '184px',
    sortable: true,
    icon: <IconSortArrow />,
    render: (item) => (
      <Text variant="body_14_regular" color="primary">
        {item.createdAt}
      </Text>
    ),
  },
  {
    key: 'updatedAt',
    title: '업데이트 일자',
    width: '184px',
    sortable: true,
    icon: <IconSortArrow />,
    render: (item) => (
      <Text variant="body_14_regular" color="primary">
        {item.updatedAt}
      </Text>
    ),
  },
  {
    key: 'actions',
    title: ' ',
    maxWidth: '60px',
    width: '60px',
    render: (item) => item.actions,
  },
];
const mockData: RetroItem[] = [
  {
    title: '2025년 7월 첫째주 개발 회의 및 스프린트 회고',
    user: {
      // 예시 이미지를 웹사이트에서 가져오기
      profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
      name: '홍길동',
    },
    members: 5,
    createdAt: '2023.07.07',
    updatedAt: '2023.07.10',
    actions: <IconMenuCircleVertical />,
  },
  {
    title: '프로젝트 중간 회고',
    user: {
      profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
      name: '김철수',
    },
    members: 7,
    createdAt: '2023.07.15',
    updatedAt: '2023.07.15',
    actions: <IconMenuCircleVertical />,
  },
  {
    title: '팀 빌딩 세션 회고',
    user: {
      profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
      name: '이영희',
    },
    members: 10,
    createdAt: '2023.07.20',
    updatedAt: '2023.07.22',
    actions: <IconMenuCircleVertical />,
  },
  {
    title: '디자인 시스템 논의 회고',
    user: {
      profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
      name: '박지민',
    },
    members: 4,
    createdAt: '2023.07.25',
    updatedAt: '2023.07.27',
    actions: <IconMenuCircleVertical />,
  },
  {
    title: '백엔드 연동 작업 회고',
    user: {
      profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
      name: '최준호',
    },
    members: 6,
    createdAt: '2023.08.01',
    updatedAt: '2023.08.03',
    actions: <IconMenuCircleVertical />,
  },
];

const RetroList = () => {
  const paths = {
    회고관리: '/team/[teamId]/retro',
  };

  const addRetro = () => {
    alert('addRetro');
  };

  return (
    <Wrapper>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={paths} />
          <PageTitle title="회고관리" />
        </TitleBox>
      </Head>
      <Content>
        <PageSubTitle first="총" point={`${mockData.length}`} last="개">
          <Button onClick={addRetro}>추가</Button>
        </PageSubTitle>
        <Table
          data={mockData}
          columns={columns}
          keyExtractor={(item) => item.title}
          caption="회고 목록"
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
