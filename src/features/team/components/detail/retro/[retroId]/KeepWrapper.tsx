'use client';

import Button from '@/shared/ui/button/Button';
import ErrorBoundary from '@/shared/ui/errorboundary/ErrorBoundary';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import styled from 'styled-components';

const KeepWrapper = () => {
  return (
    <Wrapper>
      <PageSubTitle first="Q1. 좋았던 점은 무엇인가요?">
        <SubTitleRightBox>
          <MoreIndicator count={10} type="transparent" />
          <Button $type="secondary">추가</Button>
        </SubTitleRightBox>
      </PageSubTitle>
      <ErrorBoundary title="회고 내용 로딩 실패" description="회고 내용을 불러오는 중 문제가 발생했습니다.">
        <></>
        {/* {data?.team && data.team.length > 0 && <TeamCardList teamList={data.team} />} */}
      </ErrorBoundary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SubTitleRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-grow: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

KeepWrapper.displayName = 'KeepWrapper';

export default KeepWrapper;
