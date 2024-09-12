import styled from 'styled-components';

interface RadioProps {
  id: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
}

const Radio = ({ id, name, checked, disabled }: RadioProps) => {
  return <Box type="radio" id={id} name={name} disabled={disabled} defaultChecked={checked} />;
};

const Box = styled.input`
  &[type='radio'] {
    width: 16px;
    height: 16px;
    appearance: none;
    border-color: transparent;
    background-image: url('/assets/svgs/RadioFalse.svg');
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;

    &:checked {
      background-image: url('/assets/svgs/RadioTrue.svg');
    }
    &:disabled {
      background-image: url('/assets/svgs/RadioFalseDisabled.svg');
      &:checked {
        background-image: url('/assets/svgs/RadioTrueDisabled.svg');
      }
    }
  }
`;
export default Radio;
