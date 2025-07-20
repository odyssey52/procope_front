'use client';

import retroQueries from '@/features/team/query/retroQueries';
import useAuthStore from '@/shared/lib/store/auth/auth';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import styled from 'styled-components';
import RetroInfoWrapper from './RetroInfoWrapper';

const RetroPage = () => {
  const { accessToken } = useAuthStore();
  const client = useRef<CompatClient | null>(null);

  const [isConnected, setIsConnected] = useState(false);
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

  const connectHandler = () => {
    const socket = new SockJS(`http://192.168.0.17:8081/websocket?token=${accessToken}&retroId=${params.retroId}`);
    client.current = Stomp.over(socket);
    client.current.connect(
      {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      () => {
        console.log('✅ STOMP 연결 성공');
        setIsConnected(true);

        client.current?.subscribe(`/topic/${params.retroId}`, (message) => {
          console.log('📨 메시지 수신:', message.body);
        });
      },
      (error: any) => {
        console.error('❌ STOMP 에러:', error);
        setIsConnected(false);
      },
    );
  };

  useEffect(() => {
    connectHandler();

    return () => {
      if (client.current && client.current.connected) {
        client.current.disconnect();
      }
    };
  }, []);

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
