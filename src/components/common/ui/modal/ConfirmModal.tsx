import { useConfirmModalStore } from '@/store/modal/confirmModal';
import styled from 'styled-components';
import { elevation, zIndex } from '@/styles/mixin';
import Modal from './common/Modal';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Text from '../Text';

const ConfirmDialog = () => {
  const state = useConfirmModalStore();
  const errorIcon = '/assets/icons/graphic/fill/error.svg';
  if (!state.isOpen) {
    return null;
  }
  return (
    <Modal portalId="confirm-dialog">
      <Wrapper>
        <Content>
          {state.type === 'error' ? <Icon src={errorIcon} width={80} /> : state.icon}
          <TextBox>
            <Text variant="heading_20">{state.title}</Text>
            <Text variant="body_14_medium">{state.description}</Text>
          </TextBox>
        </Content>
        <ButtonBox>
          <Button $type="tertiary" $size="48" onClick={state.onCancel}>
            {state.cancelLabel}
          </Button>
          <Button $size="48" onClick={state.onConfirm} $type={state.type}>
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
  padding: 8px 0;
`;
const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
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