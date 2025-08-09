'use client';

import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StateTagProps {
  $status: 'error' | 'navy' | 'info' | 'success' | 'warning' | 'default';
  children?: ReactNode;
}

const getStateTagStatusStyles = (status: StateTagProps['$status']) => {
  switch (status) {
    case 'error':
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.danger_subtle};
        color: ${({ theme }) => theme.sementicColors.text.danger};
        &::before {
          background: ${({ theme }) => theme.sementicColors.icon.danger};
        }
      `;
    case 'navy':
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.navy_subtle};
        color: ${({ theme }) => theme.sementicColors.text.navy};
        &::before {
          background: ${({ theme }) => theme.sementicColors.icon.navy};
        }
      `;
    case 'info':
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.info_subtle};
        color: ${({ theme }) => theme.sementicColors.text.info};
        &::before {
          background: ${({ theme }) => theme.sementicColors.icon.info};
        }
      `;
    case 'success':
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.success_subtle};
        color: ${({ theme }) => theme.sementicColors.text.success};
        &::before {
          background: ${({ theme }) => theme.sementicColors.icon.success};
        }
      `;
    case 'default':
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.primary};
        color: ${({ theme }) => theme.sementicColors.text.primary};
        &::before {
          background: ${({ theme }) => theme.sementicColors.icon.primary};
        }
      `;
    default:
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.warning_subtle};
        color: ${({ theme }) => theme.sementicColors.text.warning};
        &::before {
          background: ${({ theme }) => theme.sementicColors.icon.warning};
        }
      `;
  }
};
const StateTag = ({ $status = 'default', children }: StateTagProps) => {
  return <Wrapper $status={$status}>{children}</Wrapper>;
};

const Wrapper = styled.div<StateTagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0px 8px;
  border-radius: 12px;
  height: 24px;
  border: none;
  cursor: default;
  color: ${({ theme }) => theme.sementicColors.text.inverse};
  ${({ theme }) => theme.fontStyle.body_14_medium};
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  ${({ $status }) => getStateTagStatusStyles($status)}
`;

StateTag.displayName = 'StateTag';

export default StateTag;
