'use client';

import Container from '@/components/common/ui/Container';
import Text from '@/components/common/ui/Text';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import { CheckStep, FirstStep, SecondStep, ThirdStep } from '@/components/pages/onboarding';
import { TENDENCY_TITLE_LIST } from '@/constants/stepper';
import { updateUserInfo } from '@/services/user/info/userInfoService';
import { toastActions } from '@/store/modal/toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import { JobMain } from './FirstStep';
import { JobSub } from './SecondStep';
import { Preference } from './ThirdStep';

const Onboarding = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [jobMain, setJobMain] = useState<JobMain | null>(null);
  const [jobSub, setJobSub] = useState<JobSub[]>([]);

  const updateUserInfoMutation = useMutation({ mutationFn: updateUserInfo });

  const initialPreferences = Array(TENDENCY_TITLE_LIST.length).fill(null);
  const [preferences, setPreferences] = useState<(Preference | null)[]>(initialPreferences);

  const isValidPreferences = (preferences: (Preference | null)[]): preferences is Preference[] =>
    preferences.every((item): item is Preference => item !== null);

  const saveUserInfo = async () => {
    if (!jobMain || jobSub.length === 0 || !isValidPreferences(preferences)) return;
    try {
      const payload = {
        role: {
          id: jobMain.id,
          name: jobMain.name,
          fields: jobSub,
        },
        preferences,
      };
      await updateUserInfoMutation.mutateAsync(payload);
      router.replace('/team');
    } catch (e) {
      console.error(e);
    }
  };

  const jobMainHandler = (jobMain: JobMain) => {
    setJobMain(jobMain);
    setJobSub([]);
  };

  const updateJobSub = (prevJobSub: JobSub[], jobSub: JobSub): [JobSub[], boolean] => {
    const jobSubSet = new Set(prevJobSub);

    if (jobSubSet.has(jobSub)) {
      jobSubSet.delete(jobSub);
      return [Array.from(jobSubSet), false]; // 이미 선택된 경우, 삭제 후 반환
    }

    if (jobSubSet.size >= 3) {
      return [prevJobSub, true]; // 최대 개수 초과 시 기존 값 유지
    }

    jobSubSet.add(jobSub);
    return [Array.from(jobSubSet), false]; // 새로운 선택 추가
  };

  const jobSubHandler = (jobSub: JobSub) => {
    setJobSub((prevJobSub) => {
      const [updatedJobSub, isMaxLimit] = updateJobSub(prevJobSub, jobSub);

      if (isMaxLimit) {
        setTimeout(() => {
          toastActions.open({
            state: 'error',
            title: '다시 선택해 주세요',
            description: '최대 3개까지 선택할 수 있습니다.',
          });
        }, 0);
      }

      return updatedJobSub;
    });
  };

  const preferencesHandler = (index: number, preference: Preference) => {
    setPreferences((prevPreferences) => {
      const newPreferences = [...prevPreferences];
      newPreferences[index] = preference;
      return newPreferences;
    });
  };

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
          preferences={preferences}
          preferencesHandler={preferencesHandler}
          isValidPreferences={isValidPreferences(preferences)}
          onBefore={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      );
    if (step === 4 && jobMain && isValidPreferences(preferences))
      return (
        <CheckStep
          jobMain={jobMain}
          jobSub={jobSub}
          preferences={preferences}
          onBefore={() => setStep(3)}
          onNext={saveUserInfo}
        />
      );
    return null;
  };

  return (
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
