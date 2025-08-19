import { IconDirectionDown, IconDirectionUp } from '@/shared/assets/icons/line';
import { zIndex } from '@/shared/styles/mixin';
import { theme } from '@/shared/styles/theme';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text';
import ItemList, { SelectOptionList } from './ItemList';

interface SelectProps<TValue, TId = string> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  state?: 'default' | 'error' | 'disabled';
  width?: string;
  placeholder: string;
  value?: TValue;
  valueHandler: (value: TValue, id?: TId) => void;
  selectOptionList: SelectOptionList<TValue, TId>;
  isSelected?: (a: TValue, b?: TValue) => boolean;
}

const Select = <TValue, TId = string>({
  label,
  placeholder,
  state = 'default',
  width,
  description,
  value,
  valueHandler,
  selectOptionList,
  isSelected,
}: SelectProps<TValue, TId>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickItem = (next: TValue, id?: TId) => {
    setIsOpen(false);
    valueHandler(next, id);
  };

  const equals = useMemo(() => isSelected ?? ((a: TValue, b?: TValue) => a === b), [isSelected]);

  const selectedLabel = useMemo(() => {
    const matched = selectOptionList.find((opt) => equals(opt.value, value));
    return matched?.label;
  }, [selectOptionList, value, equals]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <Wrapper ref={selectRef}>
      {label && label}
      <SelectBoxWrapper>
        <SelectBox onClick={toggleOpen} $state={state} $width={width} disabled={state === 'disabled'}>
          {placeholder && !value && (
            <Text variant="body_14_regular" color="tertiary">
              {placeholder}
            </Text>
          )}
          {value && (
            <Text variant="body_14_regular" color="primary">
              {selectedLabel}
            </Text>
          )}
          {isOpen ? <IconDirectionUp size={20} /> : <IconDirectionDown size={20} />}
        </SelectBox>
        {isOpen && (
          <ItemListWrapper>
            <ItemList<TValue, TId>
              selectOptionList={selectOptionList}
              value={value}
              width={width}
              valueHandler={onClickItem}
              isSelected={isSelected}
            />
          </ItemListWrapper>
        )}
      </SelectBoxWrapper>
      {description && description}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const getSelectBoxStateStyle = {
  default: css`
    border: 1px solid ${theme.sementicColors.border.primary};
    background: ${theme.sementicColors.bg.inverse};
    &:hover {
      border: 1px solid ${theme.sementicColors.border.primary_hover_pressed};
      background: ${theme.sementicColors.bg.inverse};
      box-shadow:
        0px 1px 2px 0px rgba(0, 0, 0, 0.16),
        0px 0px 1px 0px rgba(0, 0, 0, 0.12);
    }
  `,
  error: css`
    border: 1px solid ${theme.sementicColors.border.danger};
    background: ${theme.sementicColors.bg.inverse};
    box-shadow: 0px 0px 0px 2px rgba(248, 113, 113, 0.4);
  `,
  disabled: css`
    &:hover {
      border: 1px solid ${theme.sementicColors.border.disabled};
      box-shadow: none;
    }
    border: 1px solid ${theme.sementicColors.border.disabled};
    cursor: not-allowed;
    opacity: 0.4;
    background-color: ${theme.sementicColors.bg.disabled};
  `,
};
const SelectBox = styled.button<{ $state: 'default' | 'error' | 'disabled'; $width?: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  max-width: 240px;

  width: ${({ $width }) => $width ?? $width};
  height: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  ${({ $state }) => getSelectBoxStateStyle[$state]}
`;

const SelectBoxWrapper = styled.div`
  position: relative;
`;

const ItemListWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  ${zIndex.layer1};
`;

Select.displayName = 'Select';

export default Select;
