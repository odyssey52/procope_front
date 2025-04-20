import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

// 콘솔 에러 메시지 억제를 위한 설정
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe('ErrorBoundary', () => {
  // 정상 동작 테스트
  it('자식 컴포넌트가 에러가 없을 때 정상적으로 렌더링되어야 한다', () => {
    const ChildComponent = () => <div>정상 작동하는 컴포넌트</div>;

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('정상 작동하는 컴포넌트')).toBeInTheDocument();
  });

  // 에러 발생 시 폴백 UI 테스트
  it('자식 컴포넌트에서 에러 발생 시 에러 메시지를 표시해야 한다', () => {
    const ErrorComponent = () => {
      throw new Error('의도적인 테스트 에러');
      return null;
    };

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
  });

  // 에러 로깅 테스트
  it('에러 발생 시 콘솔에 에러가 기록되어야 한다', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const error = new Error('의도적인 테스트 에러');

    const ErrorComponent = () => {
      throw error;
      return null;
    };

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error caught in Error Boundary:', error, expect.any(Object));

    consoleErrorSpy.mockRestore();
  });

  // 중첩된 에러 바운더리 테스트
  it('중첩된 ErrorBoundary에서 가장 가까운 에러 바운더리가 에러를 처리해야 한다', () => {
    const ErrorComponent = () => {
      throw new Error('의도적인 테스트 에러');
      return null;
    };

    render(
      <ErrorBoundary>
        <div>외부 컴포넌트</div>
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      </ErrorBoundary>,
    );

    // 외부 ErrorBoundary의 컨텐츠는 여전히 표시되어야 함
    expect(screen.getByText('외부 컴포넌트')).toBeInTheDocument();
    // 내부 ErrorBoundary의 에러 메시지가 표시되어야 함
    expect(screen.getByText('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
  });

  // 여러 자식 컴포넌트 중 하나만 에러가 발생하는 경우
  it('여러 자식 중 하나에서 에러가 발생해도 다른 ErrorBoundary의 자식은 정상 동작해야 한다', () => {
    const NormalComponent = () => <div>정상 컴포넌트</div>;
    const ErrorComponent = () => {
      throw new Error('의도적인 테스트 에러');
      return null;
    };

    render(
      <div>
        <ErrorBoundary>
          <NormalComponent />
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      </div>,
    );

    expect(screen.getByText('정상 컴포넌트')).toBeInTheDocument();
    expect(screen.getByText('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
  });
});
