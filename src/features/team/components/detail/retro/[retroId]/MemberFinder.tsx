'use client';

import teamQueries from '@/features/team/query/teamQueries';
import { IconSearch } from '@/shared/assets/icons/line';
import useDebounce from '@/shared/hooks/useDebounce';
import Avatar from '@/shared/ui/avatar/Avatar';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import SelectOption from '@/shared/ui/select/SelectOption';
import Toggle from '@/shared/ui/toggle/Toggle';
import { filterByHangulSearch } from '@/shared/utils/hangulSearch';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

interface MemberFinderProps {
  teamId: string;
}

const MOCK_USER_LIST = [
  {
    id: '1',
    name: '홍길동',
    profileImage: '/assets/icons/graphic/profile/photo01.svg',
    join: true,
  },
  {
    id: '2',
    name: '김철수',
    profileImage: '/assets/icons/graphic/profile/photo02.svg',
    join: true,
  },
  {
    id: '3',
    name: '이영희',
    profileImage: '/assets/icons/graphic/profile/photo03.svg',
    join: true,
  },
  {
    id: '4',
    name: '김보경',
    profileImage: '/assets/icons/graphic/profile/photo04.svg',
    join: false,
  },
  {
    id: '5',
    name: '이수민',
    profileImage: '/assets/icons/graphic/profile/photo05.svg',
    join: false,
  },
];

const MemberFinder = ({ teamId }: MemberFinderProps) => {
  const [keyword, setKeyword] = useState('');
  const { data: userList } = useQuery({
    ...teamQueries.readTeamUser({ teamId }),
    enabled: !!teamId,
  });

  const debouncedKeyword = useDebounce(keyword, 300);

  const filteredUserList = filterByHangulSearch(MOCK_USER_LIST, debouncedKeyword, (user) => user.name);

  return (
    <Wrapper>
      <Placeholder value={keyword} valueHandler={setKeyword} placeholder="멤버 검색" leftIcon={<IconSearch />} />
      {filteredUserList.length > 0 && (
        <Content>
          {filteredUserList.map((user) => (
            <SelectOption
              key={user.id}
              value={user.name}
              valueHandler={() => {}}
              width="100%"
              leftContent={<Avatar image={user.profileImage} size={32} />}
              rightContent={
                <Toggle
                  onClick={() => {
                    console.log('해당 유저 초대 토글 클릭');
                  }}
                  checked={user.join}
                />
              }
            />
          ))}
        </Content>
      )}
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
  gap: 2px;
`;

MemberFinder.displayName = 'MemberFinder';

export default MemberFinder;
