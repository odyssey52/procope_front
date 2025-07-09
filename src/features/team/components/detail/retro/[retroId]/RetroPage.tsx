'use client';

import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const RetroPage = () => {
  const params = useParams();
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
    {
      name: '회고 상세',
      path: `/team/${params.teamId}/retro/${params.retroId}`,
      clickable: true,
    },
  ];
  const [title, setTitle] = useState<string>('');

  return (
    <Wrapper>
      <Head>
        <Breadcrumbs paths={paths} />
        <PageTitle title={title} setTitle={setTitle} placeholder="제목을 작성해 주세요" />
      </Head>
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

const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

RetroPage.displayName = 'RetroPage';

export default RetroPage;
