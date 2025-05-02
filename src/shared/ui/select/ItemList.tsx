import React from 'react';
import styled from 'styled-components';
import SelectOption from './SelectOption';

export type SelectOptionList = {
  leftContent?: React.ReactNode;
  value: string;
  description?: string;
}[];
interface ItemListProps {
  selectOptionList: SelectOptionList;
  value?: string;
  valueHandler: (value: string) => void;
}
const ItemList = ({ selectOptionList, value, valueHandler }: ItemListProps) => {
  return (
    <Wrapper>
      {selectOptionList.map((item, index) => (
        <SelectOption
          key={index}
          leftContent={item.leftContent}
          valueHandler={valueHandler}
          value={item.value}
          state={item.value === value ? 'selected' : undefined}
          description={item.description}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 2px;
  border-radius: 8px;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.inverse};

  box-shadow:
    0px 2px 4px 0px rgba(0, 0, 0, 0.16),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
`;

ItemList.displayName = 'ItemList';

export default ItemList;
