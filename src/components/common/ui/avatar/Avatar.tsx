import styled, { css } from 'styled-components';

interface AvatarProps {
  type?: 'initial' | 'profile';
  size?: number; // default 36
  nickname?: string;
  image?: string;
}

interface AvatarStyledProps {
  $type?: 'initial' | 'profile';
  $size?: number; // default 36
  $nickname?: string;
  $image?: string;
}

const getInitialFontSize = (size: AvatarProps['size']) => {
  if (size) {
    if (size <= 16) {
      return css`
        ${({ theme }) => theme.fontStyle.caption_12_medium};
      `;
    } else if (size <= 24) {
      return css`
        ${({ theme }) => theme.fontStyle.body_14_medium};
      `;
    } else if (size <= 32) {
      return css`
        ${({ theme }) => theme.fontStyle.body_16_medium};
      `;
    } else if (size <= 36) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_18};
      `;
    } else if (size <= 48) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_20};
      `;
    } else if (size <= 64) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_24};
      `;
    } else if (size <= 84) {
      return css`
        ${({ theme }) => theme.fontStyle.heading_32};
      `;
    }
  }
};

const Avatar = ({ type, size, nickname, image }: AvatarProps) => {
  const showInitial = type === 'initial' || (!image && nickname);

  return (
    <Wrapper $size={size} $image={image} $nickname={nickname} $type={type}>
      {showInitial && nickname?.slice(0, 1)}
    </Wrapper>
  );
};

const Wrapper = styled.div<AvatarStyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size ?? 36}px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  color: ${({ theme }) => theme.sementicColors.text.invers};
  background-color: ${({ theme }) => theme.sementicColors.bg.brand};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ $size }) => getInitialFontSize($size)};
  ${({ $nickname, $image, $type }) =>
    $nickname &&
    !$image &&
    $type !== 'profile' &&
    css`
      background-image: none;
      border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
      color: ${({ theme }) => theme.sementicColors.text.invers};
    `};
  ${({ $image, $type }) =>
    $image &&
    $type !== 'initial' &&
    css`
      border: none;
      background-color: transparent;
      background-image: url(${$image});
    `};
  ${({ $image, $nickname, $type }) =>
    !$image &&
    !$nickname &&
    $type !== 'initial' &&
    css`
      background-color: transparent;
      border: none;
      background-image: url('/assets/icons/graphic/profile/empty.svg');
    `};
`;

export default Avatar;
