'use client';

import Placeholder from '@/shared/ui/placeholder/Placeholder';
import SelectOption from '@/shared/ui/select/SelectOption';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import teamQueries from '@/features/team/query/teamQueries';

interface MemberFinderProps {
  teamId: string;
}

const MemberFinder = ({ teamId }: MemberFinderProps) => {
  const { data: userList } = useQuery({
    ...teamQueries.readTeamUser({ teamId }),
    enabled: !!teamId,
  });
  console.log(userList);
  return (
    <Wrapper>
      <Placeholder value="" valueHandler={() => {}} placeholder="팀원 이름을 입력해 주세요" />
      <Content>
        <SelectOption value="팀원 이름" valueHandler={() => {}} />
      </Content>
      {/* TODO :selectoption 들어가야 하는데 컴포넌트 호환이 안될 것 같음 */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  padding: 12px;
  border-radius: 12px;
  width: 380px;
  gap: 8px;

  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

MemberFinder.displayName = 'MemberFinder';

export default MemberFinder;
