'use client';

import { IconCheckMarkRectangle } from '@/shared/assets/icons/line';
import CalendarModal from '@/shared/ui/calendar/CalendarModal';
import RetroCard from '@/shared/ui/card/RetroCard';
import TaskCard from '@/shared/ui/card/TaskCard';
import Tab2 from '@/shared/ui/tab/Tab2';
import SegmentedTabs from '@/shared/ui/tab/SegmentedTabs';
import Toggle from '@/shared/ui/toggle/Toggle';
import { useState, useRef } from 'react';
import styled from 'styled-components';

interface Mock {
  role: 'development' | 'planning' | 'data' | 'design' | 'marketing' | 'sales' | 'operations';
  title: string;
  content: string;
  user: {
    nickname: string;
    profileImage: string;
  };
  totalComments: number;
}
const mock: Mock = {
  role: 'development',
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
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <PlayGround>
      <SegmentedTabs
        tabs={[
          { title: 'Tab1', href: '/test?v=1' },
          { title: 'Tab2', href: '/test?v=2' },
          { title: 'Tab3', href: '/test?v=3' },
        ]}
      />
      <Toggle label="토글" checked={isToggleChecked} onClick={() => setIsToggleChecked(!isToggleChecked)} />
      <Tab2 name="탭1" selected />
      <Tab2 name="탭1" />
      <ButtonWrapper>
        <button type="button" ref={buttonRef} onClick={handleOpenCalendar}>
          {selectedDate || '날짜 선택'}
        </button>
        <CalendarModal
          isOpen={isCalendarOpen}
          selectedDate={selectedDate}
          onSelect={handleDateSelect}
          onClose={() => setIsCalendarOpen(false)}
          buttonRef={buttonRef}
        />
      </ButtonWrapper>
      <Content>
        <TaskCard
          tags={tagData}
          tagJob="development"
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

const ButtonWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
`;

page.displayName = 'page';

export default page;
