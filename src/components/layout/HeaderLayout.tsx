import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';

interface HeaderLayoutProps {
  children?: React.ReactNode;
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

HeaderLayout.displayName = 'HeaderLayout';

export default HeaderLayout;
