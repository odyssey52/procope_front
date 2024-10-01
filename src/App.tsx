import { theme } from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import ConfirmDialog from './components/common/ui/modal/ConfirmModal';
import Toast from './components/common/ui/modal/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react';
import Team from './components/pages/team/Team';
import TeamCreate from './components/pages/team/create/TeamCreate';
import TeamCreateDone from './components/pages/team/create/done/TeamCreateDone';

const Login = lazy(() => import('@/components/pages/login/Login'));
const NaverCallback = lazy(() => import('@/components/pages/login/NaverCallback'));
const Onboarding = lazy(() => import('@/components/pages/onboarding/Onboarding'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/login/naver/callback', element: <NaverCallback /> },
  { path: '/onboarding/first', element: <Onboarding /> },
  { path: '/onboarding/second', element: <Onboarding /> },
  { path: '/onboarding/third', element: <Onboarding /> },
  { path: '/onboarding/check', element: <Onboarding /> },
  { path: '/team', element: <Team /> },
  { path: '/team/create', element: <TeamCreate /> },
  { path: '/team/create/done', element: <TeamCreateDone /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast />
        <ConfirmDialog />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
