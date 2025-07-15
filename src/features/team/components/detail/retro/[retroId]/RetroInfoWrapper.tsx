'use client';

import { ReadRetroResponse } from '@/features/team/services/retroService.type';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import Button from '@/shared/ui/button/Button';
import MoreButton from '@/shared/ui/button/MoreButton';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useState } from 'react';
import styled from 'styled-components';

interface RetroInfoWrapperProps {
  data: ReadRetroResponse;
}

const RetroInfoWrapper = ({ data }: RetroInfoWrapperProps) => {
  const [currentTitle, setCurrentTitle] = useState<string>(data.title ?? '');
  const [isMemberListOpen, setIsMemberListOpen] = useState(false);

  const handleMemberListOpen = () => {
    setIsMemberListOpen(!isMemberListOpen);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <PageTitle title={currentTitle} setTitle={setCurrentTitle} placeholder="제목을 작성해 주세요" />
        <MemberWrapper>
          <AvatarGroup
            profileList={data.joinUserInfos.map((user) => ({
              nickname: user.name,
              image: user.profileImageUrl,
              isOnline: true,
            }))}
            size={32}
          />
          <Button $type="outline" pressed={isMemberListOpen} onClick={handleMemberListOpen}>
            Member
          </Button>
          <MoreButton size={40} />
        </MemberWrapper>
      </TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MemberWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

RetroInfoWrapper.displayName = 'RetroInfoWrapper';

export default RetroInfoWrapper;
