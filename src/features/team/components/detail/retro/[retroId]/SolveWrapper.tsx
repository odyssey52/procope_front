'use client';

import { RetroProblemSolutionListItem } from '@/features/team/services/retroService.type';
import { IconSend } from '@/shared/assets/icons/line';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { useState } from 'react';
import styled from 'styled-components';

const SolveWrapper = ({ comments }: { comments: RetroProblemSolutionListItem[] }) => {
  const [title, setTitle] = useState('');
  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="개선방안">
          <MoreIndicator count={comments?.length} type="transparent" />
        </PageSubTitle>
      </Head>
      <InputWrapper>
        <Placeholder
          value={title}
          valueHandler={setTitle}
          placeholder="개선방안 작성하기"
          rightIcon={<IconSend size={20} />}
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  margin-top: 16px;
`;

SolveWrapper.displayName = 'SolveWrapper';

export default SolveWrapper;
