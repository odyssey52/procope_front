'use client';

import React from 'react';
import styled from 'styled-components';
import SelectOption from './SelectOption';

export type SelectOptionItem<TValue, TId = string | number> = {
  leftContent?: React.ReactNode;
  label: React.ReactNode;
  value: TValue;
  id?: TId;
  description?: string;
};

export type SelectOptionList<TValue, TId = string | number> = SelectOptionItem<TValue, TId>[];

interface ItemListProps<TValue, TId = string | number> {
  selectOptionList: SelectOptionList<TValue, TId>;
  value?: TValue;
  width?: string;
  valueHandler: (value: TValue, id?: TId) => void;
  isSelected?: (a: TValue, b?: TValue) => boolean;
}

const ItemList = <TValue, TId = string | number>({
  selectOptionList,
  value,
  width,
  valueHandler,
  isSelected,
}: ItemListProps<TValue, TId>) => {
  const equals = isSelected ?? ((a: TValue, b?: TValue) => a === b);
  return (
    <Wrapper>
      {selectOptionList.map((item, index) => (
        <SelectOption
          key={index}
          leftContent={item.leftContent}
          width={width}
          onClick={() => valueHandler(item.value, item.id)}
          display={item.label}
          state={equals(item.value, value) ? 'selected' : undefined}
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
  max-height: calc(40px * 8);
  outline: none;

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
