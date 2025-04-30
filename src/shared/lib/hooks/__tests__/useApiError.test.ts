import useAuthStore from '@/shared/lib/store/auth/auth';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { ErrorType } from '@/shared/types/error';
import { renderHook } from '@testing-library/react';
import { AxiosError } from 'axios';
import useApiError from '../useApiError';

// 모듈 모킹
jest.mock('@/shared/lib/store/modal/toast');
jest.mock('@/shared/lib/store/auth/auth', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('useApiError', () => {
  const mockLogout = jest.fn();
  const mockToastOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (toastActions.open as jest.Mock).mockImplementation(mockToastOpen);
    (useAuthStore as unknown as jest.Mock).mockReturnValue({ logout: mockLogout });
  });

  const createAxiosError = (status: number, message?: string): AxiosError => {
    const error = new AxiosError();
    error.response = {
      status,
      data: { message },
      statusText: '',
      headers: {},
      config: {} as any,
    };
    return error;
  };

  const testErrorHandling = async (
    status: number,
    expectedMessage: string,
    expectedType: ErrorType,
    additionalChecks?: () => void,
  ) => {
    const { result } = renderHook(() => useApiError());
    const error = createAxiosError(status);
    await result.current.handleError(error);

    expect(mockToastOpen).toHaveBeenCalledWith({
      title: expectedMessage,
      state: 'error',
    });

    if (additionalChecks) {
      additionalChecks();
    }
  };

  it('400 에러를 올바르게 처리한다', async () => {
    await testErrorHandling(400, '잘못된 요청입니다.', 'BAD_REQUEST');
  });

  it('401 에러를 올바르게 처리한다', async () => {
    await testErrorHandling(401, '로그인 세션이 만료되었습니다. 다시 로그인해주세요.', 'UNAUTHORIZED', () => {
      expect(mockLogout).toHaveBeenCalled();
    });
  });

  it('403 에러를 올바르게 처리한다', async () => {
    await testErrorHandling(403, '해당 기능에 대한 권한이 없습니다.', 'FORBIDDEN');
  });

  it('404 에러를 올바르게 처리한다', async () => {
    await testErrorHandling(404, '요청한 리소스를 찾을 수 없습니다.', 'NOT_FOUND');
  });

  it('409 에러를 올바르게 처리한다', async () => {
    await testErrorHandling(409, '이미 존재하는 데이터입니다.', 'CONFLICT');
  });

  it('500 에러를 올바르게 처리한다', async () => {
    await testErrorHandling(500, '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', 'SERVER_ERROR');
  });

  it('네트워크 에러를 올바르게 처리한다', async () => {
    const { result } = renderHook(() => useApiError());
    const error = new AxiosError();
    error.message = 'Network Error';
    await result.current.handleError(error);

    expect(mockToastOpen).toHaveBeenCalledWith({
      title: '서버 연결이 원활하지 않습니다.',
      state: 'error',
    });
  });

  it('알 수 없는 에러를 올바르게 처리한다', async () => {
    const { result } = renderHook(() => useApiError());
    const error = new Error('Unknown error');
    await result.current.handleError(error);

    expect(mockToastOpen).toHaveBeenCalledWith({
      title: '네트워크 연결 오류 또는 기타 오류가 발생했습니다.',
      state: 'error',
    });
  });
});
