import { IconDirectionLeft } from '@/assets/icons/line';
import Breadcrumbs from '@/components/common/ui/breadcrumbs/Breadcrumbs';
import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import Container from '@/components/common/ui/Container';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import TeamCreateStep1 from './TeamCreateStep1';
import TeamCreateStep2 from './TeamCreateStep2';

const PATH = {
  '팀 목록': '/team',
  '팀 생성': '/team/create',
};

const TeamCreate = () => {
  const TOTAL_STEP = 2;

  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [teamType, setTeamType] = useState<number>(0);
  const [teamName, setTeamName] = useState<string>('');
  const [teamDescription, setTeamDescription] = useState<string>('');

  const teamNameValid = teamName.length <= 20 && /^[a-zA-Z0-9가-힣]*$/.test(teamName);
  const teamDescriptionValid = teamName.length <= 200 && /^[a-zA-Z0-9가-힣]*$/.test(teamDescription);

  const stepValidation = () => {
    if (step === 1 && teamType !== 0) {
      return true;
    }
    if (step === 2 && teamName.length > 0 && teamNameValid && teamDescriptionValid) {
      return true;
    }
    return false;
  };

  const onClickNext = () => {
    if (step === 1 && teamType !== 0) {
      return setStep(step + 1);
    }
    if (step === 2 && teamName.length > 0 && teamNameValid && teamDescriptionValid) {
      return router.push('/team/create/done');
    }
  };
  const onClickPrev = () => {
    if (step === 2) {
      setStep(step - 1);
    }
  };

  const teamTypeHandler = (type: number) => {
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
              teamNameValid={teamNameValid}
              teamDescriptionValid={teamDescriptionValid}
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
