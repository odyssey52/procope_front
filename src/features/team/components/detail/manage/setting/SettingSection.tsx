import { updateTeam } from '@/features/team/services/teamService';
import * as types from '@/features/team/services/teamService.type';
import { ReadTeamDetailResponse } from '@/features/team/services/teamService.type';
import {
  ERROR_DESCRIPTION_TEAM_DESCRIPTION,
  ERROR_DESCRIPTION_TEAM_NAME,
  PLACEHOLDER_TEAM_DESCRIPTION,
  PLACEHOLDER_TEAM_NAME,
  teamDescriptionValid,
  teamNameValid,
} from '@/features/team/utils/data';
import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/store/modal/toast';
import { TeamType } from '@/shared/types/team';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import JobSubCard from '@/shared/ui/card/JobSubCard';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import TextArea from '@/shared/ui/textarea/TextArea';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import SubModal from '../SubModal';

interface Props {
  teamData: ReadTeamDetailResponse;
  teamId: string;
}

const SettingSection = ({ teamData, teamId }: Props) => {
  const params = useParams();
  const path = [
    {
      name: '팀 관리',
      path: '/team',
      clickable: false,
    },
    {
      name: '설정',
      path: `/team/${params.teamId}/manage/setting`,
      clickable: true,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState<{ name: 'secession' | 'deleteTeam' | null; type: boolean }>({
    name: null,
    type: false,
  });
  const [teamType, setTeamType] = useState<TeamType | null>(teamData.type);
  const [teamName, setTeamName] = useState<string>(teamData.name);
  const [teamDescription, setTeamDescription] = useState<string>(teamData.description);

  const teamNameHandler = (name: string) => {
    setTeamName(name);
  };
  const teamDescriptionHandler = (description: string) => {
    setTeamDescription(description);
  };

  const teamSecession = () => {
    setIsModalOpen({ name: 'secession', type: true });
  };
  const teamDelete = () => {
    setIsModalOpen({ name: 'deleteTeam', type: false });
  };
  const closeModal = () => {
    setIsModalOpen({ name: null, type: false });
  };
  const saveTeamMutation = useMutation({
    mutationFn: ({ payload, params }: { payload: types.UpdateTeamPayload; params: types.UpdateTeamParams }) => {
      return updateTeam(payload, params);
    },
  });
  const saveTeamHandle = async () => {
    try {
      const payload = {
        type: teamData.type,
        name: teamData.name,
        description: teamData.description,
      };
      const params = { teamId };

      await saveTeamMutation.mutateAsync({ payload, params });
      toastActions.open({
        state: 'success',
        title: MESSAGES.UPDATE_SAVE_SUCCESS,
      });
    } catch (err) {
      toastActions.open({
        state: 'error',
        title: MESSAGES.ACCOUNT_SAVE_ERROR,
      });
    }
  };

  return (
    <Container>
      <Head>
        <Breadcrumbs paths={path} />
        <TitleBox>
          <PageTitle title="팀 설정" />
          <Button size="36" onClick={saveTeamHandle}>
            변경
          </Button>
        </TitleBox>
      </Head>
      <Content>
        <CardSection>
          <JobSubCard
            text="스쿼드"
            size="small"
            icon="/assets/icons/graphic/glass/user-on.png"
            state={teamType === 'SQUAD' ? 'selected' : undefined}
            subText={'특정 목표를 바탕으로\n직무와 상관없이 제품을 만들기 위한 팀'}
            onClick={() => setTeamType('SQUAD')}
          />
          <JobSubCard
            text="기능"
            size="small"
            icon="/assets/icons/graphic/glass/setting-on.png"
            state={teamType === 'FEATURE' ? 'selected' : undefined}
            subText={'직무를 중심으로 구성된 팀\n개발, 기획, 마케팅, 재무 등'}
            onClick={() => setTeamType('FEATURE')}
          />
        </CardSection>
        <TextSection>
          <Placeholder
            value={teamName}
            valueHandler={teamNameHandler}
            validation={teamName.length > 0 ? teamNameValid(teamName) : undefined}
            label={{ text: '팀 이름', required: true }}
            placeholder={PLACEHOLDER_TEAM_NAME}
            errorDescription={ERROR_DESCRIPTION_TEAM_NAME}
            maxLength={20}
          />
          <TextArea
            value={teamDescription}
            valueHandler={teamDescriptionHandler}
            validation={teamDescription.length > 0 ? teamDescriptionValid(teamDescription) : undefined}
            label={{ text: '소개', required: false }}
            placeholder={PLACEHOLDER_TEAM_DESCRIPTION}
            errorDescription={ERROR_DESCRIPTION_TEAM_DESCRIPTION}
            maxLength={200}
          />
        </TextSection>
        <ButtonSection>
          <ButtonTitle>탈퇴 및 삭제</ButtonTitle>
          <Buttons>
            <Button onClick={teamSecession} $type="tertiary" disabled={teamData.myRole === 'MEMBER'}>
              팀 탈퇴
            </Button>
            <Button onClick={teamDelete} $type="error" disabled={teamData.myRole === 'MEMBER'}>
              팀 삭제
            </Button>
          </Buttons>
        </ButtonSection>
        {isModalOpen.name !== null && (
          <SubModal name={isModalOpen.name} teamId={teamData.teamId} onClose={closeModal} />
        )}
      </Content>
    </Container>
  );
};

export default SettingSection;
const Container = styled.div`
  width: 607px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const CardSection = styled.div`
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;
const TextSection = styled.div`
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const ButtonSection = styled.div`
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ButtonTitle = styled.div``;
const Buttons = styled.div`
  display: flex;
  gap: 12px;

  > button {
    flex-grow: 1;
  }
`;
