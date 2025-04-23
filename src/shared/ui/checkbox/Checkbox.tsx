import { IconCheckbox, IconCheckboxChecked } from '@/shared/assets/icons/line';
import { theme } from '@/shared/styles/theme';
import React from 'react';
import styled from 'styled-components';
import Label from '../label/Label';

interface CheckboxProps {
  size?: 20 | 24;
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  onClick: (id: string, checked: boolean) => void;
}

const Checkbox = ({ size = 20, id, label, description, required, checked, disabled, onClick }: CheckboxProps) => {
  return (
    <Wrapper disabled={disabled} $disabled={disabled} onClick={() => onClick(id, !checked)}>
      {checked && (
        <IconCheckboxChecked
          size={size}
          color={disabled ? theme.sementicColors.icon.disabled : theme.sementicColors.icon.brand}
        />
      )}
      {!checked && <IconCheckbox size={size} />}
      <TextBox>
        <LabelBox $size={size}>
          <Label disabled={disabled} size={size === 20 ? 12 : undefined} text={label} required={required} />
        </LabelBox>
        {description && (
          <LabelDescription $disabled={disabled} $size={size}>
            {description}
          </LabelDescription>
        )}
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.button<{ $disabled?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  gap: 4px;
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
