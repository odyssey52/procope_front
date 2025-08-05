'use client';

import { IconDirectionRight1 } from '@/shared/assets/icons/line';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { sidePanelActions, useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { elevation, zIndex } from '@/shared/styles/mixin';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const SidePanel = () => {
  const state = useSidePanelStore();
  const ref = useClickOutside<HTMLDivElement>(() => sidePanelActions.close());
  return (
    <AnimatePresence mode="wait">
      {state.isOpen && (
        <Wrapper
          ref={ref}
          $isOpen={state.isOpen}
          initial={{ right: '-100%' }}
          animate={{ right: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
          exit={{ right: '-100%', transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
          <PanelControl>
            <CloseButton onClick={sidePanelActions.close}>
              <IconDirectionRight1 />
            </CloseButton>
            {state.moreMenu && state.moreMenu}
          </PanelControl>
          {state.content}
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

const Wrapper = styled(motion.div)<{ $isOpen: boolean }>`
  width: 790px;
  max-width: calc(100vw - 316px);
  padding: 24px 0;
  position: fixed;
  top: 55px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${elevation.shadow16};
  ${zIndex.layer4};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-left: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
`;

const PanelControl = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

SidePanel.displayName = 'SidePanel';

export default SidePanel;
