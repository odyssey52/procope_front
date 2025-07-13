import styled, { DefaultTheme } from 'styled-components';

interface TooltipProps {
  text: string;
  direction: 'left' | 'right' | 'center';
  location?: 'top' | 'bottom';
  icon?: string;
}

const tooltipPoint = (direction: 'left' | 'right' | 'center') => (location?: 'top' | 'bottom') => {
  if (location === 'top') {
    return `
    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: ${direction === 'left' ? '0%' : direction === 'right' ? '100%' : '50%'};
      transform: translateX(${direction === 'center' ? '-50%' : '0'});
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent black transparent;
    }
  `;
  }
  if (location === 'bottom') {
    return `
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: ${direction === 'left' ? '0%' : direction === 'right' ? '100%' : '50%'};
      transform: translateX(${direction === 'center' ? '-50%' : '0'});
      border-width: 5px 5px 0 5px;
      border-color: black transparent transparent transparent;
    }
  `;
  }
};

const tooltipColor = (theme: DefaultTheme) => {
  return `background-color: ${theme.sementicColors.bg.primary}; color: ${theme.sementicColors.text.inverse}`;
};

const Tooltip = ({ text, direction, location, icon }: TooltipProps) => {
  return (
    <>
      <Wrapper>
        {text}
        {icon && <img src={icon} alt="툴팁이미지" />}
      </Wrapper>
      <Point text={text} direction={direction} location={location} />
    </>
  );
};

const Wrapper = styled.div`
  height: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  ${({ theme }) => tooltipColor(theme)}
`;
const Point = styled.div<TooltipProps>`
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${({ theme }) => theme.sementicColors.bg.primary};
  ${({ direction, location }) => tooltipPoint(direction)(location)}
`;

export default Tooltip;
