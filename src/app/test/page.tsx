'use client';

import RetroCard from '@/shared/ui/card/RetroCard';
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
const page = () => {
  return (
    <PlayGround>
      <Content>
        <Link href="/login">로그인</Link>
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
