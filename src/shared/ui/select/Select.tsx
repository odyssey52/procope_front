import { IconDirectionDown, IconDirectionUp } from '@/shared/assets/icons/line';
import { theme } from '@/shared/styles/theme';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text';
import ItemList, { SelectOptionList } from './ItemList';

interface SelectProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  state?: 'default' | 'error' | 'disabled';
  placeholder: string;
  value: string;
  valueHandler: (value: string) => void;
  selectOptionList: SelectOptionList;
}

const Select = ({
  label,
  placeholder,
  state = 'default',
  description,
  value,
  valueHandler,
  selectOptionList,
}: SelectProps) => {
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

  const onClickItem = (value: string) => {
    setIsOpen(false);
    valueHandler(value);
  };

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
        <SelectBox onClick={toggleOpen} $state={state} disabled={state === 'disabled'}>
          {placeholder && !value && (
            <Text variant="body_14_regular" color="tertiary">
              {placeholder}
            </Text>
          )}
          {value && (
            <Text variant="body_14_regular" color="primary">
              {value}
            </Text>
          )}
          {isOpen ? <IconDirectionUp /> : <IconDirectionDown />}
        </SelectBox>
        {isOpen && (
          <ItemListWrapper>
            <ItemList selectOptionList={selectOptionList} value={value} valueHandler={onClickItem} />
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
  width: fit-content;
  gap: 8px;
`;

const getSelectBoxStateStyle = {
  default: css`
    border: 1px solid ${theme.sementicColors.border.primary};
    background: ${theme.sementicColors.bg.invers};
    &:hover {
      border: 1px solid ${theme.sementicColors.border.primary_hover_pressed};
      background: ${theme.sementicColors.bg.invers};
      box-shadow:
        0px 1px 2px 0px rgba(0, 0, 0, 0.16),
        0px 0px 1px 0px rgba(0, 0, 0, 0.12);
    }
  `,
  error: css`
    border: 1px solid ${theme.sementicColors.border.danger};
    background: ${theme.sementicColors.bg.invers};
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
const SelectBox = styled.button<{ $state: 'default' | 'error' | 'disabled' }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  min-width: 242px;
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
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

Select.displayName = 'Select';

export default Select;
