'use client';

import TagJob from '@/components/common/ui/tag/TagJob';
import styled from 'styled-components';

const mock = {
  role: 'development',
  title: '팀 내부 소통을 하는데 프로코프와 슬랙을 잘 활용하여 업무 소통이 원활하게 이루어지고 있는 것 같아 좋습니다.',
  content:
    '팀 내부 소통방식을 정하고 있는 과정입니다. 시행착오가 많이 있었지만 이제는 프로코프와 슬랙으로 잘 정착한 것 같습니다. 앞으로 프로코프와 슬랙을 유기적으로 결합하여 효율적인 커뮤니케이션 환경을 조성하고 싶습니다.',
  user: {
    nickname: '강보민은바보',
    profileImage: 'https://avatars.githubusercontent.com/u/77449865?v=4',
  },
  totalComments: 2,
};
const page = () => {
  return (
    <PlayGround>
      <TagJob type="development" />
    </PlayGround>
  );
};

const PlayGround = styled.div`
  min-height: 100vh;
  padding: 2%;
`;
page.displayName = 'page';

export default page;
