'use client';

import Logo from '@/shared/ui/Logo';
import styled from 'styled-components';

const LogoPlace = ({ size = 100 }: { size?: number }) => {
  return (
    <Wrapper>
      <Logo size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

LogoPlace.displayName = 'LogoPlace';

export default LogoPlace;
