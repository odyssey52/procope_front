'use client';

import HeaderLayout from '@/components/layout/HeaderLayout';
import { ReactNode } from 'react';
import styled from 'styled-components';

export default function Layout({ sidenav, content }: { sidenav: ReactNode; content: ReactNode }) {
  return (
    <HeaderLayout>
      <ContentWrapper>
        {sidenav}
        <Content>{content}</Content>
      </ContentWrapper>
    </HeaderLayout>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};

  margin: 24px;
  padding: 24px;
`;
