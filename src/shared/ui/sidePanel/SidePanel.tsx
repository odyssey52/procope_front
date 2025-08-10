'use client';

import { IconDirectionRight1 } from '@/shared/assets/icons/line';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { elevation, zIndex } from '@/shared/styles/mixin';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const SidePanel = () => {
  const { isOpen, cardId, content, moreMenu, skipExitAnimation, close } = useSidePanelStore();
  const ref = useClickOutside<HTMLDivElement>(() => close());

  // (옵션) 외부에서 handleSwitchCard 호출해서 카드 전환 가능

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Wrapper
          ref={ref}
          key={cardId ?? 'sidepanel'}
          $isOpen={isOpen}
          initial={{ right: '-100%' }}
          animate={{ right: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
          exit={skipExitAnimation ? undefined : { right: '-100%', transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
          <PanelControl>
            <CloseButton onClick={close}>
              <IconDirectionRight1 />
            </CloseButton>
            {moreMenu}
          </PanelControl>
          {content}
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

const Wrapper = styled(motion.div)<{ $isOpen: boolean }>`
  width: 790px;
  max-width: calc(100vw - 316px);
  padding-top: 24px;
  position: fixed;
  top: 55px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${elevation.shadow16};
  ${zIndex.layer4};
  height: calc(100vh - 55px);
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
