'use client';

import ConfirmDialog from '@/components/common/ui/modal/ConfirmModal';
import Toast from '@/components/common/ui/modal/Toast';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

export const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    retry: 2,
    retryDelay: 0,
  },
  mutations: {
    retry: 2,
    retryDelay: 0,
  },
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Toast />
          <ConfirmDialog />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

Provider.displayName = 'Provider';

export default Provider;
