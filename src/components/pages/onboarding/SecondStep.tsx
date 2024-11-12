import { IconDirectionLeft } from '@/assets/icons/line';
import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import JobSubCard from '@/components/common/ui/card/JobSubCard';
import Text from '@/components/common/ui/Text';
import { JOB_SUB_LIST, JobMainCategory } from '@/constants/stepper';
import styled from 'styled-components';

interface Props {
  jobMain: JobMainCategory;
  jobSub: string[];
  jobSubHandler: (jobSub: string) => void;
  onBefore: () => void;
  onNext: () => void;
}

const SecondStep = ({ jobMain, jobSub, jobSubHandler, onBefore, onNext }: Props) => {
  return (
    <Wrapper>
      <TextBox>
        <Text variant="heading_32">
          담당하고 계신 업무 분야를
          <br />
          모두 선택해 주세요!
        </Text>
        <Text variant="body_16_medium" color="secondary">
          답변에 따라 맞춤화된 회고 서비스를 제공해 드려요!
        </Text>
      </TextBox>
      <JobCardBox>
        {JOB_SUB_LIST[jobMain].map((job: string) => {
          const isDisabled = jobSub.length === 3 && !jobSub.includes(job);
          const state = jobSub.includes(job) ? 'selected' : isDisabled ? 'disabled' : undefined;
          return (
            <JobSubCard
              key={`JobSubCard-${job}`}
              text={job}
              state={state}
              onClick={() => jobSubHandler(job)}
              disabled={isDisabled}
            />
          );
        })}
      </JobCardBox>
      <ButtonContainer>
        <ButtonBox>
          <TextButton $type="16" leftIcon={<IconDirectionLeft />} onClick={onBefore}>
            이전
          </TextButton>
          <Button disabled={jobSub.length === 0} onClick={onNext}>
            다음
          </Button>
        </ButtonBox>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 608px;
`;
const TextBox = styled.div`
  margin: 40px 0px 36px 0px;
`;
const JobCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;
`;
const ButtonBox = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

export default SecondStep;
