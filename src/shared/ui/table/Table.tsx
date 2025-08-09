'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import Error from '../error/Error';
import PartCellContent from '../part/PartCellContent';
import PartHeaderContent from '../part/PartHeaderContent';
import BoxSkeleton from '../skeleton/BoxSkeleton';

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
  data?: T[];
  columns: TableColumn<T>[];
  keyExtractor: (item: T) => string;
  caption?: string;
  emptyNode?: ReactNode;
  isError?: boolean;
  isLoading?: boolean;
}

const ERROR_TITLE = 'Error';
const ERROR_DESCRIPTION = '잠시후 다시 시도해 주시길 바랍니다.';

const Table = <T extends Record<string, any>>({
  data,
  columns,
  keyExtractor,
  caption,
  emptyNode,
  isError,
  isLoading,
}: TableProps<T>) => {
  const isEmpty = !data || data.length === 0;

  if (isLoading) {
    return <BoxSkeleton />;
  }
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
          {!isLoading &&
            columns.map((column, index) => (
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

      {isEmpty && !isLoading && (
        <tbody>
          <tr>
            <EmptyBox colSpan={columns.length}>{emptyNode}</EmptyBox>
          </tr>
        </tbody>
      )}
      {isError && !isLoading && (
        <tbody>
          <tr>
            <EmptyBox colSpan={columns.length}>
              <Error title={ERROR_TITLE} description={ERROR_DESCRIPTION} />
            </EmptyBox>
          </tr>
        </tbody>
      )}
      {!isError && !isEmpty && !isLoading && (
        <tbody>
          {data.map((item, rowIndex) => (
            <TableRow key={`tr-${keyExtractor(item)}-${rowIndex}`}>
              {columns.map((column, colIndex) => (
                <TableCell key={`td-${rowIndex}-${colIndex}`}>
                  <PartCellContent>{column.render ? column.render(item, rowIndex) : item[column.key]}</PartCellContent>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      )}
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

const EmptyBox = styled.td`
  vertical-align: middle;
  height: 50vh;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }
`;

export default Table;
