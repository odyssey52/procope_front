import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import PageTitle from '@/shared/ui/title/PageTitle';
import styled, { keyframes } from 'styled-components';
import ControlBox from './ControlBox';

const PATH = [
  {
    name: '팀 목록',
    path: '/team',
    clickable: true,
  },
];

function SkeletonTeamContents() {
  return (
    <Content>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={PATH} />
          <PageTitle title="Team" />
          <PageSubTitle first="총" point="0" last="개">
            <ControlBox />
          </PageSubTitle>
        </TitleBox>
      </Head>
      <SkeletonContainer>
        {[1, 2, 3].map((index) => (
          <SkeletonCard key={index}>
            <SkeletonTag />
            <SkeletonTitle />
            <SkeletonDescription />
            <SkeletonMemberList>
              {[1, 2, 3].map((memberIndex) => (
                <SkeletonMember key={memberIndex} />
              ))}
            </SkeletonMemberList>
          </SkeletonCard>
        ))}
      </SkeletonContainer>
    </Content>
  );
}

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 24px 0;
`;

const skeletonAnimation = keyframes`
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  `;

const SkeletonCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.2s ease-in-out infinite;
`;

const SkeletonTag = styled(SkeletonBase)`
  width: 60px;
  height: 24px;
  border-radius: 4px;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 80%;
  height: 28px;
  border-radius: 4px;
`;

const SkeletonDescription = styled(SkeletonBase)`
  width: 100%;
  height: 20px;
  border-radius: 4px;
`;

const SkeletonMemberList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const SkeletonMember = styled(SkeletonBase)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
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

SkeletonTeamContents.displayName = 'SkeletonTeamContents';
export default SkeletonTeamContents;
