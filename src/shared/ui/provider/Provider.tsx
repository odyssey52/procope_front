'use client';

import ConfirmDialog from '@/shared/ui/modal/ConfirmModal';
import Toast from '@/shared/ui/modal/Toast';
import StyledComponentsRegistry from '@/shared/lib/registry';
import GlobalStyles from '@/shared/styles/GlobalStyles';
import { theme } from '@/shared/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import SidePanel from '../sidePanel/SidePanel';

export const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    retry: 0,
    retryDelay: 0,
  },
  mutations: {
    retry: 0,
    retryDelay: 0,
  },
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <SidePanel />
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
