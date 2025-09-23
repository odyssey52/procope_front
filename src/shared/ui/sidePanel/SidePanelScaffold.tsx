'use client';

import React from 'react';
import styled from 'styled-components';

type SidePanelScaffoldProps = {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
};

const SidePanelScaffold = ({ title, actions, header, children }: SidePanelScaffoldProps) => {
  return (
    <PanelRoot>
      <TopBar>
        <div>{title}</div>
        <RightActions>{actions}</RightActions>
      </TopBar>
      {children}
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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 24px;
`;

const RightActions = styled.div`
  display: flex;
  gap: 8px;
`;

SidePanelScaffold.displayName = 'SidePanelScaffold';

export default SidePanelScaffold;
