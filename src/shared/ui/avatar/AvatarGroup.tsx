import styled, { css } from 'styled-components';
import Avatar from './Avatar';
import AvatarIndicator from '../indicator/AvatarIndicator';

interface AvatarGroupProps {
  profileList: {
    nickname?: string;
    image?: string;
    isOnline?: boolean;
  }[];
  size?: 16 | 24 | 32 | 48;
}

const AvatarGroup = ({ profileList, size = 32 }: AvatarGroupProps) => {
  const maxVisibleAvatars = 6;
  const visibleAvatars = profileList.slice(0, maxVisibleAvatars);
  const extraAvatarsCount = profileList.length - maxVisibleAvatars;

  return (
    <Wrapper>
      {visibleAvatars.map((profile, index) => (
        <AvatarWrapper key={`visibleAvatars${index}`} $size={size} $index={index}>
          <Avatar nickname={profile.nickname} image={profile.image} size={size} isOnline={profile.isOnline} />
        </AvatarWrapper>
      ))}
      {extraAvatarsCount > 0 && <AvatarIndicator count={extraAvatarsCount} size={size} />}
    </Wrapper>
  );
};

const getMarginLeft = (size?: number) => {
  switch (size) {
    case 16:
      return '-4px';
    case 24:
      return '-8px';
    case 48:
      return '-12px';
    default:
      return '-10px';
  }
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
`;

const AvatarWrapper = styled.div<{ $size?: 16 | 24 | 32 | 48; $index: number }>`
  position: relative;
  ${({ $size, $index }) =>
    $index > 0 &&
    css`
      margin-left: ${getMarginLeft($size)};
    `}
`;

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
