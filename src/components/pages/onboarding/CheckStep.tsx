import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import { JOB_MAIN_LIST, JobMainCategory, PREFERENCE_LIST } from '@/constants/stepper';
import styled from 'styled-components';

interface Props {
  jobMain: JobMainCategory;
  jobSub: string[];
  tendency: number[];
  onBefore: () => void;
  onNext: () => void;
}

const CheckStep = ({ jobMain, jobSub, tendency, onBefore, onNext }: Props) => {
  const jobMainTitle = JOB_MAIN_LIST[jobMain].title + JOB_MAIN_LIST[jobMain].icon;

  return (
    <Wrapper>
      <TextBox>
        <Text>
          나는 <BrandText>{jobMainTitle}</BrandText> 직무를 맡고 있으며
        </Text>
        <Text>
          {jobSub.map((sub, i) => (
            <InlineText key={`jobSub${i}`}>
              <BrandText>{sub}</BrandText>
              {jobSub.length !== i + 1 && ','}{' '}
            </InlineText>
          ))}
          업무를 담당하고 있어
        </Text>
        <Text>
          피드백 받는 것을 <BrandText>{PREFERENCE_LIST[tendency[0] - 1]}</BrandText> 하고
        </Text>
        <Text>
          구체적인 피드백을 <BrandText>{PREFERENCE_LIST[tendency[1] - 1]}</BrandText> 해
        </Text>
        <Text>
          또 칭찬을 자주받는 것을 <BrandText>{PREFERENCE_LIST[tendency[2] - 1]}</BrandText> 하고
        </Text>
        <Text>
          구체적인 칭찬을 <BrandText>{PREFERENCE_LIST[tendency[3] - 1]}</BrandText> 해
        </Text>
      </TextBox>
      <ButtonContainer>
        <ButtonBox>
          <TextButton $type="16" $leftIcon="/assets/icons/line/direction-left.svg" onClick={onBefore}>
            이전
          </TextButton>
          <Button onClick={onNext}>다음</Button>
        </ButtonBox>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Text = styled.p`
  word-break: keep-all;
  ${({ theme }) => theme.fontStyle.heading_32};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
const BrandText = styled.b`
  color: ${({ theme }) => theme.sementicColors.text.brand};
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
const InlineText = styled.span``;

export default CheckStep;
