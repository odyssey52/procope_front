// AuthGuard.test.tsx
import { useUserInfoQuery } from '@/shared/hooks/useUserInfoQuery';
import { render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { AuthGuard } from './AuthGuard';

// 모킹 설정
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@/components/common/LoadingSpinner', () => ({
  LoadingSpinner: () => <div data-testid="loading-spinner">Loading...</div>,
}));

describe('AuthGuard', () => {
  const mockRouter = {
    replace: jest.fn(),
  };

  beforeEach(() => {
    // 각 테스트 전에 모든 모의 함수 초기화
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it('로딩 중일 때 LoadingSpinner를 표시해야 한다', () => {
    // useAuth 모의 구현
    (useUserInfoQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      accessToken: null,
      user: null,
    });

    render(
      <AuthGuard>
        <div>Protected Content</div>
      </AuthGuard>,
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('인증되지 않은 사용자는 로그인 페이지로 리다이렉트되어야 한다', async () => {
    // useAuth 모의 구현
    (useUserInfoQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      accessToken: null,
      user: null,
    });

    render(
      <AuthGuard>
        <div>Protected Content</div>
      </AuthGuard>,
    );

    await waitFor(() => {
      expect(mockRouter.replace).toHaveBeenCalledWith(expect.stringContaining('/login?from='));
    });
  });

  it('인증된 사용자는 보호된 컨텐츠를 볼 수 있어야 한다', () => {
    // useAuth 모의 구현
    (useUserInfoQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      accessToken: 'test-token',
      user: { id: 1, name: 'Test User' },
    });

    render(
      <AuthGuard>
        <div>Protected Content</div>
      </AuthGuard>,
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });
});
