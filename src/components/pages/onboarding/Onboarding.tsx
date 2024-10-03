import styled from 'styled-components';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import CheckStep from './CheckStep';
import Navbar from '@/components/common/Navbar';
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
