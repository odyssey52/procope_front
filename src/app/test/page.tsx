'use client';

import { IconCheckMarkRectangle } from '@/shared/assets/icons/line';
import useAuthStore from '@/shared/store/auth/auth';
import Button from '@/shared/ui/button/Button';
import Calendar from '@/shared/ui/calendar/Calendar';
import RetroCard from '@/shared/ui/card/RetroCard';
import TaskCard from '@/shared/ui/card/TaskCard';
import SegmentedTabs from '@/shared/ui/tab/SegmentedTabs';
import Tab2 from '@/shared/ui/tab/Tab2';
import { JobType } from '@/shared/ui/tag/TagJob';
import Toggle from '@/shared/ui/toggle/Toggle';
import { CompatClient } from '@stomp/stompjs';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import styled from 'styled-components';

interface Mock {
  role: JobType;
  title: string;
  content: string;
  user: {
    nickname: string;
    profileImage: string;
  };
  totalComments: number;
}
const mock: Mock = {
  role: '개발',
  title: '팀 내부 소통을 하는데 프로코프와 슬랙을 잘 활용하여 업무 소통이 원활하게 이루어지고 있는 것 같아 좋습니다.',
  content: `
            <p>
              팀 내부 소통방식을 정하고 있는 과정입니다.
            </p>
            <p>
              시행착오가 많이 있었지만 이제는 프로코프와 슬랙으로 잘 정착한 것 같습니다.
            </p>
            <p>
              앞으로 프로코프와 슬랙을 유기적으로 결합하여 효율적인 커뮤니케이션 환경을 조성하고 싶습니다.
            </p>
          `,
  user: {
    nickname: '사용자1',
    profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
  },
  totalComments: 2,
};

// 태그 데이터 예시
const tagData = [{ id: 1, leftIcon: <IconCheckMarkRectangle />, label: 'PBM1' }];

const page = () => {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // STOMP 웹소켓 관련 상태
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [testMessage, setTestMessage] = useState('');
  const { accessToken } = useAuthStore();
  const client = useRef<CompatClient | null>(null);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <PlayGround>
      <Button
        onClick={() => {
          router.push('/login');
        }}
      >
        login
      </Button>
      <Button
        onClick={() => {
          router.push('/interceptor');
        }}
      >
        interceptor
      </Button>
      <SegmentedTabs
        tabs={[
          { title: 'Tab1', href: '/test?v=1' },
          { title: 'Tab2', href: '/test?v=2' },
          { title: 'Tab3', href: '/test?v=3' },
        ]}
      />

      {/* STOMP 웹소켓 테스트 섹션 */}
      <WebSocketSection>
        <h2>STOMP 웹소켓 테스트</h2>
        <ConnectionStatus>
          <StatusIndicator connected={isConnected.toString()} />
          <span>연결 상태: {isConnected ? '연결됨' : '연결 안됨'}</span>
        </ConnectionStatus>

        <MessageLog>
          <h3>메시지 로그</h3>
          <LogContainer>
            {messages.map((msg, index) => (
              <LogItem key={index}>{msg}</LogItem>
            ))}
            {messages.length === 0 && <LogItem style={{ color: '#999' }}>메시지가 없습니다.</LogItem>}
          </LogContainer>
        </MessageLog>
      </WebSocketSection>

      <Toggle label="토글" checked={isToggleChecked} onClick={() => setIsToggleChecked(!isToggleChecked)} />
      <Tab2 name="탭1" selected />
      <Tab2 name="탭1" />
      <ButtonWrapper>
        <button type="button" onClick={handleOpenCalendar}>
          {selectedDate || '날짜 선택'}
        </button>
        <Calendar selectedDate={selectedDate} onChange={handleDateSelect} />
      </ButtonWrapper>
      <Content>
        <TaskCard
          tagJob="개발"
          title="타이틀"
          startDate="2025-01-01"
          user={mock.user}
          // totalComments={mock.totalComments}
          // hasComments
        />
      </Content>
      <Content>
        <RetroCard item={mock} />
        <RetroCard item={mock} />
      </Content>
    </PlayGround>
  );
};

const PlayGround = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2%;
  gap: 20px;
`;

const WebSocketSection = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;

  h2 {
    margin-top: 0;
    margin-bottom: 16px;
    color: #333;
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 8px;
    color: #555;
  }
`;

const ConnectionStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-weight: 500;
`;

const StatusIndicator = styled.div<{ connected: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.connected === 'true' ? '#44aa44' : '#ff4444')};
`;

const ButtonGroup = styled.div`
  margin-bottom: 16px;
`;

const MessageSection = styled.div`
  margin-bottom: 16px;
`;

const MessageInput = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const MessageLog = styled.div`
  margin-top: 16px;
`;

const LogContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  padding: 8px;
`;

const LogItem = styled.div`
  padding: 4px 0;
  font-size: 14px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
`;

page.displayName = 'page';

export default page;
