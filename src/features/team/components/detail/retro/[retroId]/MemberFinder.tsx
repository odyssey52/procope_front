'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { IconSearch } from '@/shared/assets/icons/line';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import useDebounce from '@/shared/hooks/useDebounce';
import { zIndex } from '@/shared/styles/mixin';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import { filterByHangulSearch } from '@/shared/utils/hangulSearch';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import MemberFinderItem from './MemberFinderItem';

interface MemberFinderProps {
  teamId: string;
  retroId: string;
  onClose: () => void;
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

const MemberFinder = ({ teamId, retroId, onClose }: MemberFinderProps) => {
  const [keyword, setKeyword] = useState('');
  const { data: userList } = useQuery({
    ...retroQueries.readRetroMemberList({ teamId, retroId }),
    enabled: !!teamId,
  });

  const debouncedKeyword = useDebounce(keyword, 300);
  const ref = useClickOutside<HTMLDivElement>(onClose);

  const filteredUserList = filterByHangulSearch(userList?.payload || [], debouncedKeyword, (user) => user.name);

  return (
    <Wrapper ref={ref}>
      <Placeholder
        value={keyword}
        valueHandler={setKeyword}
        placeholder="멤버 검색"
        leftIcon={<IconSearch size={20} />}
      />
      {filteredUserList.length > 0 && (
        <Content>
          {filteredUserList.map((user) => (
            <MemberFinderItem key={`MemberFinderItem-${user.userId}`} user={user} teamId={teamId} retroId={retroId} />
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

  ${zIndex.layer3};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

MemberFinder.displayName = 'MemberFinder';

export default MemberFinder;
