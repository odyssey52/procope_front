'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PartHeaderContent from '../part/PartHeaderContent';
import PartCellContent from '../part/PartCellContent';

export interface TableColumn<T> {
  key: string;
  title?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  render?: (item: T, index: number) => ReactNode;
  icon?: ReactNode;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  keyExtractor: (item: T) => string;
  caption?: string;
}

const Table = <T extends Record<string, any>>({ data, columns, keyExtractor, caption }: TableProps<T>) => {
  return (
    <Wrapper>
      {caption && <caption>{caption}</caption>}
      <colgroup>
        {columns.map((column, index) => (
          <col
            key={`col-${index}`}
            style={{
              width: column.width || 'auto',
              minWidth: column.minWidth || 'auto',
              maxWidth: column.maxWidth || 'none',
            }}
          />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <TableHeader key={`th-${index}`}>
              <PartHeaderContent
                title={column.title || ''}
                size={44}
                icon={column.sortable ? column.icon : undefined}
              />
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => {
          return (
            <tr key={keyExtractor(item)}>
              {columns.map((column, colIndex) => (
                <TableCell key={`td-${rowIndex}-${colIndex}`}>
                  <PartCellContent>{column.render ? column.render(item, rowIndex) : item[column.key]}</PartCellContent>
                </TableCell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Wrapper>
  );
};

const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  caption {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const TableHeader = styled.th<{ $width?: string; $minWidth?: string; $maxWidth?: string }>`
  vertical-align: middle;
`;

const TableCell = styled.td<{ $width?: string; $minWidth?: string; $maxWidth?: string }>`
  vertical-align: middle;
`;

export default Table;
