import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface LabelProps {
  icon?: string;
  size?: 12 | 16; // default 14
  required?: boolean; // 필수 입력 여부 표시 ( * )
}
const LABEL_STYLE_LIST = {
  12: {
    font: theme.fontStyle.caption_12_medium,
    iconSize: 16,
  },
  16: {
    font: theme.fontStyle.body_16_semibold,
    iconSize: 20,
  },
};

const Label = styled.span<LabelProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  ${({ theme, size }) => (size ? LABEL_STYLE_LIST[size].font : theme.fontStyle.body_14_semibold)};
  color: ${({ theme }) => theme.sementicColors.text.tertiary};
  ${({ icon, size }) =>
    icon &&
    css`
      &::before {
        content: '';
        position: relative;
        display: block;
        width: ${size ? LABEL_STYLE_LIST[size].iconSize : 20}px;
        height: ${size ? LABEL_STYLE_LIST[size].iconSize : 20}px;
        background-image: ${`url(${icon})`};
        background-size: cover;
      }
    `}
  ${({ required, theme }) =>
    required &&
    css`
      &::after {
        content: '*';
        color: ${theme.sementicColors.text.brand};
      }
    `}
`;

Label.displayName = 'Label';

export default Label;
