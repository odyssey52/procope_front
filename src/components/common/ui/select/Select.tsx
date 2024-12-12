import { IconDirectionDown, IconDirectionUp } from '@/assets/icons/line';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import ItemList, { SelectOptionList } from './ItemList';

interface SelectProps {
  label?: React.ReactNode;
  placeholder: string;
  value: string;
  valueHandler: (value: string) => void;
  selectOptionList: SelectOptionList;
}

const Select = ({ label, placeholder, value, valueHandler, selectOptionList }: SelectProps) => {
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
      <SelectBox onClick={toggleOpen}>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const SelectBox = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  min-width: 242px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.invers};
`;
const ItemListWrapper = styled.div`
  position: absolute;
  display: flex;
  top: calc(100% + 2px);
`;

Select.displayName = 'Select';

export default Select;
