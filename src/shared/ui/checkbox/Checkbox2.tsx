import { theme } from '@/shared/styles/theme';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  size?: 20 | 24;
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange: (id: string, checked: boolean) => void;
}

const Checkbox2 = ({ size = 20, id, disabled, required, label, description, checked, onChange }: CheckboxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.id, e.target.checked);
  };

  return (
    <Label htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={handleChange} />
      <TextBox>
        <Title $disabled={disabled} $size={size}>
          {label}
          {required && <span>*</span>}
        </Title>
        <Description $disabled={disabled} $size={size}>
          {description}
        </Description>
      </TextBox>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;
const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const Title = styled.span<{ $disabled?: boolean; $size: 20 | 24 }>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ $size }) => ($size === 20 ? '20px' : '24px')};
  ${({ $size, theme }) => ($size === 20 ? theme.fontStyle.caption_12_medium : theme.fontStyle.body_14_semibold)};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.sementicColors.text.disabled : theme.sementicColors.text.primary};
  > span {
    color: ${theme.sementicColors.text.brand};
  }
`;
const Description = styled.span<{ $disabled?: boolean; $size: 20 | 24 }>`
  ${({ $size, theme }) => ($size === 20 ? theme.fontStyle.caption_10_regular : theme.fontStyle.caption_12_regular)};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.sementicColors.text.disabled : theme.sementicColors.text.secondary};
`;

Checkbox2.displayName = 'Checkbox2';

export default Checkbox2;
