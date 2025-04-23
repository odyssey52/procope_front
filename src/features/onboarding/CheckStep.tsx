import { IconDirectionLeft } from '@/shared/assets/icons/line';
import Button from '@/shared/ui/button/Button';
import TextButton from '@/shared/ui/button/TextButton';
import { JOB_MAIN_LIST, PREFERENCE_LIST } from '@/shared/constants/stepper';
import styled from 'styled-components';
import { JobSub } from './SecondStep';
import { Preference } from './ThirdStep';
import { JobMain } from './FirstStep';

interface Props {
  jobMain: JobMain;
  jobSub: JobSub[];
  preferences: Preference[];
  onBefore: () => void;
  onNext: () => void;
}

const CheckStep = ({ jobMain, jobSub, preferences, onBefore, onNext }: Props) => {
  const jobMainIcon = JOB_MAIN_LIST[jobMain.name as keyof typeof JOB_MAIN_LIST].icon;

  return (
    <Wrapper>
      <TextBox>
        <Text>
          나는 <BrandText>{jobMain.name + jobMainIcon}</BrandText> 직무를 맡고 있으며
        </Text>
        <Text>
          {jobSub.map((sub, i) => (
            <InlineText key={`jobSub${i}`}>
              <BrandText>{sub.name}</BrandText>
              {jobSub.length !== i + 1 && ','}{' '}
            </InlineText>
          ))}
          업무를 담당하고 있어
        </Text>
        <Text>
          피드백 받는 것을 <BrandText>{PREFERENCE_LIST[preferences[0].score - 1]}</BrandText> 하고
        </Text>
        <Text>
          구체적인 피드백을 <BrandText>{PREFERENCE_LIST[preferences[1].score - 1]}</BrandText> 해
        </Text>
        <Text>
          또 칭찬을 자주받는 것을 <BrandText>{PREFERENCE_LIST[preferences[2].score - 1]}</BrandText> 하고
        </Text>
        <Text>
          구체적인 칭찬을 <BrandText>{PREFERENCE_LIST[preferences[3].score - 1]}</BrandText> 해
        </Text>
      </TextBox>
      <ButtonContainer>
        <ButtonBox>
          <TextButton $type="16" leftIcon={<IconDirectionLeft />} onClick={onBefore}>
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
