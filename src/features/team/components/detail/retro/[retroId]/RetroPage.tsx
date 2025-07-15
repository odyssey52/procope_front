'use client';

import retroQueries from '@/features/team/query/retroQueries';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RetroInfoWrapper from './RetroInfoWrapper';

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
  const { data, isSuccess } = useQuery({
    ...retroQueries.readRetro({ teamId: params.teamId as string, retroId: params.retroId as string }),
  });

  if (!isSuccess) return null;

  return (
    <Wrapper>
      <Head>
        <Breadcrumbs paths={paths} />
        <RetroInfoWrapper data={data} />
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
