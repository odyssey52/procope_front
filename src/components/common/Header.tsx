'use client';

import userInfoQueries from '@/query/user/info/userInfoQueries';
import { invalidateRefreshToken } from '@/services/auth/refresh/refreshTokenService';
import useAuthStore from '@/store/auth/auth';
import useUserStore from '@/store/user/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './ui/button/Button';

const Header = () => {
  const { logout } = useAuthStore();
  const { data, isSuccess } = useQuery({ ...userInfoQueries.readUserInfo });
  const { setUser } = useUserStore();

  const invalidateRefreshTokenMutation = useMutation({ mutationFn: invalidateRefreshToken });

  const handleLogout = async () => {
    try {
      await invalidateRefreshTokenMutation.mutateAsync();
      logout();
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃 중 문제가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const { id, name, email, username } = data.userContext;
      setUser({ id, name, email, username });
    }
  }, [data, isSuccess]);
  return (
    <Wrapper>
      <Logo type="icon" size={36} />
      <Button onClick={handleLogout}>로그아웃</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  padding: 8px 24px;
`;

Header.displayName = 'Header';

export default Header;
