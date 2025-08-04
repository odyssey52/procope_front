'use client';

import { IconRemove } from '@/shared/assets/icons/line';
import { MESSAGES } from '@/shared/constants/messages';
import { useLogout } from '@/shared/hooks/useLogout';
import { toastActions } from '@/shared/store/modal/toast';
import useUserStore from '@/shared/store/user/user';
import Button from '@/shared/ui/button/Button';
import Modal from '@/shared/ui/modal/common/Modal';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import Text from '@/shared/ui/Text';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { invalidateRefreshToken } from '../auth/services/refresh/refreshTokenService';
import teamQueries from '../team/query/teamQueries';
import { deleteUser } from '../user/services/delete/userDeleteService';

interface DeleteModalProps {
  onClose: () => void;
}

const DeleteModal = ({ onClose }: DeleteModalProps) => {
  const { logout } = useLogout();
  const { id, email } = useUserStore();

  const [inputEmailValue, setInputEmailValue] = useState('');

  const { data: teamRoleCount } = useQuery({
    ...teamQueries.readTeamRoleCount({ role: 'ADMIN' }),
  });

  const deleteUserMutation = useMutation({ mutationFn: deleteUser });
  const invalidateRefreshTokenMutation = useMutation({ mutationFn: invalidateRefreshToken });

  const isEmailValid = inputEmailValue === email;

  const deleteAccount = async () => {
    if (isEmailValid && id) {
      try {
        await deleteUserMutation.mutateAsync({ id });
        toastActions.open({
          state: 'success',
          title: MESSAGES.TITLE_DELETE_ACCOUNT_SUCCESS,
          description: MESSAGES.DELETE_ACCOUNT_SUCCESS,
        });
        // await invalidateRefreshTokenMutation.mutateAsync();
        logout({ savePreviousPath: false });
      } catch (error) {
        toastActions.open({
          state: 'error',
          title: MESSAGES.DELETE_ACCOUNT_FAILED,
        });
      }
    }
  };

  const errorIcon = '/assets/icons/graphic/fill/error.svg';

  return (
    <Modal portalId="confirm-dialog">
      <Wrapper>
        <Content>
          <TextContainer>
            <TopSection>
              <Title>
                <div>
                  <Image src={errorIcon} width={36} height={36} alt="에러 아이콘 이미지" />
                  계정을 영구적으로 삭제하시겠습니까?
                </div>
                <button type="button" onClick={onClose} aria-label="닫기" style={{ cursor: 'pointer', fontSize: 0 }}>
                  <IconRemove size={40} />
                </button>
              </Title>
              <TextBox>
                <Text variant="heading_20" color="danger">
                  탈퇴 전에 주의사항 꼭 확인해 주세요.
                </Text>
                <Text variant="body_14_medium" color="tertiary">
                  1. 계정 삭제 작업은 실행 중간에 취소할 수 없습니다.
                  <br />
                  2. 관리자 또는 참여자로 있는 모든 팀은 계정을 삭제하더라도 팀에 작성한 내용은 보존이 됩니다.
                  <br />
                  3. 최고관리자로 있는 모든 팀은 삭제됩니다.
                </Text>
              </TextBox>
            </TopSection>
            <BottomSection>
              <BottomTextBox>
                <Text variant="heading_18">현재</Text>
                <Text variant="heading_18" color="brand">
                  {teamRoleCount?.number || 0}개
                </Text>
                <Text variant="heading_18">의 최고관리자로 참여하고 있는 팀이 있습니다.</Text>
              </BottomTextBox>
              <Placeholder
                value={inputEmailValue}
                valueHandler={setInputEmailValue}
                validation={inputEmailValue.length > 0 ? isEmailValid : undefined}
                errorDescription="이메일이 일치하지 않습니다."
                placeholder="usermail@procope.kr"
                label={{ text: '이메일을 입력하여 삭제를 진행해 주세요.', required: true }}
                maxLength={200}
              />
            </BottomSection>
          </TextContainer>
          <ButtonBox>
            <Button $type="tertiary" onClick={() => onClose()}>
              취소
            </Button>
            <Button $type="error" onClick={deleteAccount} disabled={!isEmailValid}>
              탈퇴하기
            </Button>
          </ButtonBox>
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default DeleteModal;

const Wrapper = styled.div`
  width: 608px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 32px;
  padding: 40px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.div`
  div {
    display: flex;
    gap: 8px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.fontStyle.heading_24};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ButtonBox = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  > button {
    flex-grow: 1;
  }
`;
const BottomTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 0px;
`;
