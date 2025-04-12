'use client';

import RetroCard from '@/shared/ui/card/RetroCard';
import TaskCard from '@/shared/ui/card/TaskCard';
import Tag from '@/shared/ui/tag/Tag';
import Link from 'next/link';
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
const tagData = [
  { id: 1, label: '태그1', color: 'blue' },
  { id: 2, label: '태그2', color: 'green' },
];

const page = () => {
  return (
    <PlayGround>
      <Content>
        <Link href="/login">로그인</Link>
        <TaskCard
          tags={tagData}
          title="타이틀"
          startDate="2025-01-01"
          endDate="2025-01-01"
          user={mock.user}
          totalComments={mock.totalComments}
        />
        <RetroCard item={mock} />
        <RetroCard item={mock} />
      </Content>
    </PlayGround>
  );
};

const PlayGround = styled.div`
  min-height: 100vh;
  padding: 2%;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
`;
page.displayName = 'page';

export default page;
