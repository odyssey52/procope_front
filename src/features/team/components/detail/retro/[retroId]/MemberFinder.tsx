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
  // TODO : 프로필 이미지 추가되어야함
  const { data: userList } = useQuery({
    ...teamQueries.readTeamUser({ teamId }),
    enabled: !!teamId,
  });
  return (
    <Wrapper>
      <Placeholder value="" valueHandler={() => {}} placeholder="팀원 이름을 입력해 주세요" />
      <Content>
        <SelectOption value="홍길동" valueHandler={() => {}} />
        <SelectOption value="홍길동" valueHandler={() => {}} />
        <SelectOption value="홍길동" valueHandler={() => {}} />
        <SelectOption value="홍길동" valueHandler={() => {}} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 8px);
  right: 0;
  padding: 12px;
  border-radius: 12px;
  width: 380px;
  gap: 8px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  box-shadow:
    0px 2px 4px 0px rgba(0, 0, 0, 0.16),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

MemberFinder.displayName = 'MemberFinder';

export default MemberFinder;
