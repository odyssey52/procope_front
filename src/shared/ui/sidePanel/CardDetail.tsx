'use client';

import styled from 'styled-components';

export const PanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0; /* 내부 스크롤러 활성화 위해 필요 */
`;

export const PanelControl = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 48px;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`;

export const CardDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 24px;
  padding: 0 24px;
`;

export const CardDetailTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

export const CardDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardDetailInfoItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 2px 0;
`;

export const CardDetailInfoItemTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 140px;
  ${({ theme }) => theme.fontStyle.body_16_medium};
  color: ${({ theme }) => theme.sementicColors.text.tertiary};
`;

export const CardDetailInfoItemContent = styled.div`
  color: ${({ theme }) => theme.sementicColors.text.secondary};
  padding: 8px;
`;
