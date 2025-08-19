'use client';

import Error from '@/shared/ui/error/Error';
import styled from 'styled-components';

const page = () => {
  return (
    <Wrapper>
      <Error title="준비 중" description="추후 업데이트 예정입니다." />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

page.displayName = 'page';

export default page;
