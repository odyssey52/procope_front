'use client';

import useAuthStore from '@/shared/store/auth/auth';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import SidePanel from '@/shared/ui/sidePanel/SidePanel';
import ErrorBoundary from '@/shared/ui/errorboundary/ErrorBoundary';
import { Client } from '@stomp/stompjs';
import { useParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import styled from 'styled-components';
import KeepWrapper from './KeepWrapper';
import ProblemWrapper from './ProblemWrapper';
import RetroInfoSkeleton from './RetroInfoSkeleton';
import RetroInfoWrapper from './RetroInfoWrapper';
import SkeletonKeepWrapper from './SkeletonKeepWrapper';
import SkeletonProblemWrapper from './SkeletonProblemWrapper';

const RetroPage = () => {
  const params = useParams();
  const { accessToken } = useAuthStore();
  const { close } = useSidePanelStore();
  const { retroId, teamId } = params;

  const client = useRef<Client | null>(null);

  const [isConnected, setIsConnected] = useState(false);

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
    {
      name: '회고 상세',
      path: `/team/${teamId}/retro/${retroId}`,
      clickable: true,
    },
  ];

  useEffect(() => {
    if (!retroId || !accessToken) return;

    if (!client.current) {
      client.current = new Client({
        reconnectDelay: 0,
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
        close();
      }
    };
  }, [accessToken, retroId]);

  return (
    <ErrorBoundary
      title="회고 페이지 로딩 실패"
      description="회고 정보를 불러오는 중 문제가 발생했습니다."
      onRetry={() => window.location.reload()}
    >
      <Wrapper>
        <Head>
          <Breadcrumbs paths={paths} />
          <Suspense fallback={<RetroInfoSkeleton />}>
            <RetroInfoWrapper client={client.current} isConnected={isConnected} />
          </Suspense>
        </Head>
        <Content>
          <Suspense fallback={<SkeletonKeepWrapper />}>
            <KeepWrapper retroId={retroId as string} client={client.current} />
          </Suspense>
          <Suspense fallback={<SkeletonProblemWrapper />}>
            <ProblemWrapper retroId={retroId as string} client={client.current} />
          </Suspense>
        </Content>
        <SidePanel />
      </Wrapper>
    </ErrorBoundary>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  overflow: auto;
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
  gap: 40px;
  flex-grow: 1;
`;

RetroPage.displayName = 'RetroPage';

export default RetroPage;
