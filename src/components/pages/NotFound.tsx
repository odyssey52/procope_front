'use clinet';

import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../common/ui/checkbox/Checkbox';

const NotFound = () => {
  const [state, setState] = useState(false);
  return (
    <Wrapper>
      <Checkbox size={20} onClick={() => setState((prev) => !prev)} checked={state} label="스위치 텍스트" />
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
