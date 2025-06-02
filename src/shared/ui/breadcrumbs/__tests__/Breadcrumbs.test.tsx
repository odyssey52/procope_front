import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/navigation';
import { theme as originalTheme } from '@/shared/styles/theme';
import Breadcrumbs from '../Breadcrumbs';

// next/navigation의 useRouter를 모킹
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// 테스트용 wrapper 컴포넌트
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={originalTheme}>{children}</ThemeProvider>
);

describe('Breadcrumbs 컴포넌트', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('경로가 올바르게 렌더링되어야 합니다', () => {
    const paths = {
      홈: '/',
      팀: '/team',
      프로젝트: '/team/project',
    };

    render(<Breadcrumbs paths={paths} />, { wrapper: TestWrapper });

    // 모든 경로 이름이 화면에 표시되는지 확인
    expect(screen.getByText('홈')).toBeInTheDocument();
    expect(screen.getByText('팀')).toBeInTheDocument();
    expect(screen.getByText('프로젝트')).toBeInTheDocument();
  });

  it('마지막 항목을 제외한 모든 항목에 화살표 아이콘이 있어야 합니다', () => {
    const paths = {
      홈: '/',
      팀: '/team',
      프로젝트: '/team/project',
    };

    render(<Breadcrumbs paths={paths} />, { wrapper: TestWrapper });

    // 화살표 아이콘 요소들을 찾습니다
    const arrows = document.querySelectorAll('svg');
    expect(arrows.length).toBe(2); // 마지막 항목을 제외한 2개의 화살표
  });

  it('항목 클릭 시 해당 경로로 이동해야 합니다', () => {
    const paths = {
      홈: '/',
      팀: '/team',
    };

    render(<Breadcrumbs paths={paths} />, { wrapper: TestWrapper });

    // 첫 번째 항목 클릭
    fireEvent.click(screen.getByText('홈'));
    expect(mockPush).toHaveBeenCalledWith('/');

    // 두 번째 항목 클릭
    fireEvent.click(screen.getByText('팀'));
    expect(mockPush).toHaveBeenCalledWith('/team');
  });
});
