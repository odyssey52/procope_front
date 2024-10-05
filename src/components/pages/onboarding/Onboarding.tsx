import Container from '@/components/common/ui/Container';
import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { JobMainCategory } from '@/constants/stepper';
import { useState } from 'react';
import styled from 'styled-components';
import CheckStep from './CheckStep';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Onboarding = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [jobMain, setJobMain] = useState<JobMainCategory | null>(null);
  const [jobSub, setJobSub] = useState<string[]>([]);
  const [tendency, setTendency] = useState<number[]>([]);

  const pageMove = () => {
    if (step === 1) return <FirstStep jobMain={jobMain} jobMainHandler={jobMainHandler} onNext={() => setStep(2)} />;
    else if (step === 2 && jobMain)
      return (
        <SecondStep
          jobMain={jobMain}
          jobSub={jobSub}
          jobSubHandler={jobSubHandler}
          onBefore={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      );
    else if (step === 3)
      return (
        <ThirdStep
          tendency={tendency}
          tendencyHandler={tendencyHandler}
          onBefore={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      );
    else if (step === 4 && jobMain)
      return (
        <CheckStep
          jobMain={jobMain}
          jobSub={jobSub}
          tendency={tendency}
          onBefore={() => setStep(3)}
          onNext={() => {}}
        />
      );
    else return null;
  };

  const jobMainHandler = (jobMain: JobMainCategory) => {
    setJobMain(jobMain);
    setJobSub([]);
  };

  const jobSubHandler = (jobSub: string) => {
    setJobSub((prevJobSub) => {
      const jobSubSet = new Set(prevJobSub);
      if (jobSubSet.has(jobSub)) {
        jobSubSet.delete(jobSub);
      } else {
        jobSubSet.add(jobSub);
      }
      return Array.from(jobSubSet);
    });
  };

  const tendencyHandler = (index: number, tendency: number) => {
    setTendency((prevTendency) => {
      const newTendency = [...prevTendency];
      newTendency[index] = tendency;
      return newTendency;
    });
  };

  return (
    <HeaderLayout>
      <OnBoardingContainer>
        <Content>
          {step !== 4 && (
            <Percent>
              <ProgressBar rate={100 * (step / 3)} />
              <Text variant="caption_12_regular" color="secondary">
                {step}/3단계
              </Text>
            </Percent>
          )}
          {pageMove()}
        </Content>
      </OnBoardingContainer>
    </HeaderLayout>
  );
};

const OnBoardingContainer = styled(Container)`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  max-width: 608px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Percent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Onboarding.displayName = 'Onboarding';

export default Onboarding;
