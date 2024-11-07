'use client';

import Container from '@/components/common/ui/Container';
import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { CheckStep, FirstStep, SecondStep, ThirdStep } from '@/components/pages/onboarding';
import { JobMainCategory } from '@/constants/stepper';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Onboarding = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [jobMain, setJobMain] = useState<JobMainCategory | null>(null);
  const [jobSub, setJobSub] = useState<string[]>([]);
  const [tendency, setTendency] = useState<number[]>([]);
  // 로컬 스토리지에 step 저장
  useEffect(() => {
    localStorage.setItem('step', 'localstep');
  }, []);
  const pageMove = () => {
    if (step === 1) return <FirstStep jobMain={jobMain} jobMainHandler={jobMainHandler} onNext={() => setStep(2)} />;
    if (step === 2 && jobMain)
      return (
        <SecondStep
          jobMain={jobMain}
          jobSub={jobSub}
          jobSubHandler={jobSubHandler}
          onBefore={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      );
    if (step === 3)
      return (
        <ThirdStep
          tendency={tendency}
          tendencyHandler={tendencyHandler}
          onBefore={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      );
    if (step === 4 && jobMain)
      return (
        <CheckStep
          jobMain={jobMain}
          jobSub={jobSub}
          tendency={tendency}
          onBefore={() => setStep(3)}
          onNext={() => {}}
        />
      );
    return null;
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
  margin-top: 44px;
  margin-bottom: 92px;
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
