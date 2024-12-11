import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import { SelectOptionProps } from './SelectOption';
import Text from '../Text';

interface SelectProps {
  label: React.ReactNode;
  placeholder?: string;
  selectOptionList: SelectOptionProps[];
}
const Select = ({ label, placeholder, selectOptionList }: SelectProps) => {
  return (
    <Wrapper>
      {label}
      {placeholder && (
        <Text variant="body_14_regular" color="tertiary">
          {placeholder}
        </Text>
      )}
      <ItemList selectOptionList={selectOptionList} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Select.displayName = 'Select';

export default Select;
