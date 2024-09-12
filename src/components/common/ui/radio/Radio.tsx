import styled from 'styled-components';

interface RadioProps {
  $size?: 'small' | 'large';
}

const Radio = styled.input.attrs({ type: 'radio' })<RadioProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* appearance: none; */
  border-color: transparent;
  background-image: url('/assets/svgs/RadioFalse.svg');
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 2px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: var(--color-bg-inverse, #fff);

  &:checked {
    background-image: url('/assets/svgs/RadioTrue.svg');
  }
  &:disabled {
    background-image: url('/assets/svgs/RadioFalseDisabled.svg');
    &:checked {
      background-image: url('/assets/svgs/RadioTrueDisabled.svg');
    }
  }
`;
export default Radio;
