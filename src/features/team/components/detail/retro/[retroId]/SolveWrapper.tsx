'use client';

import PageTitle from '@/shared/ui/title/PageTitle';
import styled from 'styled-components';

const SolveWrapper = () => {
  return (
    <Wrapper>
      <Head>
        <PageTitle title="개선 방안" placeholder="제목을 작성해 주세요" />
      </Head>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

SolveWrapper.displayName = 'SolveWrapper';

export default SolveWrapper;
