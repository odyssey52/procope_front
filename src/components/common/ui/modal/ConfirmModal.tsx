import { useConfirmModalStore } from '@/store/modal/confirmModal';
import styled from 'styled-components';
import { elevation, zIndex } from '@/styles/mixin';
import Modal from './common/Modal';

const ConfirmDialog = () => {
  const state = useConfirmModalStore();
  if (!state.isOpen) {
    return null;
  }
  return (
    <Modal portalId="confirm-dialog">
      <Wrapper>
        {state.icon}
        <Title>{state.title}</Title>
        <Description>{state.description}</Description>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  width: calc(380px - 32px);
  padding: 16px;
  padding-top: 52px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};
  ${elevation.shadow16}
  ${zIndex.layer4};
`;

const Title = styled.h2`
  ${({ theme }) => theme.fontStyle.heading_20};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
const Description = styled.p`
  ${({ theme }) => theme.fontStyle.body_14_medium};
  color: ${({ theme }) => theme.sementicColors.text.secondary};
`;
export default ConfirmDialog;
