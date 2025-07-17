'use client';

import { ReadRetroResponse } from '@/features/team/services/retroService.type';
import { IconCalendar } from '@/shared/assets/icons/line';
import Avatar from '@/shared/ui/avatar/Avatar';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import Button from '@/shared/ui/button/Button';
import MoreButton from '@/shared/ui/button/MoreButton';
import TextButton from '@/shared/ui/button/TextButton';
import CalendarModal from '@/shared/ui/calendar/CalendarModal';
import Text from '@/shared/ui/Text';
import PageTitle from '@/shared/ui/title/PageTitle';
import { formatDateToDot } from '@/shared/utils/date';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import MemberFinder from './MemberFinder';

interface RetroInfoWrapperProps {
  data: ReadRetroResponse;
}

const RetroInfoWrapper = ({ data }: RetroInfoWrapperProps) => {
  const params = useParams();
  const teamId = params.teamId as string;

  const [currentTitle, setCurrentTitle] = useState<string>(data.title ?? '');
  const [isMemberListOpen, setIsMemberListOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(formatDateToDot(data.createdAt));

  const handleMemberListOpen = () => {
    setIsMemberListOpen(!isMemberListOpen);
  };

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
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
          {isMemberListOpen && <MemberFinder teamId={teamId} onClose={handleMemberListOpen} />}
          <MoreButton size={40} />
        </MemberWrapper>
      </TitleWrapper>
      <DetailInfoWrapper>
        <CreatorWrapper>
          <Text variant="body_16_medium" color="tertiary">
            만든 사람
          </Text>
          <TextButton
            $type="24"
            leftIcon={<Avatar size={24} image={data.createUserInfo.profileImageUrl} />}
            $clickable={false}
          >
            {data.createUserInfo.name}
          </TextButton>
        </CreatorWrapper>
        <DateWrapper>
          <Text variant="body_16_medium" color="tertiary">
            회고 날짜
          </Text>
          <TextButton $type="24" rightIcon={<IconCalendar />} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
            {selectedDate}
          </TextButton>
          {isCalendarOpen && (
            <CalendarModal
              isOpen={isCalendarOpen}
              selectedDate={selectedDate}
              onSelect={handleSelectDate}
              onClose={closeCalendar}
            />
          )}
        </DateWrapper>
      </DetailInfoWrapper>
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
  gap: 16px;
`;

const MemberWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  align-items: center;
`;

const DetailInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const CreatorWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const DateWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`;

RetroInfoWrapper.displayName = 'RetroInfoWrapper';

export default RetroInfoWrapper;
