'use client';

import styled from 'styled-components';

const PanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0; /* 내부 스크롤러 활성화 위해 필요 */
`;

const PanelControl = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 24px;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 48px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 24px;
  padding: 0 24px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 2px 0;
`;

const InfoItemTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 140px;
  ${({ theme }) => theme.fontStyle.body_16_medium};
  color: ${({ theme }) => theme.sementicColors.text.tertiary};
`;

const InfoItemContent = styled.div`
  color: ${({ theme }) => theme.sementicColors.text.secondary};
  padding: 8px;
`;

const CardDetail = {
  PanelContainer,
  PanelControl,
  TopBar,
  CloseButton,
  Content,
  ContentWrapper,
  Header,
  Title,
  Info,
  InfoItem,
  InfoItemTitle,
  InfoItemContent,
};

export default CardDetail;
