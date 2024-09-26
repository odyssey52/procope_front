import styled, { css } from 'styled-components';

interface TextButtonProps {
  $type?: '14' | '20_underline' | '24'; // default : 12
  $leftIcon?: string;
  $rightIcon?: string;
}

const getButtonTypeStyles = (type: TextButtonProps['$type']) => {
  switch (type) {
    case '14':
      return css`
        ${({ theme }) => theme.fontStyle.body_14_medium};
      `;
    case '20_underline':
      return css`
        ${({ theme }) => theme.fontStyle.body_14_underline};
      `;
    case '24':
      return css`
        ${({ theme }) => theme.fontStyle.body_16_regular};
      `;
    default:
      return css`
        &::before,
        &::after {
          width: 12px;
          height: 12px;
        }
      `;
  }
};

const TextButton = styled.button<TextButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 2px 4px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.sementicColors.text.primary};
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }
  &:disabled {
    opacity: 0.4;
    &:hover,
    &:active {
      background-color: transparent;
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
        background-image: url(${$leftIcon});
        background-size: cover;
      }
    `};
  ${({ $rightIcon }) =>
    $rightIcon &&
    css`
      &::after {
        content: '';
        position: relative;
        display: block;
        width: 16px;
        height: 16px;
        background-image: url(${$rightIcon});
        background-size: cover;
      }
    `}
  ${({ $type }) => getButtonTypeStyles($type)}
`;

export default TextButton;
