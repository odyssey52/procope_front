import { invalidateRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import { IconHome, IconOut, IconSetting } from '@/shared/assets/icons/line';
import useApiError from '@/shared/lib/hooks/useApiError';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { handleLogout } from '@/shared/lib/utils/auth';
import { elevation } from '@/shared/styles/mixin';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
  const router = useRouter();
  const { handleError } = useApiError();
  const [isOpen, setIsOpen] = useState(false);

  const invalidateRefreshTokenMutation = useMutation({ mutationFn: invalidateRefreshToken });

  const handleLogoutClick = async () => {
    try {
      await invalidateRefreshTokenMutation.mutateAsync();
      useAuthStore.getState().logout('manual');
      handleLogout({ savePreviousPath: false });
    } catch (error) {
      handleError(error);
    }
  };

  const valueHandler = (value: string) => {
    setIsOpen(false);
    if (value === '홈') router.push('/team');
    else if (value === '계정 설정') router.push('/accountSetting');
    else if (value === '로그아웃') handleLogoutClick();
  };

  const profileHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOptionList = [
    {
      leftContent: (
        <Avatar type={userData.picture ? 'profile' : 'initial'} image={userData.picture} nickname={userData.name} />
      ),
      value: userData.name || '',
      description: userData.roleName || '',
      span: 'long',
    },
    {
      leftContent: <IconHome />,
      value: '홈',
    },
    {
      leftContent: <IconSetting />,
      value: '계정 설정',
      span: 'short',
    },
    {
      leftContent: <IconOut />,
      value: '로그아웃',
    },
  ];

  return (
    <>
      <Avatar
        type={userData.picture ? 'profile' : 'initial'}
        image={userData.picture}
        nickname={userData.name}
        onClick={profileHandler}
      />
      {isOpen && (
        <SettingOption onClick={(e) => e.stopPropagation()} data-testid="setting-option">
          {selectOptionList.map((value) => (
            <div key={value.value}>
              <SelectOption
                leftContent={value.leftContent}
                description={value.description}
                value={value.value}
                valueHandler={valueHandler}
              />
              {value.span && <Span $span={value.span} />}
            </div>
          ))}
        </SettingOption>
      )}
    </>
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

const Span = styled.div<{ $span?: string }>`
  width: ${({ $span }) => $span && ($span === 'long' ? '240px' : '216px')};
  border-bottom: ${({ $span, theme }) => ($span ? `1px solid ${theme.sementicColors.border.primary}` : 'none')};
  margin: 0 auto;
  padding-top: 8px;
`;

export default UserArea;
