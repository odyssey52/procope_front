import { ChangeEvent, useRef } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../icon/Icon';
import Description from '../description/Description';
import Label from '../label/Label';

interface PlaceholderProps {
  value: string;
  valueHandler?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  leftIcon?: string;
  rightIcon?: string;
  validation?: boolean;
  disabled?: boolean;
  label?: {
    text: string;
    required?: boolean;
  };
  description?: string;
  errorDescription?: string;
}

const Placeholder = ({
  value,
  valueHandler,
  placeholder,
  maxLength,
  leftIcon,
  rightIcon,
  validation,
  disabled,
  description,
  errorDescription,
  label,
}: PlaceholderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (_value: ChangeEvent<HTMLInputElement>) => {
    valueHandler && valueHandler(_value.target.value);
  };
  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };
  return (
    <Wrapper onClick={handleWrapperClick}>
      {label && <Label required={label.required}>{label.text}</Label>}
      <InputWrapper $isValid={validation} $disabled={disabled}>
        {leftIcon && <Icon src={leftIcon} width={20} />}
        <Input
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
        />
        {rightIcon && <Icon src={rightIcon} width={20} />}
      </InputWrapper>
      {!!description && !errorDescription && <Description>{description}</Description>}
      {!!errorDescription && validation === false && <Description type="error">{errorDescription}</Description>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const InputWrapper = styled.div<{ $isValid?: boolean; $disabled?: boolean }>`
  position: relative;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.invers};

  ${({ $isValid, $disabled, theme }) =>
    $isValid !== false &&
    !$disabled &&
    css`
      &:hover,
      &:active {
        border-radius: 8px;
        border: 1px solid ${theme.sementicColors.border.primary_hover_pressed};
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16), 0px 0px 1px 0px rgba(0, 0, 0, 0.12);
      }
    `}

  ${({ $isValid, theme }) =>
    $isValid === false &&
    css`
      border-radius: 8px;
      border: 1px solid ${theme.sementicColors.border.danger};
      box-shadow: 0px 0px 0px 2px rgba(248, 113, 113, 0.4);
    `}
    ${({ $disabled, theme }) =>
    $disabled &&
    css`
      border-radius: 8px;
      border: 1px solid ${theme.sementicColors.border.disabled};
      background: ${theme.sementicColors.bg.disabled};
      cursor: not-allowed;
    `}
`;
const Input = styled.input`
  position: relative;
  display: flex;
  flex-grow: 1;
  border: none;
  ${({ theme }) => theme.fontStyle.body_14_regular};
  color: ${({ theme }) => theme.sementicColors.text.primary};
  &::placeholder {
    color: ${({ theme }) => theme.sementicColors.text.tertiary};
  }
  &:disabled {
    background: ${({ theme }) => theme.sementicColors.bg.disabled};
    cursor: not-allowed;
  }
`;
Placeholder.displayName = 'Placeholder';

export default Placeholder;