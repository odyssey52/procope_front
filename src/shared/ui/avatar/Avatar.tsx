import styled, { css } from 'styled-components';

interface AvatarProps {
  type?: 'initial' | 'profile';
  size?: number; // default 32
  nickname?: string;
  image?: string;
  onClick?: () => void;
  isOnline?: boolean;
}

interface AvatarStyledProps {
  $type?: 'initial' | 'profile';
  $size?: number; // default 32
  $nickname?: string;
  $image?: string;
  $isOnline?: boolean;
}

const getInitialFontSize = (size: AvatarProps['size']) => {
  if (size) {
    if (size <= 16) {
      return css`
        ${({ theme }) => theme.fontStyle.caption_12_medium};
      `;
    }
    if (size <= 24) {
      return css`
        ${({ theme }) => theme.fontStyle.body_14_medium};
      `;
    }
    if (size <= 32) {
      return css`
        ${({ theme }) => theme.fontStyle.body_16_medium};
      `;
    }
    if (size <= 36) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_18};
      `;
    }
    if (size <= 48) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_20};
      `;
    }
    if (size <= 64) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_24};
      `;
    }
    if (size <= 84) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_32};
      `;
    }
    return null;
  }
  return null;
};

const Avatar = ({ type = 'profile', size, nickname, image, onClick, isOnline = true }: AvatarProps) => {
  const showInitial = type === 'initial' || (!image && nickname);
  return (
    <Wrapper
      $size={size}
      $image={image}
      $nickname={nickname}
      $type={type}
      $isOnline={isOnline}
      onClick={onClick}
      data-testid="avatar"
    >
      {showInitial && nickname?.slice(0, 1)}
    </Wrapper>
  );
};

const Wrapper = styled.div<AvatarStyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size ?? 32}px;
  height: ${({ $size }) => $size ?? 32}px;
  cursor: pointer;
  aspect-ratio: 1/1;
  border-radius: 50%;
  color: ${({ theme }) => theme.sementicColors.text.inverse};
  background-color: ${({ theme }) => theme.sementicColors.bg.brand};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ $size }) => getInitialFontSize($size)};
  ${({ $nickname, $image, $type }) =>
    $nickname &&
    !$image &&
    $type === 'initial' &&
    css`
      background-image: none;
      border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
      color: ${({ theme }) => theme.sementicColors.text.inverse};
    `};
  ${({ $image, $type }) =>
    $image &&
    $type === 'profile' &&
    css`
      background-color: transparent;
      background-image: url(${$image});
    `};
  ${({ $image, $nickname, $type }) =>
    !$image &&
    !$nickname &&
    $type !== 'initial' &&
    css`
      background-color: transparent;
      background-image: url('/assets/icons/graphic/profile/empty.svg');
    `};
  ${({ $isOnline }) =>
    !$isOnline &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
        opacity: 0.6;
        border-radius: 50%;
      }
    `};
`;

export default Avatar;
