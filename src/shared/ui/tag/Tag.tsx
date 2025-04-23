import styled, { css } from 'styled-components';

interface TagProps {
  $status?: 'error' | 'navy' | 'info' | 'success' | 'warning'; // default : default
  $style?: 'fill' | 'transparent'; // default : text
  $size?: 'large'; // default : small
  $leftIcon?: string;
  $rightIcon?: string;
}

const getTagStatusStyles = (style: TagProps['$style'], status: TagProps['$status']) => {
  switch (status) {
    case 'error':
      switch (style) {
        case 'fill':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.danger};
          `;
        case 'transparent':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.danger_subtle};
            color: ${({ theme }) => theme.sementicColors.text.danger};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.danger};
            }
          `;
        default:
          return css`
            color: ${({ theme }) => theme.sementicColors.text.danger};
            padding: 0;
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.danger};
            }
          `;
      }
    case 'navy':
      switch (style) {
        case 'fill':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.navy_bold};
          `;
        case 'transparent':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.navy_subtle};
            color: ${({ theme }) => theme.sementicColors.text.navy};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.navy};
            }
          `;
        default:
          return css`
            color: ${({ theme }) => theme.sementicColors.text.navy};
            padding: 0;
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.navy};
            }
          `;
      }
    case 'info':
      switch (style) {
        case 'fill':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.info_bold};
          `;
        case 'transparent':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.info_subtle};
            color: ${({ theme }) => theme.sementicColors.text.info};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.info};
            }
          `;
        default:
          return css`
            color: ${({ theme }) => theme.sementicColors.text.info};
            padding: 0;
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.info};
            }
          `;
      }
    case 'success':
      switch (style) {
        case 'fill':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.success_bold};
          `;
        case 'transparent':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.success_subtle};
            color: ${({ theme }) => theme.sementicColors.text.success};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.success};
            }
          `;
        default:
          return css`
            color: ${({ theme }) => theme.sementicColors.text.success};
            padding: 0;
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.success};
            }
          `;
      }
    case 'warning':
      switch (style) {
        case 'fill':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.warning_bold};
            color: ${({ theme }) => theme.sementicColors.text.primary};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.primary};
            }
          `;
        case 'transparent':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.warning_subtle};
            color: ${({ theme }) => theme.sementicColors.text.warning};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.warning};
            }
          `;
        default:
          return css`
            color: ${({ theme }) => theme.sementicColors.text.warning};
            padding: 0;
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.warning};
            }
          `;
      }
    default:
      switch (style) {
        case 'fill':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.primary};
          `;
        case 'transparent':
          return css`
            background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
            color: ${({ theme }) => theme.sementicColors.text.primary};
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.primary};
            }
          `;
        default:
          return css`
            color: ${({ theme }) => theme.sementicColors.text.primary};
            padding: 0;
            &::before,
            &::after {
              background-color: ${({ theme }) => theme.sementicColors.icon.primary};
            }
          `;
      }
  }
};

const getTagSizeStyles = (size: TagProps['$size']) => {
  switch (size) {
    case 'large':
      return css`
        height: 24px;
        ${({ theme }) => theme.fontStyle.body_14_medium};
      `;
    default:
      return css`
        height: 20px;
      `;
  }
};

const Tag = styled.span<TagProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0px 4px;
  border-radius: 4px;
  border: none;
  cursor: default;
  color: ${({ theme }) => theme.sementicColors.text.invers};
  > svg {
    stroke: ${({ theme }) => theme.sementicColors.text.primary};
  }
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  &:disabled {
    &:hover,
    &:active {
      box-shadow: none;
    }
  }
  ${({ $leftIcon }) =>
    $leftIcon &&
    css`
      &::before {
        content: '';
        position: relative;
        width: 16px;
        height: 16px;
        background-size: cover;
        mask-image: url(${$leftIcon});
        mask-size: cover;
        background-color: ${({ theme }) => theme.sementicColors.icon.invers};
        background-image: none;
      }
    `};
  ${({ $rightIcon }) =>
    $rightIcon &&
    css`
      &::after {
        content: '';
        position: relative;
        width: 16px;
        height: 16px;
        background-size: cover;
        mask-image: url(${$rightIcon});
        mask-size: cover;
        background-color: ${({ theme }) => theme.sementicColors.icon.invers};
        background-image: none;
      }
    `};
  ${({ $style, $status }) => getTagStatusStyles($style, $status)}
  ${({ $size }) => getTagSizeStyles($size)}
`;

export default Tag;
