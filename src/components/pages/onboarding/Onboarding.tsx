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
import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { JobMain } from './FirstStep';
import { JobSub } from './SecondStep';
import { Preference } from './ThirdStep';

const ONBOARDING_CONSTANTS = {
  MAX_JOB_SUB: 3,
  TOAST_DELAY: 0,
  TOTAL_STEPS: 3,
} as const;

const Onboarding = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [jobMain, setJobMain] = useState<JobMain | null>(null);
  const [jobSub, setJobSub] = useState<JobSub[]>([]);
  const [preferences, setPreferences] = useState<(Preference | null)[]>(Array(TENDENCY_TITLE_LIST.length).fill(null));

  const updateUserInfoMutation = useMutation({
    mutationFn: updateUserInfo,
    onError: (error) => {
      toastActions.open({
        state: 'error',
        title: '저장 실패',
        description: '정보 저장 중 오류가 발생했습니다. 다시 시도해 주세요.',
      });
      console.error('Failed to save user info:', error);
    },
  });

  const isValidPreferences = useCallback(
    (preferences: (Preference | null)[]): preferences is Preference[] =>
      preferences.every((item): item is Preference => item !== null),
    [],
  );

  const jobMainHandler = useCallback((jobMain: JobMain) => {
    setJobMain(jobMain);
    setJobSub([]);
  }, []);

  const updateJobSub = useCallback((prevJobSub: JobSub[], jobSub: JobSub): [JobSub[], boolean] => {
    const jobSubSet = new Set(prevJobSub);

    if (jobSubSet.has(jobSub)) {
      jobSubSet.delete(jobSub);
      return [Array.from(jobSubSet), false];
    }

    if (jobSubSet.size >= ONBOARDING_CONSTANTS.MAX_JOB_SUB) {
      return [prevJobSub, true];
    }

    jobSubSet.add(jobSub);
    return [Array.from(jobSubSet), false];
  }, []);

  const jobSubHandler = useCallback(
    (jobSub: JobSub) => {
      setJobSub((prevJobSub) => {
        const [updatedJobSub, isMaxLimit] = updateJobSub(prevJobSub, jobSub);

        if (isMaxLimit) {
          setTimeout(() => {
            toastActions.open({
              state: 'error',
              title: '다시 선택해 주세요',
              description: `최대 ${ONBOARDING_CONSTANTS.MAX_JOB_SUB}개까지 선택할 수 있습니다.`,
            });
          }, ONBOARDING_CONSTANTS.TOAST_DELAY);
        }

        return updatedJobSub;
      });
    },
    [updateJobSub],
  );

  const preferencesHandler = useCallback((index: number, preference: Preference) => {
    setPreferences((prevPreferences) => {
      const newPreferences = [...prevPreferences];
      newPreferences[index] = preference;
      return newPreferences;
    });
  }, []);

  const saveUserInfo = useCallback(async () => {
    if (!jobMain || jobSub.length === 0 || !isValidPreferences(preferences)) {
      toastActions.open({
        state: 'error',
        title: '입력 오류',
        description: '모든 항목을 입력해주세요.',
      });
      return;
    }

    try {
      await updateUserInfoMutation.mutateAsync({
        role: {
          id: jobMain.id,
          name: jobMain.name,
          fields: jobSub,
        },
        preferences,
      });
      router.replace('/team');
    } catch {
      // 에러 처리는 mutation의 onError에서 처리
    }
  }, [jobMain, jobSub, preferences, isValidPreferences, updateUserInfoMutation, router]);

  const currentPage = useMemo(() => {
    switch (step) {
      case 1:
        return <FirstStep jobMain={jobMain} jobMainHandler={jobMainHandler} onNext={() => setStep(2)} />;
      case 2:
        return (
          jobMain && (
            <SecondStep
              jobMain={jobMain}
              jobSub={jobSub}
              jobSubHandler={jobSubHandler}
              onBefore={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )
        );
      case 3:
        return (
          <ThirdStep
            preferences={preferences}
            preferencesHandler={preferencesHandler}
            isValidPreferences={isValidPreferences(preferences)}
            onBefore={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        );
      case 4:
        return (
          jobMain &&
          isValidPreferences(preferences) && (
            <CheckStep
              jobMain={jobMain}
              jobSub={jobSub}
              preferences={preferences}
              onBefore={() => setStep(3)}
              onNext={saveUserInfo}
            />
          )
        );
      default:
        return null;
    }
  }, [
    step,
    jobMain,
    jobSub,
    preferences,
    jobMainHandler,
    jobSubHandler,
    preferencesHandler,
    isValidPreferences,
    saveUserInfo,
  ]);

  const progressRate = useMemo(() => 100 * (step / ONBOARDING_CONSTANTS.TOTAL_STEPS), [step]);

  return (
    <OnBoardingContainer>
      <Content>
        {step !== 4 && (
          <Percent>
            <ProgressBar rate={progressRate} />
            <Text variant="caption_12_regular" color="secondary">
              {step}/{ONBOARDING_CONSTANTS.TOTAL_STEPS}단계
            </Text>
          </Percent>
        )}
        {currentPage}
      </Content>
    </OnBoardingContainer>
  );
};

const OnBoardingContainer = styled(Container)`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  min-height: 100vh;

  align-items: center;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  max-width: 608px;
  width: 100%;
  margin-top: 12.96vh;
  margin-bottom: 16px;
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
