'use client';

import { toastActions, useToastStore } from '@/shared/lib/store/modal/toast';
import { zIndex } from '@/shared/styles/mixin';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Portal from './common/Portal';

const ICON_URL = {
  success: {
    src: '/assets/icons/graphic/fill/check.svg',
    alt: '성공 아이콘 이미지',
  },
  error: {
    src: '/assets/icons/graphic/fill/error.svg',
    alt: '에러 아이콘 이미지',
  },
  default: {
    src: '/assets/icons/graphic/fill/help.svg',
    alt: '기본 아이콘 이미지',
  },
  info: {
    src: '/assets/icons/graphic/fill/information.svg',
    alt: '정보 아이콘 이미지',
  },
  warning: {
    src: '/assets/icons/graphic/fill/warning.svg',
    alt: '경고 아이콘 이미지',
  },
};

const Toast = () => {
  const { title, description, isOpen, autoHideDuration, state } = useToastStore((state) => state);
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
  const snackbarVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const toastVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: '-50%',
    },
  };
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <ToastBox
            $isOneLine={!description}
            variants={description ? snackbarVariants : toastVariants}
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
            <Image src={ICON_URL[state].src} width={24} height={24} alt={ICON_URL[state].alt} />
            <TextBox>
              <Text variant="body_14_medium">{title}</Text>
              {description && (
                <Text variant="caption_12_regular" color="secondary">
                  {description}
                </Text>
              )}
            </TextBox>
            {description && (
              <Close onClick={handleClose}>
                <Image src="/assets/icons/line/remove.svg" width={20} height={20} alt="닫기 아이콘 이미지" />
              </Close>
            )}
          </ToastBox>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const ToastBox = styled(motion.div)<{ $isOneLine: boolean }>`
  ${zIndex.layer3};
  position: fixed;
  display: flex;
  gap: 8px;
  align-items: start;
  ${({ $isOneLine }) =>
    $isOneLine ? 'bottom: 40px; left: 50%;' : 'top: 24px; right: 24px; max-width: 343px; width: 100%;'}
  gap: 16px;
  padding: ${({ $isOneLine }) => ($isOneLine ? '12px 16px' : '16px')};
  border-radius: ${({ $isOneLine }) => ($isOneLine ? '48px' : '12px')};
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
  align-self: center;
  gap: 4px;
  flex-grow: 1;
`;
const Close = styled.button`
  font-size: 0;
  cursor: pointer;
`;
export default Toast;
