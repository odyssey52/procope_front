import { useConfirmModalStore } from '@/store/modal/confirmModal';
import styled from 'styled-components';
import { elevation, zIndex } from '@/styles/mixin';
import Modal from './common/Modal';
import Button from '../button/Button';

const ConfirmDialog = () => {
  const state = useConfirmModalStore();
  if (!state.isOpen) {
    return null;
  }
  return (
    <Modal portalId="confirm-dialog">
      <Wrapper>
        <Content>
          {state.icon}
          <TextBox>
            <Title>{state.title}</Title>
            <Description>{state.description}</Description>
          </TextBox>
        </Content>
        <ButtonBox>
          <Button $type="tertiary" $size="48" onClick={state.onConfirm}>
            {state.cancelLabel}
          </Button>
          <Button $size="48" onClick={state.onCancel}>
            {state.confirmLabel}
          </Button>
        </ButtonBox>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 450px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};
  ${elevation.shadow16}
  ${zIndex.layer4};
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Title = styled.h2`
  ${({ theme }) => theme.fontStyle.heading_20};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
const Description = styled.p`
  ${({ theme }) => theme.fontStyle.body_14_medium};
  color: ${({ theme }) => theme.sementicColors.text.secondary};
`;
const ButtonBox = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  > button {
    flex-grow: 1;
  }
`;
export default ConfirmDialog;
