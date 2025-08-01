import { invalidateRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import { IconHome, IconOut, IconSetting } from '@/shared/assets/icons/line';
import { MESSAGES } from '@/shared/constants/messages';
import useApiError from '@/shared/hooks/useApiError';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useLogout } from '@/shared/hooks/useLogout';
import { toastActions } from '@/shared/store/modal/toast';
import { elevation } from '@/shared/styles/mixin';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import SelectOption from '../select/SelectOption';

interface UserAreaProps {
  userData: {
    name?: string;
    picture?: string;
    roleName?: string;
  };
  closeUserArea: () => void;
}

const UserArea = ({ userData, closeUserArea }: UserAreaProps) => {
  const router = useRouter();
  const { handleError } = useApiError();
  const ref = useClickOutside<HTMLDivElement>(closeUserArea);
  const { logout } = useLogout();
  const invalidateRefreshTokenMutation = useMutation({ mutationFn: invalidateRefreshToken });

  const handleLogoutClick = async () => {
    try {
      await invalidateRefreshTokenMutation.mutateAsync();
      logout({ savePreviousPath: false });
      toastActions.open({
        state: 'success',
        title: MESSAGES.LOGOUT_SUCCESS,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const valueHandler = (value: string | ReactNode) => {
    closeUserArea();
    if (value === '홈') router.push('/team');
    else if (value === '계정 설정') router.push('/accountSetting');
    else if (value === '로그아웃') handleLogoutClick();
  };

  const selectOptionList = [
    {
      leftContent: (
        <Avatar type={userData.picture ? 'profile' : 'initial'} image={userData.picture} nickname={userData.name} />
      ),
      value: userData.name || '',
      description: userData.roleName || '',
      size: 'long',
    },
    {
      leftContent: <IconHome />,
      value: '홈',
    },
    {
      leftContent: <IconSetting />,
      value: '계정 설정',
      size: 'short',
    },
    {
      leftContent: <IconOut />,
      value: '로그아웃',
    },
  ];

  return (
    <SettingOption ref={ref} onClick={(e) => e.stopPropagation()} data-testid="setting-option">
      {selectOptionList.map((value) => (
        <div key={value.value}>
          <SelectOption
            leftContent={value.leftContent}
            description={value.description}
            value={value.value}
            valueHandler={valueHandler}
          />
          {value.size && <Line $size={value.size} />}
        </div>
      ))}
    </SettingOption>
  );
};

const SettingOption = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: calc(100% + 4px);
  right: 24px;
  width: 240px;
  background-color: white;
  border-radius: 12px;
  padding: 12px 0px;
  z-index: 1000;
  ${elevation.shadow4}
`;

const Line = styled.div<{ $size?: string }>`
  width: ${({ $size }) => $size && ($size === 'long' ? '240px' : '216px')};
  border-bottom: ${({ $size, theme }) => ($size ? `1px solid ${theme.sementicColors.border.primary}` : 'none')};
  margin: 0 auto;
  padding-top: 8px;
`;

export default UserArea;
