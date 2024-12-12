import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface DescriptionProps {
  type?: 'default' | 'help' | 'error' | 'info' | 'warning' | 'success';
  text: string;
}

const DESCRIPTION_STYLE_LIST = {
  help: {
    color: theme.sementicColors.text.tertiary,
    icon: '/assets/icons/graphic/fill/help.svg',
  },
  error: {
    color: theme.sementicColors.text.danger,
    icon: '/assets/icons/graphic/fill/error.svg',
  },
  info: {
    color: theme.sementicColors.text.brand,
    icon: '/assets/icons/graphic/fill/information.svg',
  },
  warning: {
    color: theme.sementicColors.text.warning,
    icon: '/assets/icons/graphic/fill/warning.svg',
  },
  success: {
    color: theme.sementicColors.text.success,
    icon: '/assets/icons/graphic/fill/check.svg',
  },
  default: {
    color: theme.sementicColors.text.tertiary,
  },
};

const Description = ({ type = 'default', text }: DescriptionProps) => {
  return <Wrapper type={type}>{text}</Wrapper>;
};
interface DescriptionStyledProps {
  type: 'default' | 'help' | 'error' | 'info' | 'warning' | 'success';
}
const Wrapper = styled.p<DescriptionStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  color: ${({ type }) => DESCRIPTION_STYLE_LIST[type].color};

  ${({ type }) =>
    type !== 'default' &&
    css`
      &::before {
        content: '';
        position: relative;
        display: block;
        width: 16px;
        height: 16px;
        background-image: url(${DESCRIPTION_STYLE_LIST[type].icon});
        background-size: cover;
      }
    `}
`;

Description.displayName = 'Description';

export default Description;
