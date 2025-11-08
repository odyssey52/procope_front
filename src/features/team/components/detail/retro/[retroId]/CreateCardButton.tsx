'use client';

import { IconPlus } from '@/shared/assets/icons/line';
import { theme } from '@/shared/styles/theme';
import Text from '@/shared/ui/Text';
import styled from 'styled-components';

interface CreateCardButtonProps {
  onClick: () => void;
}

const CreateCardButton = ({ onClick }: CreateCardButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      <IconPlus size={20} color={theme.sementicColors.icon.tertiary} />
      <Text variant="body_14_medium" color="tertiary">
        추가하기
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 312px;
  gap: 8px;
  padding: 8px 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  cursor: pointer;
`;

CreateCardButton.displayName = 'CreateCardButton';

export default CreateCardButton;
