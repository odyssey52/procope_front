'use client';

import Placeholder from '@/shared/ui/placeholder/Placeholder';
import SelectOption from '@/shared/ui/select/SelectOption';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import teamQueries from '@/features/team/query/teamQueries';
import { useState } from 'react';
import { IconSearch } from '@/shared/assets/icons/line';
import Toggle from '@/shared/ui/toggle/Toggle';

interface MemberFinderProps {
  teamId: string;
}

const MOCK_USER_LIST = [
  {
    id: '1',
    name: '홍길동',
    profileImage: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: '홍길동',
    profileImage: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: '홍길동',
    profileImage: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: '홍길동',
    profileImage: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    name: '홍길동',
    profileImage: 'https://via.placeholder.com/150',
  },
];
const MemberFinder = ({ teamId }: MemberFinderProps) => {
  const [keyword, setKeyword] = useState('');
  // TODO : 프로필 이미지 추가되어야함
  const { data: userList } = useQuery({
    ...teamQueries.readTeamUser({ teamId }),
    enabled: !!teamId,
  });
  return (
    <Wrapper>
      <Placeholder value={keyword} valueHandler={setKeyword} placeholder="멤버 검색" leftIcon={<IconSearch />} />
      <Content>
        {MOCK_USER_LIST.map((user) => (
          <SelectOption
            key={user.id}
            value={user.name}
            valueHandler={() => {}}
            width="100%"
            rightContent={<Toggle />}
          />
        ))}
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
