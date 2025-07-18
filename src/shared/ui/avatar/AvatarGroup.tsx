import styled, { css } from 'styled-components';
import Avatar from './Avatar';

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
      {extraAvatarsCount > 0 && <ExtraAvatarWrapper $size={size}>+{extraAvatarsCount}</ExtraAvatarWrapper>}
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

const ExtraAvatarWrapper = styled.div<{ $size?: 16 | 24 | 32 | 48 }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  color: ${({ theme }) => theme.sementicColors.text.primary};
  ${({ theme }) => theme.fontStyle.body_16_medium};
  ${({ $size }) => {
    switch ($size) {
      case 16:
        return css`
          ${({ theme }) => theme.fontStyle.caption_10_regular};
        `;
      case 24:
        return css`
          ${({ theme }) => theme.fontStyle.body_14_medium};
        `;
      case 32:
        return css`
          ${({ theme }) => theme.fontStyle.body_16_medium};
        `;
      case 48:
        return css`
          ${({ theme }) => theme.fontStyle.heading_20};
        `;
      default:
        return css`
          ${({ theme }) => theme.fontStyle.body_16_medium};
        `;
    }
  }};
  margin-left: ${({ $size }) => getMarginLeft($size)};
`;

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
