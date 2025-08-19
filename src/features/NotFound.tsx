'use clinet';

import Error from '@/shared/ui/error/Error';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <Error title="페이지를 찾을 수 없습니다!" description="잘못된 경로에 접근했습니다." />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 4px;
`;

NotFound.displayName = 'NotFound';

export default NotFound;
