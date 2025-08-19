'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { IconSearch } from '@/shared/assets/icons/line';
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
}

const MemberFinder = ({ teamId, retroId }: MemberFinderProps) => {
  const { data: userList } = useQuery({
    ...retroQueries.readRetroMemberList({ teamId, retroId }),
    enabled: !!teamId,
  });

  const [keyword, setKeyword] = useState('');

  const debouncedKeyword = useDebounce(keyword, 300);

  const filteredUserList = filterByHangulSearch(userList?.payload || [], debouncedKeyword, (user) => user.name);

  return (
    <Wrapper>
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

  ${zIndex.layer2};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

MemberFinder.displayName = 'MemberFinder';

export default MemberFinder;
