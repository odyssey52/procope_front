import styled, { css } from "styled-components";

interface ButtonProps {
  $type?: "secondary" | "outline" | "error" | "tertiary"; // default : primary
  $size?: "36" | "48"; // default : 40
  $leftIcon?: string;
  $rightIcon?: string;
}

const getButtonTypeStyles = (type: ButtonProps["$type"]) => {
  switch (type) {
    case "secondary":
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.primary};
        &:hover,
        &:active {
          background-color: ${({ theme }) =>
            theme.sementicColors.bg.primary_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.primary};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case "outline":
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.invers};
        border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
        color: ${({ theme }) => theme.sementicColors.text.primary};
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
          color: ${({ theme }) =>
            theme.sementicColors.text.primary_hover_pressed};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.invers};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case "error":
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.danger};
        &:hover,
        &:active {
          background-color: ${({ theme }) =>
            theme.sementicColors.bg.danger_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(248, 113, 113, 0.4);
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.danger};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case "tertiary":
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
        color: ${({ theme }) => theme.sementicColors.text.primary};
        &:hover,
        &:active {
          background-color: ${({ theme }) =>
            theme.sementicColors.bg.tertiary_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
          color: ${({ theme }) =>
            theme.sementicColors.text.primary_hover_pressed};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
          color: ${({ theme }) => theme.sementicColors.text.primary};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.brand};
        &:hover,
        &:active {
          background-color: ${({ theme }) =>
            theme.sementicColors.bg.brand_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(94, 164, 255, 0.4);
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.brand};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
  }
};

const getButtonSizeStyles = (size: ButtonProps["$size"]) => {
  switch (size) {
    case "36":
      return css`
        height: 36px;
      `;
    case "48":
      return css`
        height: 48px;
        ${({ theme }) => theme.fontStyle.body_16_medium};
      `;
    default:
      return css`
        height: 40px;
      `;
  }
};

const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.sementicColors.text.invers};
  ${({ theme }) => theme.fontStyle.body_14_medium};
  border-radius: 12px;
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
        content: "";
        position: relative;
        width: 20px;
        height: 20px;
        background-image: url(${$leftIcon});
        background-size: cover;
      }
    `};
  ${({ $type: type }) => getButtonTypeStyles(type)}
  ${({ $size: size }) => getButtonSizeStyles(size)}
`;

export default Button;
