import JobSubCard from '@/shared/ui/card/JobSubCard';
import Text from '@/shared/ui/Text';
import styled from 'styled-components';

interface TeamCreateStep1Props {
  teamType: 'SQUAD' | 'FEATURE' | null;
  teamTypeHandler: (type: 'SQUAD' | 'FEATURE') => void;
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
        <JobSubCard
          text="스쿼드"
          icon="/assets/icons/graphic/glass/user-on.png"
          state={teamType === 'SQUAD' ? 'selected' : undefined}
          subText={'특정 목표를 바탕으로\n직무와 상관없이 제품을 만들기 위한 팀'}
          onClick={() => teamTypeHandler('SQUAD')}
        />
        <JobSubCard
          text="기능"
          icon="/assets/icons/graphic/glass/setting-on.png"
          state={teamType === 'FEATURE' ? 'selected' : undefined}
          subText={'직무를 중심으로 구성된 팀\n개발, 기획, 마케팅, 재무 등'}
          onClick={() => teamTypeHandler('FEATURE')}
        />
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
