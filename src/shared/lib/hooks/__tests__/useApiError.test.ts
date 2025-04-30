import { invalidateRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { renderHook } from '@testing-library/react';
import { AxiosError } from 'axios';
import useApiError from '../useApiError';

jest.mock('@/shared/lib/store/modal/toast', () => ({
  toastActions: {
    open: jest.fn(),
  },
}));

const mockLogout = jest.fn();
jest.mock('@/shared/lib/store/auth/auth', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    logout: mockLogout,
  })),
}));

jest.mock('@/features/auth/services/refresh/refreshTokenService', () => ({
  invalidateRefreshToken: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('useApiError', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle 400 error with custom message', () => {
    const { result } = renderHook(() => useApiError());
    const error = new AxiosError('Bad Request', '400', undefined, undefined, {
      status: 400,
      data: { message: '잘못된 요청입니다.' },
      statusText: 'Bad Request',
      headers: {},
      config: {} as any,
    });

    result.current.handleError(error);

    expect(toastActions.open).toHaveBeenCalledWith({
      title: '잘못된 요청입니다.',
      state: 'error',
    });
  });

  it('should handle 401 error and trigger logout', async () => {
    const { result } = renderHook(() => useApiError());
    const error = new AxiosError('Unauthorized', '401', undefined, undefined, {
      status: 401,
      data: { message: '인증 실패' },
      statusText: 'Unauthorized',
      headers: {},
      config: {} as any,
    });

    await result.current.handleError(error);

    expect(toastActions.open).toHaveBeenCalledWith({
      title: '로그인 세션이 만료되었습니다. 다시 로그인해주세요.',
      state: 'error',
    });
    expect(invalidateRefreshToken).toHaveBeenCalled();
    expect(mockLogout).toHaveBeenCalled();
  });

  it('should handle 403 error', () => {
    const { result } = renderHook(() => useApiError());
    const error = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { message: '권한 없음' },
      statusText: 'Forbidden',
      headers: {},
      config: {} as any,
    });

    result.current.handleError(error);

    expect(toastActions.open).toHaveBeenCalledWith({
      title: '해당 기능에 대한 권한이 없습니다.',
      state: 'error',
    });
  });

  it('should handle 500 error', () => {
    const { result } = renderHook(() => useApiError());
    const error = new AxiosError('Internal Server Error', '500', undefined, undefined, {
      status: 500,
      data: { message: '서버 오류' },
      statusText: 'Internal Server Error',
      headers: {},
      config: {} as any,
    });

    result.current.handleError(error);

    expect(toastActions.open).toHaveBeenCalledWith({
      title: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      state: 'error',
    });
  });

  it('should handle network error', () => {
    const { result } = renderHook(() => useApiError());
    const error = new AxiosError('Network Error', 'ERR_NETWORK', undefined, undefined, undefined);

    result.current.handleError(error);

    expect(toastActions.open).toHaveBeenCalledWith({
      title: '서버 연결이 원활하지 않습니다.',
      state: 'error',
    });
  });

  it('should handle unknown error', () => {
    const { result } = renderHook(() => useApiError());
    const error = new Error('Unknown error');

    result.current.handleError(error);

    expect(toastActions.open).toHaveBeenCalledWith({
      title: '네트워크 연결 오류 또는 기타 오류가 발생했습니다.',
      state: 'error',
    });
  });
});
