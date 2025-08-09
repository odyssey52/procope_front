import { invalidateRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import { IconHome, IconOut, IconSetting } from '@/shared/assets/icons/line';
import { MESSAGES } from '@/shared/constants/messages';
import useApiError from '@/shared/hooks/useApiError';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useLogout } from '@/shared/hooks/useLogout';
import { toastActions } from '@/shared/store/modal/toast';
import { elevation, zIndex } from '@/shared/styles/mixin';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import SelectOption from '../select/SelectOption';

interface UserAreaProps {
  userData: {
    name?: string;
    picture?: string;
    roleName?: string;
  };
}

const UserArea = ({ userData }: UserAreaProps) => {
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const router = useRouter();
  const { handleError } = useApiError();
  const { logout } = useLogout();

  const [isOpen, setIsOpen] = useState(false);

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
    <Wrapper ref={ref}>
      <Avatar
        type={userData.picture ? 'profile' : 'initial'}
        image={userData.picture}
        nickname={userData.name}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <SettingOption onClick={(e) => e.stopPropagation()} data-testid="setting-option">
          {selectOptionList.map((value) => (
            <div key={value.value}>
              <SelectOption
                leftContent={value.leftContent}
                description={value.description}
                onClick={() => valueHandler(value.value)}
                display={value.value}
              />
              {value.size && <Line $size={value.size} />}
            </div>
          ))}
        </SettingOption>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

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
  ${zIndex.layer3};
  ${elevation.shadow4}
`;

const Line = styled.div<{ $size?: string }>`
  width: ${({ $size }) => $size && ($size === 'long' ? '240px' : '216px')};
  border-bottom: ${({ $size, theme }) => ($size ? `1px solid ${theme.sementicColors.border.primary}` : 'none')};
  margin: 0 auto;
  padding-top: 8px;
`;

export default UserArea;
