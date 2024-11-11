import { IconHome } from '@/assets/icons/line';
import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import Container from '@/components/common/ui/Container';
import Empty from '@/components/common/ui/empty/Empty';
import Tab from '@/components/common/ui/tab/Tab';
import PageSubTitle from '@/components/common/ui/title/PageSubTitle';
import PageTitle from '@/components/common/ui/title/PageTitle';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/navigation';
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
const EMPTY_LIST: TeamCardListProps['teamList'] = [];

const EMPTY_TITLE = '참여 중인 팀이 없습니다.';
const EMPTY_DESCRIPTION = '팀을 생성하거나 다른 생성자에게 초대받으세요';

const Team = () => {
  const router = useRouter();
  const paths = {
    '팀 목록': '/team',
  };
  return (
    <HeaderLayout>
      <TeamContainer>
        <Content>
          <Head>
            <TitleBox>
              <Breadcrumbs paths={paths} />
              <PageTitle title="Team" />
              <PageSubTitle first="총" point={`${EMPTY_LIST.length}`} last="개">
                <ControlBox />
              </PageSubTitle>
            </TitleBox>
          </Head>
          {EMPTY_LIST.length === 0 && (
            <EmptyBox>
              <Empty title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} onClick={() => router.push('/team/create')} />
            </EmptyBox>
          )}
          {EMPTY_LIST.length > 0 && <TeamCardList teamList={EMPTY_LIST} />}
          <Tab selected leftIcon={<IconHome color={theme.sementicColors.text.brand} />} text="홈" />
        </Content>
      </TeamContainer>
    </HeaderLayout>
  );
};

const TeamContainer = styled(Container)`
  flex-grow: 1;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  max-width: 924px;
`;
const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
Team.displayName = 'Team';

export default Team;
