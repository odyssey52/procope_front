'use client';

import { MESSAGES } from '@/shared/constants/messages';
import { useLogout } from '@/shared/hooks/useLogout';
import useAuthStore from '@/shared/store/auth/auth';
import { toastActions } from '@/shared/store/modal/toast';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useMemo, useState } from 'react';
import { refreshTokenQueries } from '../../query/refresh/refreshTokenQueries';

/**
 * 인증이 필요한 페이지를 보호하는 컴포넌트
 *
 * @description
 * 동작 프로세스:
 * 1. 페이지 접근 시 인증 상태 확인
 * 2. 미인증 상태면 현재 경로를 저장하고 로그인 페이지로 리다이렉트
 * 3. 로그인 후 원래 페이지로 복귀 가능
 *
 * 주의사항:
 * - localhost에서 새로고침 시 쿠키 도메인(.procope.kr) 문제로 로그인 페이지로 리다이렉트됨
 * - local.procope.kr 도메인으로 개발 필요
 *
 * @param {React.ReactNode} children - 보호할 컴포넌트/페이지
 */

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { accessToken, setAccessToken, logoutType, isRefreshing, setRefreshing } = useAuthStore();
  const { logout } = useLogout();

  const isEnabled = useMemo(() => {
    return !accessToken && logoutType !== 'manual';
  }, [accessToken, logoutType]);

  const {
    data: newAccessToken,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    ...refreshTokenQueries.accessTokenWithRefreshToken,
    enabled: isEnabled,
    retry: false,
  });

  useEffect(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    if (accessToken) setRefreshing(false);
    if (isSuccess && newAccessToken && !accessToken) setAccessToken(newAccessToken);
    if (isSuccess || isError) setRefreshing(false);

    if (!accessToken) {
      if (isError && !isSuccess) {
        const savePreviousPath = logoutType !== 'manual';
        toastActions.open({
          state: 'error',
          title: MESSAGES.ERROR.UNAUTHORIZED_TITLE,
        });
        logout({ savePreviousPath });
      }
    }
  }, [isSuccess, isError, newAccessToken, setAccessToken, accessToken]);

  if (isRefreshing || isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <LoadingSpinner />
      </div>
    );
  }
  if (isError) {
    return null;
  }
  return <>{children}</>;
}
