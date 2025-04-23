import { theme } from '@/shared/styles/theme';
import { useQuery } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from 'styled-components';
import { create } from 'zustand';
import Header from './Header';

// 모킹 설정

// // styled-components의 ThemeProvider 모킹
// jest.mock('styled-components', () => ({
//   ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
// }));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

// Mock stores
const mockAuthStore = create(() => ({
  logout: jest.fn(),
}));

const mockUserStore = create(() => ({
  setUser: jest.fn(),
}));

// Mock the store hooks
jest.mock('@/store/auth/auth', () => ({
  __esModule: true,
  default: () => mockAuthStore.getState(),
}));

jest.mock('@/store/user/user', () => ({
  __esModule: true,
  default: () => mockUserStore.getState(),
}));

describe('Header', () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const mockUserData = {
    userContext: {
      id: 1,
      name: '테스트 사용자',
      email: 'test@example.com',
      username: 'testuser',
      picture: 'https://example.com/avatar.jpg',
    },
    roleInfo: {
      name: '테스트 역할',
    },
  };

  beforeEach(() => {
    // 라우터 모의 설정
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    // useQuery 모의 설정
    (useQuery as jest.Mock).mockReturnValue({
      data: mockUserData,
      isSuccess: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    mockAuthStore.setState({ logout: jest.fn() });
    mockUserStore.setState({ setUser: jest.fn() });
  });

  describe('기본 렌더링', () => {
    it('로고가 올바르게 렌더링 되어야 한다', () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>,
      );

      const logo = screen.getByTestId('logo');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('width', '36');
    });

    // 테스트 케이스
    it('사용자 아바타가 올바르게 렌더링되어야 한다', () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>,
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
    });

    it('초기 상태에서는 사용자 설정 옵션이 보이지 않아야 한다', () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>,
      );

      const settingOption = screen.queryByTestId('setting-option');
      expect(settingOption).not.toBeInTheDocument();
    });

    it('아바타 클릭 시 사용자 설정 옵션이 표시되어야 한다', () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>,
      );

      const avatar = screen.getByTestId('avatar');
      fireEvent.click(avatar);

      const settingOption = screen.getByTestId('setting-option');
      expect(settingOption).toBeInTheDocument();
    });

    it('사용자 설정 옵션에 사용자 정보가 올바르게 표시되어야 한다', () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>,
      );
      const avatar = screen.getByTestId('avatar');
      fireEvent.click(avatar);

      const settingOption = screen.getByTestId('setting-option');
      expect(settingOption).toHaveTextContent(mockUserData.userContext.name);
      expect(settingOption).toHaveTextContent(mockUserData.roleInfo.name);
    });
  });
});
