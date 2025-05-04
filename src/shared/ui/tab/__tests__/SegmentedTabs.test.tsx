import { render, screen } from '@testing-library/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/styles/theme';
import SegmentedTabs from '../SegmentedTabs';

// next/navigation 모의(mock)
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('SegmentedTabs', () => {
  const mockTabs = [
    { title: '탭1', href: '/test?tab=1' },
    { title: '탭2', href: '/test?tab=2' },
    { title: '탭3', href: '/test?tab=3' },
  ];

  beforeEach(() => {
    // 기본 모의 값 설정
    (usePathname as jest.Mock).mockReturnValue('/test');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('tab=1'));
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    });
  });

  it('기본 렌더링이 올바르게 되는지 확인', () => {
    renderWithTheme(<SegmentedTabs tabs={mockTabs} />);

    // 모든 탭이 렌더링되는지 확인
    mockTabs.forEach((tab) => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it('현재 URL에 따라 올바른 탭이 선택되는지 확인', () => {
    renderWithTheme(<SegmentedTabs tabs={mockTabs} />);

    // 첫 번째 탭이 선택된 상태인지 확인
    const firstTab = screen.getByText('탭1');
    expect(firstTab).toHaveAttribute('aria-selected', 'true');
  });

  it('URL이 변경될 때 탭 선택 상태가 올바르게 업데이트되는지 확인', () => {
    // 첫 번째 렌더링
    const { rerender } = renderWithTheme(<SegmentedTabs tabs={mockTabs} />);

    // URL 변경 모의
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('tab=2'));

    // 리렌더링
    rerender(
      <ThemeProvider theme={theme}>
        <SegmentedTabs tabs={mockTabs} />
      </ThemeProvider>,
    );

    // 두 번째 탭이 선택된 상태인지 확인
    const secondTab = screen.getByText('탭2');
    expect(secondTab).toHaveAttribute('aria-selected', 'true');
  });

  it('쿼리 파라미터가 없는 경우에도 정상 동작하는지 확인', () => {
    // 쿼리 파라미터가 없는 URL 모의
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams(''));
    (usePathname as jest.Mock).mockReturnValue('/test');

    renderWithTheme(<SegmentedTabs tabs={mockTabs} />);

    // 모든 탭이 선택되지 않은 상태인지 확인
    mockTabs.forEach((tab) => {
      const tabElement = screen.getByText(tab.title);
      expect(tabElement).toHaveAttribute('aria-selected', 'false');
    });
  });

  it('pathname이 일치하지 않는 경우 탭이 선택되지 않는지 확인', () => {
    // 다른 pathname 모의
    (usePathname as jest.Mock).mockReturnValue('/other');

    renderWithTheme(<SegmentedTabs tabs={mockTabs} />);

    // 모든 탭이 선택되지 않은 상태인지 확인
    mockTabs.forEach((tab) => {
      const tabElement = screen.getByText(tab.title);
      expect(tabElement).toHaveAttribute('aria-selected', 'false');
    });
  });
});
