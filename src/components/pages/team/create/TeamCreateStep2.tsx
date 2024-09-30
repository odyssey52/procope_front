import JobSubCard from '@/components/common/ui/card/JobSubCard';
import Placeholder from '@/components/common/ui/placeholder/Placeholder';
import Text from '@/components/common/ui/Text';
import styled from 'styled-components';

interface TeamCreateStep2Props {
  teamName: string;
  teamNameHandler: (name: string) => void;
  teamDescription: string;
  teamDescriptionHandler: (description: string) => void;
}

const TeamCreateStep2 = ({
  teamName,
  teamNameHandler,
  teamDescription,
  teamDescriptionHandler,
}: TeamCreateStep2Props) => {
  const valid = teamName.length <= 20 && /^[a-zA-Z0-9가-힣]*$/.test(teamName);

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
          placeholder="팀 이름을 입력해 주세요. (최대 20자)"
          maxLength={20}
          validation={teamName.length > 0 ? valid : undefined}
          disabled
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
