import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import PageSubTitle from '@/components/common/ui/title/PageSubTitle';
import PageTitle from '@/components/common/ui/title/PageTitle';
import HeaderLayout from '@/components/layout/HeaderLayout';
import styled from 'styled-components';
import ControlBox from './ControlBox';
import TeamCardList, { TeamCardListProps } from './TeamCardList';

const MOCK_TEAM_LIST: TeamCardListProps['teamList'] = [
  {
    tag: 'SQUAD',
    name: 'Squad 1',
    description: 'Squad 1 Description',
    members: [
      {
        nickname: '김코딩',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '박디자인',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '이프로덕트',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '최매니저',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '정마케터',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '홍개발',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '김디자인',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '박프로덕트',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '이매니저',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '최마케터',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '정개발',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '홍디자인',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '김프로덕트',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '박매니저',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '이마케터',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '최개발',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
    ],
  },
  {
    tag: 'FEATURE',
    name: 'Feature 1',
    description: 'Feature 1 Description',
    members: [
      {
        nickname: '김코딩',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '박디자인',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '이프로덕트',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '최매니저',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '정마케터',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
    ],
  },
  {
    tag: 'SQUAD',
    name: 'Squad 2',
    description: 'Squad 2 Description',
    members: [
      {
        nickname: '김코딩',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '박디자인',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '이프로덕트',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '최매니저',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '정마케터',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
    ],
  },
  {
    tag: 'FEATURE',
    name: 'Feature 2',
    description: 'Feature 2 Description',
    members: [
      {
        nickname: '김코딩',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
      {
        nickname: '박디자인',
        image: 'https://avatars.githubusercontent.com/u/59657431?v=4',
      },
    ],
  },
];

const Team = () => {
  const paths = {
    '팀 목록': '/team',
  };
  return (
    <HeaderLayout>
      <Content>
        <Head>
          <TitleBox>
            <Breadcrumbs paths={paths} />
            <PageTitle title="Team" />
            <PageSubTitle first="총" point="5" last="개">
              <ControlBox />
            </PageSubTitle>
          </TitleBox>
        </Head>
        <TeamCardList teamList={MOCK_TEAM_LIST} />
      </Content>
    </HeaderLayout>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-top: 24px;
`;
const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
Team.displayName = 'Team';

export default Team;
