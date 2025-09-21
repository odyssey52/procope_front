'use client';

import React from 'react';
import styled from 'styled-components';

type SidePanelScaffoldProps = {
  title?: React.ReactNode; // Top-left area (e.g., Close button)
  actions?: React.ReactNode; // Top-right actions (e.g., More menu)
  header?: React.ReactNode; // Below TopBar, above content (meta/info)
  children: React.ReactNode; // Scrollable content body
  footer?: React.ReactNode; // Optional footer
  stickyHeader?: boolean; // Keep header visible on scroll
  contentPadding?: string; // e.g., '24px 48px'
};

const SidePanelScaffold = ({
  title,
  actions,
  header,
  children,
  footer,
  stickyHeader = false,
  contentPadding = '24px 48px',
}: SidePanelScaffoldProps) => {
  return (
    <PanelRoot>
      <HeaderArea $sticky={stickyHeader}>
        {(title || actions) && (
          <TopBar>
            <div>{title}</div>
            <RightActions>{actions}</RightActions>
          </TopBar>
        )}
        {header}
      </HeaderArea>
      <ContentArea style={{ padding: contentPadding }}>{children}</ContentArea>
      {footer && <FooterArea>{footer}</FooterArea>}
    </PanelRoot>
  );
};

const PanelRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  overflow: hidden;
`;

const HeaderArea = styled.div<{ $sticky: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ $sticky }) => ($sticky ? 'position: sticky; top: 0; background: inherit; z-index: 1;' : '')}
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 24px;
  padding: 0 24px;
`;

const RightActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ContentArea = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FooterArea = styled.div`
  border-top: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  padding: 12px 24px;
`;

SidePanelScaffold.displayName = 'SidePanelScaffold';

export default SidePanelScaffold;
