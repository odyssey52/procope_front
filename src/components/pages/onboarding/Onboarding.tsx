import Container from '@/components/common/ui/Container';
import HeaderLayout from '@/components/layout/HeaderLayout';
import styled from 'styled-components';
import CheckStep from './CheckStep';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

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
    <HeaderLayout>
      <Container>
        <Content>{pageMove()}</Content>
      </Container>
    </HeaderLayout>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

Onboarding.displayName = 'Onboarding';

export default Onboarding;
