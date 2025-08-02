'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { ReadRetroResponse } from '@/features/team/services/retroService.type';
import useAuthStore from '@/shared/store/auth/auth';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import { Client, CompatClient, Stomp } from '@stomp/stompjs';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import styled from 'styled-components';
import KeepWrapper from './KeepWrapper';
import RetroInfoSkeleton from './RetroInfoSkeleton';
import RetroInfoWrapper from './RetroInfoWrapper';

const RetroPage = () => {
  const { accessToken } = useAuthStore();
  const client = useRef<Client | null>(null);

  const [isConnected, setIsConnected] = useState(false);
  const params = useParams();
  const { retroId, teamId } = params;
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

  const { data, isSuccess, isLoading } = useQuery({
    ...retroQueries.readRetro({ teamId: teamId as string, retroId: retroId as string }),
  });

  // 이전 connectHandler 함수를 useEffect 내부 로직으로 통합
  useEffect(() => {
    // 필수 의존성인 retroId와 accessToken이 모두 있을 때만 연결 시도
    if (!retroId || !accessToken) return;

    // useRef에 클라이언트 인스턴스가 없으면 새로 생성
    if (!client.current) {
      client.current = new Client({
        // webSocketFactory를 사용하여 SockJS 인스턴스 생성 및 반환
        // Stomp.over did not receive a factory 경고를 해결
        webSocketFactory: () => {
          // 로그에서 Connection closed to .../api/websocket 으로 보였으므로 URL을 /api/websocket으로 수정
          // 백엔드 엔드포인트를 다시 확인하고 필요에 따라 URL을 수정해야 함
          return new SockJS(`https://dev-core-api.procope.kr/websocket?token=${accessToken}&retroId=${retroId}`);
        },
        // 연결 성공 시 콜백
        onConnect: () => {
          console.log('✅ STOMP 연결 성공');
          setIsConnected(true);

          client.current?.subscribe(`/topic/${retroId}`, (message) => {
            console.log('📨 메시지 수신:', message.body);
          });
        },
        // STOMP 프로토콜 에러 처리 (프레임 단위)
        onStompError: (frame) => {
          console.error('❌ STOMP 에러:', frame);
          setIsConnected(false);
        },
        // WebSocket 연결 에러 처리
        onWebSocketError: (event) => {
          console.error('❌ WebSocket 에러:', event);
          setIsConnected(false);
        },
        // 디버깅 활성화
        debug: (str) => {
          console.log('STOMP Debug:', str);
        },
      });
    }

    // 클라이언트 활성화 (연결 시작)
    client.current.activate();

    // 컴포넌트 언마운트 시 또는 의존성 배열의 값이 변경될 때 연결 해제
    return () => {
      if (client.current && client.current.active) {
        client.current.deactivate();
        client.current = null;
      }
    };
    // accessToken, retroId가 변경될 때마다 useEffect가 다시 실행되어 재연결을 시도
  }, [accessToken, retroId]);

  return (
    <Wrapper>
      <Head>
        <Breadcrumbs paths={paths} />
        {isLoading ? <RetroInfoSkeleton /> : <RetroInfoWrapper data={data as ReadRetroResponse} />}
      </Head>
      <Content>
        <KeepWrapper retroId={retroId as string} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin: 24px 0;
  padding: 24px 0;
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
`;

RetroPage.displayName = 'RetroPage';

export default RetroPage;
