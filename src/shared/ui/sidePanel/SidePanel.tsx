'use client';

import { IconDirectionRight1 } from '@/shared/assets/icons/line';
import { sidePanelActions, useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { elevation, zIndex } from '@/shared/styles/mixin';
import styled from 'styled-components';

const SidePanel = () => {
  const state = useSidePanelStore();
  if (!state.isOpen) {
    return null;
  }
  return (
    <Wrapper>
      <PanelControl>
        <IconDirectionRight1 onClick={() => sidePanelActions.close()} />
        {state.moreMenu && state.moreMenu}
      </PanelControl>
      {state.content}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 790px;
  max-width: calc(100vw - 316px);
  padding: 24px 0;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${elevation.shadow16};
  ${zIndex.layer4};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-left: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
`;

const PanelControl = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
`;

SidePanel.displayName = 'SidePanel';

export default SidePanel;
