import { ChangeEvent, useRef } from 'react';
import styled, { css } from 'styled-components';
import Description from '../description/Description';
import Label from '../label/Label';
import Text from '../Text';

interface TextAreaProps {
  value: string;
  valueHandler: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  validation?: boolean;
  disabled?: boolean;
  label?: {
    text: string;
    required?: boolean;
  };
  description?: string;
  errorDescription?: string;
}

const TextArea = ({
  value,
  valueHandler,
  placeholder,
  maxLength,
  validation,
  disabled,
  description,
  errorDescription,
  label,
}: TextAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const charCount = value.length.toString().padStart(3, '0');

  const onChange = (_value: ChangeEvent<HTMLTextAreaElement>) => {
    valueHandler(_value.target.value);
  };

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  return (
    <Wrapper onClick={handleWrapperClick}>
      {label && <Label text={label.text} required={label.required} />}
      <InputWrapper $isValid={validation} $disabled={disabled}>
        <Input
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
        />
        {maxLength && <Text variant="caption_12_regular" color="tertiary">{`${charCount}/${maxLength}`}</Text>}
      </InputWrapper>
      {!!description && !errorDescription && <Description text={description} />}
      {!!errorDescription && validation === false && <Description type="error" text={errorDescription} />}
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
  flex-direction: column;
  align-items: end;
  padding: 12px;
  min-height: 118px;
  height: 100%;
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
        box-shadow:
          0px 1px 2px 0px rgba(0, 0, 0, 0.16),
          0px 0px 1px 0px rgba(0, 0, 0, 0.12);
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
const Input = styled.textarea`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
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
TextArea.displayName = 'Placeholder';

export default TextArea;
