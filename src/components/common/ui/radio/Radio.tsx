import { IconRadio, IconRadioChecked } from '@/assets/icons/line';
import { theme } from '@/styles/theme';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Label from '../label/Label';

interface RadioProps {
  size?: 20 | 24;
  name: string;
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange: (id: string) => void;
}

const Radio = ({ size = 20, name, id, disabled, required, label, description, checked, onChange }: RadioProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.id);
  };

  return (
    <ButtonLabel htmlFor={id} $disabled={disabled}>
      {checked && (
        <IconRadioChecked
          color={disabled ? theme.sementicColors.icon.disabled : theme.sementicColors.icon.brand}
          size={size}
        />
      )}
      {!checked && <IconRadio color={theme.sementicColors.icon.disabled} size={size} />}

      <Input type="radio" name={name} id={id} checked={checked} disabled={disabled} onChange={handleChange} />
      <TextBox>
        <LabelBox $size={size}>
          <Label disabled={disabled} size={size === 20 ? 12 : undefined} text={label} required={required} />
        </LabelBox>
        <LabelDescription $disabled={disabled} $size={size}>
          {description}
        </LabelDescription>
      </TextBox>
    </ButtonLabel>
  );
};

const ButtonLabel = styled.label<{ $disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;
const Input = styled.input.attrs({ type: 'radio' })`
  appearance: none;
`;
const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const LabelBox = styled.div<{ $size: 20 | 24 }>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ $size }) => $size}px;
`;
const LabelDescription = styled.span<{ $disabled?: boolean; $size: 20 | 24 }>`
  ${({ $size, theme }) => ($size === 20 ? theme.fontStyle.caption_10_regular : theme.fontStyle.caption_12_regular)};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.sementicColors.text.disabled : theme.sementicColors.text.secondary};
`;

Radio.displayName = 'Checkbox2';

export default Radio;
