import Button from '@/components/common/ui/button/Button';
import JobMainCard from '@/components/common/ui/card/JobMainCard';
import Text from '@/components/common/ui/Text';
import { JOB_MAIN_LIST, JobMainCategory } from '@/constants/stepper';
import styled from 'styled-components';

interface Props {
  jobMain: JobMainCategory | null;
  jobMainHandler: (jobMain: JobMainCategory) => void;
  onNext: () => void;
}

const FirstStep = ({ jobMain, jobMainHandler, onNext }: Props) => {
  return (
    <Wrapper>
      <TextBox>
        <Text variant="heading_32">주로 어떤 직무를 맡고 계신가요?</Text>
        <Text variant="body_16_medium" color="secondary">
          답변에 따라 맞춤화된 회고 서비스를 제공해 드려요!
        </Text>
      </TextBox>
      <JobCardBox>
        {Object.entries(JOB_MAIN_LIST).map(([key, { title, img }]) => (
          <JobMainCard
            key={`JobMainCard-` + key}
            text={title}
            icon={img}
            state={jobMain === key ? 'selected' : undefined}
            onClick={() => jobMainHandler(key as JobMainCategory)}
          />
        ))}
      </JobCardBox>
      <ButtonBox>
        <Button disabled={!jobMain} onClick={onNext}>
          다음
        </Button>
      </ButtonBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 608px;
  width: 100%;
`;

const TextBox = styled.div`
  margin: 40px 0px 36px 0px;
`;
const JobCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
const ButtonBox = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: flex-end;
`;

FirstStep.displayName = 'FirstStep';

export default FirstStep;
