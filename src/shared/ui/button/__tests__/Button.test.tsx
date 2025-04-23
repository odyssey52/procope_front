import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/styles/theme';
import Button from '../Button';

/**
 * Button 컴포넌트를 렌더링하는 헬퍼 함수
 * ThemeProvider로 감싸서 스타일 테마를 제공합니다
 */
const renderButton = (props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>,
  );
};

describe('Button 컴포넌트', () => {
  /**
   * 기본 렌더링 테스트
   * 버튼이 DOM에 정상적으로 렌더링되는지 확인합니다
   */
  it('버튼이 정상적으로 렌더링되어야 한다', () => {
    renderButton({ children: '테스트 버튼' });
    expect(screen.getByRole('button', { name: '테스트 버튼' })).toBeInTheDocument();
  });

  /**
   * 이벤트 핸들링 테스트
   * 버튼 클릭 시 onClick 핸들러가 호출되는지 확인합니다
   */
  it('버튼 클릭 이벤트가 정상적으로 동작해야 한다', async () => {
    const handleClick = jest.fn();
    renderButton({ children: '클릭 테스트', onClick: handleClick });

    await userEvent.click(screen.getByRole('button', { name: '클릭 테스트' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  /**
   * 접근성 테스트
   * disabled 상태에서 클릭 이벤트가 발생하지 않는지 확인합니다
   */
  it('disabled 상태의 버튼은 클릭되지 않아야 한다', async () => {
    const handleClick = jest.fn();
    renderButton({ children: '비활성화 버튼', onClick: handleClick, disabled: true });

    await userEvent.click(screen.getByRole('button', { name: '비활성화 버튼' }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  /**
   * UI 요소 테스트 - 왼쪽 아이콘
   * leftIcon prop이 전달되었을 때 아이콘이 정상적으로 렌더링되는지 확인합니다
   */
  it('leftIcon이 있는 경우 정상적으로 렌더링되어야 한다', () => {
    const TestIcon = () => <svg data-testid="test-left-icon" />;
    renderButton({ children: '아이콘 버튼', leftIcon: <TestIcon /> });

    expect(screen.getByTestId('test-left-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '아이콘 버튼' })).toBeInTheDocument();
  });

  /**
   * UI 요소 테스트 - 오른쪽 아이콘
   * rightIcon prop이 전달되었을 때 아이콘이 정상적으로 렌더링되는지 확인합니다
   */
  it('rightIcon이 있는 경우 정상적으로 렌더링되어야 한다', () => {
    const TestIcon = () => <svg data-testid="test-right-icon" />;
    renderButton({ children: '아이콘 버튼', rightIcon: <TestIcon /> });

    expect(screen.getByTestId('test-right-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '아이콘 버튼' })).toBeInTheDocument();
  });

  /**
   * 버튼 타입 테스트
   * secondary, outline, error 타입의 버튼이 각각 정상적으로 렌더링되는지 확인합니다
   */
  it('다양한 타입의 버튼이 정상적으로 렌더링되어야 한다', () => {
    const { rerender } = renderButton({ children: '버튼', $type: 'secondary' });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <Button $type="outline">버튼</Button>
      </ThemeProvider>,
    );
    expect(button).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <Button $type="error">버튼</Button>
      </ThemeProvider>,
    );
    expect(button).toBeInTheDocument();
  });

  /**
   * 버튼 크기 테스트
   * 36px, 48px 크기의 버튼이 정상적으로 렌더링되는지 확인합니다
   */
  it('다양한 크기의 버튼이 정상적으로 렌더링되어야 한다', () => {
    const { rerender } = renderButton({ children: '버튼', size: '36' });
    expect(screen.getByRole('button')).toHaveStyle('height: 36px');

    rerender(
      <ThemeProvider theme={theme}>
        <Button size="48">버튼</Button>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button')).toHaveStyle('height: 48px');
  });
});
