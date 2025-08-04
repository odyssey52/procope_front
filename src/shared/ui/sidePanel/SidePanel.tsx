'use client';

import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { elevation, zIndex } from '@/shared/styles/mixin';
import styled from 'styled-components';

const SidePanel = () => {
  const state = useSidePanelStore();
  if (!state.isOpen) {
    return null;
  }
  return <Wrapper>{state.content}</Wrapper>;
};

const Wrapper = styled.div`
  width: 790px;
  max-width: calc(100vw - 360px);
  padding: 24px 0;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 16px;
  ${elevation.shadow16}
  ${zIndex.layer4};
`;

SidePanel.displayName = 'SidePanel';

export default SidePanel;
