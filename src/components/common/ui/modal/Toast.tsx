import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { toastActions, useToastStore } from '@/store/modal/toast';
import Portal from './common/Portal';
import Text from '../Text';

const Toast = () => {
  const { title, description, isOpen, autoHideDuration } = useToastStore((state) => state);
  const handleClose = () => {
    toastActions.close();
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        toastActions.close();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  const toastVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <ToastBox
            variants={toastVariants}
            initial="hidden" // 컴포넌트가 시작할 위치와 투명도
            animate="visible" // 컴포넌트가 도달할 위치와 투명도
            exit="hidden" // 컴포넌트가 사라질 때 fade-out
            // transition={{
            //   type: 'spring', // 바운스 효과를 위한 스프링 애니메이션
            //   stiffness: 400, // 바운스의 탄성 강도 (값이 높을수록 강한 반동)
            //   damping: 100, // 바운스의 감쇠 정도 (값이 낮을수록 더 많은 반동)
            //   duration: 0.8, // 전체 애니메이션 시간
            //   ease: 'easeOut',
            // }}
          >
            <TextBox>
              <Text variant="body_14_medium">{title}</Text>
              <Text variant="caption_12_regular" color="secondary">
                {description}
              </Text>
            </TextBox>
            {/* <Text variant="label_2" color="cool_gray_200" weight="regular" className="message">
            </Text> */}
          </ToastBox>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const ToastBox = styled(motion.div)`
  z-index: 9999;
  position: fixed;
  top: 24px;
  right: 24px;
  max-width: 343px;
  width: 100%;
  gap: 16px;
  padding: 16px;
  .message {
    flex: 1;
    white-space: pre-wrap;
  }
  border-radius: 12px;
  border: 1px solid #f2f2f2;
  background: linear-gradient(180deg, rgba(249, 250, 251, 0.5) 0%, rgba(229, 234, 239, 0.5) 100%);

  /* glassEffect */
  box-shadow: 4px 4px 54px 0px rgba(1, 39, 88, 0.05);
  backdrop-filter: blur(6px);
`;
const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export default Toast;
