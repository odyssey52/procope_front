'use client';

import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { elevation, zIndex } from '@/shared/styles/mixin';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const SidePanel = () => {
  const { isOpen, cardId, content, skipEnterAnimation } = useSidePanelStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          key={cardId ?? 'sidepanel'}
          $isOpen={isOpen}
          initial={skipEnterAnimation ? { right: 0 } : { right: '-100%' }}
          animate={{
            right: 0,
            transition: skipEnterAnimation
              ? { duration: 0 } // 애니메이션 스킵
              : { duration: 0.2, ease: 'easeInOut' }, // 정상 애니메이션
          }}
          exit={{ right: '-100%', transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
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

  height: calc(100vh - 55px);
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-left: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  ${zIndex.layer1};
`;

SidePanel.displayName = 'SidePanel';

export default SidePanel;
