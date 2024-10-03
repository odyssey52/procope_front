import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/common/ErrorBoundary';
import ConfirmDialog from './components/common/ui/modal/ConfirmModal';
import Toast from './components/common/ui/modal/Toast';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

// 컴포넌트 lazy 로딩
const Login = lazy(() => import('@/components/pages/login/Login'));
const NaverCallback = lazy(() => import('@/components/pages/login/NaverCallback'));
const Onboarding = lazy(() => import('@/components/pages/onboarding/Onboarding'));
const Team = lazy(() => import('@/components/pages/team/Team'));
const TeamCreate = lazy(() => import('@/components/pages/team/create/TeamCreate'));
const TeamCreateDone = lazy(() => import('@/components/pages/team/create/done/TeamCreateDone'));

// Query Client 생성
const queryClient = new QueryClient();

// Router 설정
const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/login/naver/callback', element: <NaverCallback /> },
  { path: '/onboarding', element: <Onboarding /> },
  { path: '/team', element: <Team /> },
  { path: '/team/create', element: <TeamCreate /> },
  { path: '/team/create/done', element: <TeamCreateDone /> },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast />
        <ConfirmDialog />
        <ErrorBoundary>
          <Suspense fallback={<div>로딩 중...</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
