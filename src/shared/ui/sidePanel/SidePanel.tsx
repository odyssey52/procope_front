'use client';

import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import { elevation, zIndex } from '@/shared/styles/mixin';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const SidePanel = () => {
  const { panels, skipEnterAnimation } = useSidePanelStore();

  return (
    <AnimatePresence>
      {panels.map((panel, index) => (
        <Wrapper
          key={panel.id}
          $isOpen
          $stackIndex={index}
          initial={skipEnterAnimation ? { right: 0 } : { right: '-100%' }}
          animate={{
            right: 0,
            transition: skipEnterAnimation
              ? { duration: 0 } // 애니메이션 스킵
              : { duration: 0.2, ease: 'easeInOut' }, // 정상 애니메이션
          }}
          exit={{ right: '-100%', transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
          {panel.content}
        </Wrapper>
      ))}
    </AnimatePresence>
  );
};

const Wrapper = styled(motion.div)<{ $isOpen: boolean; $stackIndex: number }>`
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

  /* 스택 인덱스에 따른 z-index 조정 */
  z-index: ${({ $stackIndex }) => 1000 + $stackIndex};
`;

SidePanel.displayName = 'SidePanel';

export default SidePanel;
