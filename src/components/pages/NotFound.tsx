'use clinet';

import { useState } from 'react';
import styled from 'styled-components';
import Radio from '../common/ui/radio/Radio';

const NotFound = () => {
  const [state, setState] = useState('id1');

  const handleChange = (id: string) => {
    setState(id);
  };

  return (
    <Wrapper>
      <Radio
        description="description"
        name="라디오그룹"
        id="id1"
        label="응애"
        onChange={handleChange}
        disabled
        checked={state === 'id1'}
      />
      <Radio
        description="description"
        name="라디오그룹"
        id="id2"
        label="응애1"
        onChange={handleChange}
        checked={state === 'id2'}
      />
      <Radio
        description="description"
        name="라디오그룹"
        id="id3"
        label="응애2"
        onChange={handleChange}
        checked={state === 'id3'}
      />
      <Radio
        description="description"
        name="라디오그룹"
        id="id4"
        label="응애3"
        onChange={handleChange}
        checked={state === 'id4'}
      />
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
