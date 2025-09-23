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
  flex?: string;
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
      <colgroup style={{ width: '100%' }}>
        {columns.map((column, index) => {
          // flex 값이 있으면 백분율로 변환
          let width = column.width || 'auto';
          if (column.flex) {
            const totalFlex = columns.reduce((sum, col) => sum + (parseInt(col.flex || '0', 10) || 0), 0);
            const flexValue = parseInt(column.flex, 10) || 0;
            width = totalFlex > 0 ? `${(flexValue / totalFlex) * 100}%` : 'auto';
          }

          return (
            <col
              key={`col-${index}`}
              style={{
                width,
                minWidth: column.minWidth || 'auto',
                maxWidth: column.maxWidth || 'none',
              }}
            />
          );
        })}
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

      {!isError && isEmpty && !isLoading && (
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
  position: relative;
  display: block;
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

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
  ${({ theme }) => theme.fontStyle.body_14_medium};
  color: ${({ theme }) => theme.sementicColors.text.primary};
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
