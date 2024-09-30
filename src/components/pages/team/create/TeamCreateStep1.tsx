import JobSubCard from '@/components/common/ui/card/JobSubCard';
import Text from '@/components/common/ui/Text';
import styled from 'styled-components';

interface TeamCreateStep1Props {
  teamType: number;
  teamTypeHandler: (type: number) => void;
}

const TeamCreateStep1 = ({ teamType, teamTypeHandler }: TeamCreateStep1Props) => {
  return (
    <Wrapper>
      <TitleBox>
        <Text variant="heading_32" color="primary">
          어떤 팀인가요?
        </Text>
        <Text variant="body_16_medium" color="secondary">
          답변에 따라 맞춤화된 회고 서비스를 제공해 드려요!
        </Text>
      </TitleBox>
      <CardBox>
        <JobSubCard text="스쿼드" />
        <JobSubCard text="기능" />
      </CardBox>
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

const CardBox = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  margin-top: 36px;
`;
TeamCreateStep1.displayName = 'TeamType';

export default TeamCreateStep1;
