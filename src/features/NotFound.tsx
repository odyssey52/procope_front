'use clinet';

import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <div>페이지를 찾을 수 없습니다!</div>
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
