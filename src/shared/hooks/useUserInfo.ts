import useAuthStore from '@/shared/store/auth/auth';
import { useQuery } from '@tanstack/react-query';
import userInfoQueries from '@/features/user/query/info/userInfoQueries';
import type { ReadUserInfoResponse } from '@/features/user/services/info/userInfoService.type';
import { useEffect, useRef } from 'react';
import useApiError from './useApiError';

/**
 * 사용자 정보를 관리하는 커스텀 훅
 *
 * @description
 * 이 훅은 다음과 같은 기능을 제공합니다:
 * 1. 사용자 정보 조회 및 캐싱 (React Query 사용)
 * 2. 자동 에러 처리 (토스트 메시지)
 * 3. useQuery의 모든 속성과 메서드 노출
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { data: user, isLoading, isError, refetch } = useUserInfo();
 *
 *   if (isLoading) return <LoadingSpinner />;
 *   if (isError) return <ErrorComponent onRetry={refetch} />;
 *
 *   return <div>Welcome, {user?.userContext.name}!</div>;
 * };
 * ```
 *
 * @returns {UseQueryResult} React Query의 useQuery 반환값과 동일
 * @property {ReadUserInfoResponse | undefined} data - 사용자 정보
 * @property {boolean} isLoading - 로딩 상태
 * @property {boolean} isError - 에러 상태
 * @property {Error | null} error - 에러 객체
 * @property {boolean} isSuccess - 성공 상태
 * @property {boolean} isFetching - 데이터 가져오는 중
 * @property {boolean} isRefetching - 수동 갱신 중
 * @property {() => Promise<any>} refetch - 수동 갱신 함수
 */
export function useUserInfo() {
  const { accessToken } = useAuthStore();
  const { handleError } = useApiError();
  const handleErrorRef = useRef(handleError);

  const query = useQuery({
    ...userInfoQueries.readUserInfo(accessToken || ''),
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (query.error) {
      handleErrorRef.current(query.error);
    }
  }, [query.error]);
  return query;
}
