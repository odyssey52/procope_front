'use client';

import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import BoxSkeleton from '@/shared/ui/skeleton/BoxSkeleton';
import TextSkeleton from '@/shared/ui/skeleton/TextSkeleton';
import styled from 'styled-components';

const SkeletonMemberPage = () => {
  const path = [
    { name: '팀 관리', path: '/team' },
    { name: '참여관리', path: '/team/no-id/manage/member', clickable: false },
  ];

  return (
    <Wrapper>
      <Container>
        <TopSection>
          <Head>
            <Breadcrumbs paths={path} />
            <TextSkeleton width="110px" height={34} />
          </Head>
          <TextSkeleton width="25%" height={24} />
        </TopSection>
        <BottomSection>
          <Team>
            <TeamInfo>
              <BoxSkeleton width="80px" height="80px" borderRadius={40} color="tertiary_hover_pressed" />
              <TeamText>
                <TextSkeleton width="10%" height={24} color="tertiary_hover_pressed" />
                <TextSkeleton width="50%" height={20} color="tertiary_hover_pressed" />
              </TeamText>
            </TeamInfo>
          </Team>
        </BottomSection>
        <MemberListSkeleton>
          <PageSubTitleWrapper>
            <TextSkeleton width="10%" height={24} color="tertiary" />
          </PageSubTitleWrapper>
          <BoxSkeleton width="100%" height="50px" color="tertiary" />
        </MemberListSkeleton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  padding: 24px;
  margin: 24px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex-grow: 1;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Team = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
  gap: 32px;
`;
const TeamInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;
const TeamText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`;
const MemberListSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PageSubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

SkeletonMemberPage.displayName = 'SkeletonMemberPage';

export default SkeletonMemberPage;
