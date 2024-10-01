import styled from 'styled-components';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import CheckStep from './CheckStep';
import Navbar from '@/components/common/Navbar';

const Onboarding = () => {
  const pageMove = () => {
    const url = window.location.pathname;

    if (url === '/onboarding/first') return <FirstStep />;
    else if (url === '/onboarding/second') return <SecondStep />;
    else if (url === '/onboarding/third') return <ThirdStep />;
    else if (url === '/onboarding/check') return <CheckStep />;
    else return null;
  };

  return (
    <Wrapper>
      <Navbar />
      <Content>{pageMove()}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  width: 100vw;
  height: 100vh;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Onboarding.displayName = 'Onboarding';

export default Onboarding;
