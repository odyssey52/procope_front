'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import { useAuth } from '@/shared/hooks/useAuth';

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
  // useAuth 훅에서 인증 관련 상태 가져오기
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  // 인증 상태 모니터링 및 리다이렉트 처리
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const currentPath = window.location.pathname;
      // localStorage에 이전 경로 저장
      localStorage.setItem('previousPath', currentPath);
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  // 로딩 중일 때 스피너 표시
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // 인증된 경우에만 자식 컴포넌트 렌더링
  // 인증되지 않은 경우 null 반환 (리다이렉트 처리될 때까지)
  return isAuthenticated ? <>{children}</> : null;
}
