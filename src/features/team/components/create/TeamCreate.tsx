'use client';

import { IconDirectionLeft } from '@/shared/assets/icons/line';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import TextButton from '@/shared/ui/button/TextButton';
import Container from '@/shared/ui/Container';
import ProgressBar from '@/shared/ui/progress/ProgressBar';
import HeaderLayout from '@/features/layout/HeaderLayout';
import { createTeam } from '@/features/team/services/teamService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import TeamCreateStep1 from './TeamCreateStep1';
import TeamCreateStep2 from './TeamCreateStep2';
import { teamDescriptionValid, teamNameValid } from '../../utils/data';

const PATH = {
  '팀 목록': '/team',
  '팀 생성': '/team/create',
};

const TeamCreate = () => {
  const TOTAL_STEP = 2;

  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [teamType, setTeamType] = useState<'SQUAD' | 'FEATURE' | null>(null);
  const [teamName, setTeamName] = useState<string>('');
  const [teamDescription, setTeamDescription] = useState<string>('');

  const createTeamMutation = useMutation({
    mutationFn: createTeam,
  });

  const stepValidation = () => {
    if (step === 1 && teamType) {
      return true;
    }
    if (step === 2 && teamName.length > 0 && teamNameValid(teamName) && teamDescriptionValid(teamDescription)) {
      return true;
    }
    return false;
  };
  const onClickNext = async () => {
    if (step === 1 && teamType) {
      return setStep(step + 1);
    }
    if (
      step === 2 &&
      teamName.length > 0 &&
      teamNameValid(teamName) &&
      teamDescriptionValid(teamDescription) &&
      teamType
    ) {
      // 팀생성 비동기로 변경해야함
      const payload = {
        type: teamType,
        name: teamName,
        description: teamDescription,
      };
      const { url } = await createTeamMutation.mutateAsync(payload);
      router.push(`/team/create/${url}`);
    }
  };

  const onClickPrev = () => {
    if (step === 2) {
      setStep(step - 1);
    }
  };

  const teamTypeHandler = (type: 'SQUAD' | 'FEATURE') => {
    setTeamType(type);
  };

  const teamNameHandler = (name: string) => {
    setTeamName(name);
  };

  const teamDescriptionHandler = (description: string) => {
    setTeamDescription(description);
  };

  return (
    <HeaderLayout>
      <Container>
        <Content>
          <Head>
            <Breadcrumbs paths={PATH} />
            <ProgressBox>
              <ProgressBar rate={100 * (step / TOTAL_STEP)} />
              <Stepper>
                {step}/{TOTAL_STEP}단계
              </Stepper>
            </ProgressBox>
          </Head>
          {step === 1 && <TeamCreateStep1 teamType={teamType} teamTypeHandler={teamTypeHandler} />}
          {step === 2 && (
            <TeamCreateStep2
              teamName={teamName}
              teamNameHandler={teamNameHandler}
              teamDescription={teamDescription}
              teamDescriptionHandler={teamDescriptionHandler}
              teamNameValid={teamNameValid(teamName)}
              teamDescriptionValid={teamDescriptionValid(teamDescription)}
            />
          )}
          <ControlBox>
            {step === 2 && (
              <TextButton onClick={onClickPrev} leftIcon={<IconDirectionLeft />}>
                이전
              </TextButton>
            )}
            <Button onClick={onClickNext} disabled={!stepValidation()}>
              다음
            </Button>
          </ControlBox>
        </Content>
      </Container>
    </HeaderLayout>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 9.44vh;
  width: 100%;
  align-self: center;
  align-items: normal;
  max-width: 608px;
`;

const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProgressBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Stepper = styled.div`
  position: relative;
  white-space: nowrap;
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  color: ${({ theme }) => theme.sementicColors.text.secondary};
`;

const ControlBox = styled.div`
  position: relative;
  display: flex;
  align-self: end;
  align-items: center;
  gap: 12px;
  margin-top: 48px;
`;
TeamCreate.displayName = 'TeamCreate';

export default TeamCreate;
