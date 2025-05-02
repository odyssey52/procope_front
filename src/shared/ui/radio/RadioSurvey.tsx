import styled from 'styled-components';

interface RadioProps {
  $size?: 'sm' | 'lg';
}

const getSize = ({ $size }: RadioProps) => {
  switch ($size) {
    case 'sm':
      return '36px';
    case 'lg':
      return '48px';
    default:
      return '40px';
  }
};
const getBorderWidth = ({ $size }: RadioProps) => {
  switch ($size) {
    case 'sm':
      return '10px';
    case 'lg':
      return '13px';
    default:
      return '11px';
  }
};
const RadioSurvey = styled.input.attrs({ type: 'radio' })<RadioProps>`
  appearance: none;
  width: ${getSize};
  height: ${getSize};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.sementicColors.border.primary};
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  cursor: pointer;

  &:checked {
    border: ${getBorderWidth} solid ${({ theme }) => theme.sementicColors.border.brand};
    &:hover,
    &:active {
      border: ${getBorderWidth} solid ${({ theme }) => theme.sementicColors.border.brand};
      box-shadow: none;
    }
  }

  &:hover,
  &:active {
    border: 2px solid ${({ theme }) => theme.sementicColors.border.primary_hover_pressed};
    box-shadow: 0 0 0 2px rgba(47, 78, 118, 0.3);
  }

  &:disabled {
    cursor: default;
    &:hover,
    &:active {
      border: 2px solid ${({ theme }) => theme.sementicColors.border.primary};
      box-shadow: none;
    }
    &:checked {
      background-image: url('/assets/svgs/RadioTrueDisabled.svg');
    }
  }
`;
export default RadioSurvey;
