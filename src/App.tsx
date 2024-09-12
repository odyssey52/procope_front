import { theme } from './styles/theme';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/login/Login';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import NaverCallback from './components/pages/login/NaverCallback';
import ConfirmDialog from './components/common/ui/modal/ConfirmModal';
import Toast from './components/common/ui/modal/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Onboarding from './components/pages/onboarding/Onboarding';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast />
        <ConfirmDialog />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/naver/callback" element={<NaverCallback />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
