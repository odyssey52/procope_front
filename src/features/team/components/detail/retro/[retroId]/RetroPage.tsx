'use client';

import useAuthStore from '@/shared/store/auth/auth';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import { Client } from '@stomp/stompjs';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import styled from 'styled-components';
import KeepWrapper from './KeepWrapper';
import RetroInfoWrapper from './RetroInfoWrapper';
import ProblemWrapper from './ProblemWrapper';

const RetroPage = () => {
  const params = useParams();
  const { retroId, teamId } = params;

  const { accessToken } = useAuthStore();
  const client = useRef<Client | null>(null);

  const [isConnected, setIsConnected] = useState(false);

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

  useEffect(() => {
    if (!retroId || !accessToken) return;

    if (!client.current) {
      client.current = new Client({
        webSocketFactory: () => {
          return new SockJS(`https://dev-core-api.procope.kr/websocket?token=Bearer ${accessToken}&retroId=${retroId}`);
        },
        onConnect: () => {
          console.log('✅ STOMP 연결 성공');
          setIsConnected(true);
        },
        onStompError: (frame) => {
          console.error('❌ STOMP 에러:', frame);
          setIsConnected(false);
        },
        onWebSocketError: (event) => {
          console.error('❌ WebSocket 에러:', event);
          setIsConnected(false);
        },
        debug: (str) => {
          console.log('STOMP Debug:', str);
        },
      });
    }

    client.current.activate();

    return () => {
      if (client.current && client.current.active) {
        client.current.deactivate();
        client.current = null;
      }
    };
  }, [accessToken, retroId]);

  return (
    <Wrapper>
      <Head>
        <Breadcrumbs paths={paths} />
        <RetroInfoWrapper client={client.current} />
      </Head>
      <Content>
        <KeepWrapper retroId={retroId as string} client={client.current} />
        <ProblemWrapper retroId={retroId as string} client={client.current} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin-top: 24px;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;

const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  padding: 0 24px;
  gap: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex-grow: 1;
`;

RetroPage.displayName = 'RetroPage';

export default RetroPage;
