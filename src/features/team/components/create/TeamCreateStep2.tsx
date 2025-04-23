import Placeholder from '@/shared/ui/placeholder/Placeholder';
import Text from '@/shared/ui/Text';
import TextArea from '@/shared/ui/textarea/TextArea';
import styled from 'styled-components';

interface TeamCreateStep2Props {
  teamName: string;
  teamNameHandler: (name: string) => void;
  teamNameValid: boolean;
  teamDescription: string;
  teamDescriptionHandler: (description: string) => void;
  teamDescriptionValid: boolean;
}

const PLACEHOLDER_TEAM_NAME = '팀 이름을 입력해 주세요. (최대 20자)';
const PLACEHOLDER_TEAM_DESCRIPTION = '팀을 간단히 소개해 주세요. (최대 200자)';

const ERROR_DESCRIPTION_TEAM_NAME = '팀 이름은 20글자 이하로 알파벳, 숫자, 한글만 조합할 수 있습니다.';
const ERROR_DESCRIPTION_TEAM_DESCRIPTION = '팀 소개는 200글자 이하로 입력해 주세요.';

const TeamCreateStep2 = ({
  teamName,
  teamNameHandler,
  teamNameValid,
  teamDescription,
  teamDescriptionHandler,
  teamDescriptionValid,
}: TeamCreateStep2Props) => {
  return (
    <Wrapper>
      <TitleBox>
        <Text variant="heading_32" color="primary">
          팀 이름을 알려주세요!
        </Text>
        <Text variant="body_16_medium" color="secondary">
          팀 소개도 작성해 주시면, 어떤 팀인지 쉽게 이해할 수 있어요.
        </Text>
      </TitleBox>
      <TeamInfoInputBox>
        <Placeholder
          value={teamName}
          valueHandler={teamNameHandler}
          validation={teamName.length > 0 ? teamNameValid : undefined}
          label={{ text: '팀 이름', required: true }}
          placeholder={PLACEHOLDER_TEAM_NAME}
          errorDescription={ERROR_DESCRIPTION_TEAM_NAME}
          maxLength={20}
        />
        <TextArea
          value={teamDescription}
          valueHandler={teamDescriptionHandler}
          validation={teamDescription.length > 0 ? teamDescriptionValid : undefined}
          label={{ text: '소개', required: false }}
          placeholder={PLACEHOLDER_TEAM_DESCRIPTION}
          errorDescription={ERROR_DESCRIPTION_TEAM_DESCRIPTION}
          maxLength={200}
        />
      </TeamInfoInputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 40px;
`;

const TeamInfoInputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 36px;
`;
TeamCreateStep2.displayName = 'TeamCreateStep2';

export default TeamCreateStep2;
