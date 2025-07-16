'use client';

import Placeholder from '@/shared/ui/placeholder/Placeholder';
import styled from 'styled-components';

const MemberFinder = () => {
  return (
    <Wrapper>
      <Placeholder value="" valueHandler={() => {}} placeholder="팀원 이름을 입력해 주세요" />
      {/* TODO :selectoption 들어가야 하는데 컴포넌트 호환이 안될 것 같음 */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  padding: 12px;
  border-radius: 12px;
  width: 380px;
  gap: 8px;

  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;

MemberFinder.displayName = 'MemberFinder';

export default MemberFinder;
