'use client';

import { useAuth } from '@/shared/hooks/useAuth';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { handleLogout } from '@/shared/lib/utils/auth';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
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
  const { accessToken } = useAuth();
  const { setAccessToken, logoutType } = useAuthStore();
  const [isRefreshing, setIsRefreshing] = useState(true);

  const {
    data: accessTokenWithRefreshToken,
    isSuccess,
    isError,
  } = useQuery({
    ...refreshTokenQueries.accessTokenWithRefreshToken,
    enabled: !accessToken, // accessToken 없을 때만 실행
    retry: false,
  });

  useEffect(() => {
    if (accessToken) {
      setIsRefreshing(false);
    }
    if (isSuccess && accessTokenWithRefreshToken) {
      setAccessToken(accessTokenWithRefreshToken); // 상태에 저장
    }
    if (isSuccess || isError) {
      setIsRefreshing(false); // 리프레시 완료
    }
    if (!accessToken) {
      if (isError && !isSuccess) {
        const savePreviousPath = logoutType !== 'manual';
        console.log(logoutType);
        handleLogout({ savePreviousPath });
      }
    }
  }, [isSuccess, isError, accessTokenWithRefreshToken, setAccessToken, accessToken]);

  if (isRefreshing) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}
