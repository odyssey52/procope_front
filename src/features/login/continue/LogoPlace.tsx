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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

LogoPlace.displayName = 'LogoPlace';

export default LogoPlace;
