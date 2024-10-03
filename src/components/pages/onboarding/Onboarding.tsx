import Container from '@/components/common/ui/Container';
import HeaderLayout from '@/components/layout/HeaderLayout';
import styled from 'styled-components';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import CheckStep from './CheckStep';
import { useState } from 'react';

const Onboarding = () => {
  const [step, setStep] = useState('first');

  const pageMove = () => {
    if (step === 'first') return <FirstStep onNext={() => setStep('second')} />;
    else if (step === 'second')
      return (
        <SecondStep
          onBefore={() => setStep('first')}
          onNext={() => {
            setStep('third');
          }}
        />
      );
    else if (step === 'third') return <ThirdStep onBefore={() => setStep('second')} onNext={() => setStep('check')} />;
    else if (step === 'check') return <CheckStep onBefore={() => setStep('third')} onNext={() => {}} />;
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
