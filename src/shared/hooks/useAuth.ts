import { useEffect, useState } from 'react';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { useQuery } from '@tanstack/react-query';
import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import type { ReadUserInfoResponse } from '@/features/user/services/info/userInfoService.type';

interface UseAuthReturn {
  accessToken: string | null;
  isLoading: boolean;
  user: ReadUserInfoResponse | null;
}

/**
 * 인증 상태를 관리하는 커스텀 훅
 *
 * @description
 * 이 훅은 다음과 같은 기능을 제공합니다:
 * 1. 인증 상태 확인 (accessToken)
 * 2. 로딩 상태 관리 (isLoading)
 * 3. 사용자 정보 조회 및 캐싱 (React Query 사용)
 *
 * @example
 * ```tsx
 * const MyProtectedComponent = () => {
 *   const { accessToken, isLoading, user } = useAuth();
 *
 *   if (isLoading) return <LoadingSpinner />;
 *   if (!accessToken) return null;
 *
 *   return <div>Welcome, {user?.userContext.name}!</div>;
 * };
 * ```
 *
 * @returns {Object} 인증 관련 상태와 데이터
 * @property {string | null} accessToken - 사용자의 인증 토큰
 * @property {boolean} isLoading - 인증 상태 확인 중 여부
 * @property {ReadUserInfoResponse | null} user - 전체 사용자 정보
 */
export function useAuth(): UseAuthReturn {
  const { accessToken } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  const { data: userInfo, isSuccess } = useQuery({
    ...userInfoQueries.readUserInfo(accessToken || ''),
    enabled: !!accessToken,
  });

  useEffect(() => {
    setIsLoading(!isSuccess && !!accessToken);
  }, [isSuccess, accessToken]);

  return {
    accessToken,
    isLoading,
    user: userInfo || null,
  };
}
