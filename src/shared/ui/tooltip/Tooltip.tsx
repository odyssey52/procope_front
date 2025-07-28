import styled from 'styled-components';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  icon?: string;
}

const verticalPoint = (align?: string) => {
  if (align === 'start') {
    return {
      left: '10px',
      transform: 'none',
    };
  }
  if (align === 'center') {
    return {
      left: '50%',
      transform: 'translateX(-50%)',
    };
  }
  if (align === 'end') {
    return {
      right: '10px',
      left: 'auto',
      transform: 'none',
    };
  }
};

const horizontalPoint = (align?: string) => {
  if (align === 'start') {
    return {
      top: '10px',
      transform: 'none',
    };
  }
  if (align === 'center') {
    return {
      top: '50%',
      transform: 'translateY(-50%)',
    };
  }
  if (align === 'end') {
    return {
      bottom: '10px',
      top: 'auto',
      transform: 'none',
    };
  }
};

const Tooltip = ({ text, position, align = 'center', icon }: TooltipProps) => {
  return (
    <Wrapper position={position} align={align}>
      {text}
      {icon && <img src={icon} alt="툴팁이미지" />}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ position?: string; align?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  z-index: 9999;
  ${({ align }) =>
    align === 'start'
      ? 'transform: translateX(0);'
      : align === 'center'
        ? 'transform: translateX(-50%);'
        : align === 'end'
          ? 'transform: translateX(-100%);'
          : ''}
  ${({ theme }) => theme.fontStyle.caption_10_regular};
  ${({ theme }) => `
    background-color: ${theme.sementicColors.bg.primary};
    color: ${theme.sementicColors.text.inverse};
  `}

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    display: ${({ position: pos }) => (pos ? 'block' : 'none')};
  }
  &[position='bottom']::after {
    bottom: -4px;
    border-width: 4px 4px 0 4px;
    border-color: ${({ theme }) => `${theme.sementicColors.bg.primary} transparent transparent transparent`};
    ${({ align }) => verticalPoint(align)}
  }
  &[position='top']::after {
    top: -4px;
    border-width: 0 4px 4px 4px;
    border-color: ${({ theme }) => `transparent transparent ${theme.sementicColors.bg.primary} transparent`};
    ${({ align }) => verticalPoint(align)}
  }
  &[position='left']::after {
    right: -4px;
    border-width: 4px 0 4px 4px;
    border-color: ${({ theme }) => `transparent transparent transparent ${theme.sementicColors.bg.primary}`};
    ${({ align }) => horizontalPoint(align)}
  }
  &[position='right']::after {
    left: -4px;
    border-width: 4px 4px 4px 0;
    border-color: ${({ theme }) => `transparent ${theme.sementicColors.bg.primary} transparent transparent`};
    ${({ align }) => horizontalPoint(align)}
  }
`;

export default Tooltip;
