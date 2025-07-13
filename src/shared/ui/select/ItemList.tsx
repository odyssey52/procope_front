import React from 'react';
import styled from 'styled-components';
import SelectOption from './SelectOption';

export type SelectOptionList = {
  leftContent?: React.ReactNode;
  value: string | React.ReactNode;
  id?: string | number;
  description?: string;
}[];

interface ItemListProps {
  selectOptionList: SelectOptionList;
  value?: string | React.ReactNode;
  valueHandler: (value: string | React.ReactNode, id?: string | number) => void;
}

const ItemList = ({ selectOptionList, value, valueHandler }: ItemListProps) => {
  return (
    <Wrapper>
      {selectOptionList.map((item, index) => (
        <SelectOption
          key={index}
          leftContent={item.leftContent}
          valueHandler={() => valueHandler(item.value, item.id)}
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
  overflow-y: auto;
  gap: 2px;
  border-radius: 8px;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.inverse};
  max-height: calc(40px * 8); // SelectOption의 높이(40px) * 8개
  outline: none; // 포커스 아웃라인 제거

  box-shadow:
    0px 2px 4px 0px rgba(0, 0, 0, 0.16),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.sementicColors.border.primary};
    border-radius: 4px;
  }
`;

ItemList.displayName = 'ItemList';

export default ItemList;
