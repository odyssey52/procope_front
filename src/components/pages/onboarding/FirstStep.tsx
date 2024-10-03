import Button from '@/components/common/ui/button/Button';
import JobMainCard from '@/components/common/ui/card/JobMainCard';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import Text from '@/components/common/ui/Text';
import { jobSelect } from '@/constants/stepper';
import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  onNext: () => void;
}

const FirstStep = ({ onNext }: Props) => {
  const [select, setSelect] = useState<number>();
  const cardHandler = (index: number) => {
    if (select === index) setSelect(undefined);
    else setSelect(index);
  };

  return (
    <Wrapper>
      <Percent>
        <ProgressBar rate={25} />
        <Text variant="caption_12_regular" color="secondary">
          1/3단계
        </Text>
      </Percent>
      <TextBox>
        <Text variant="heading_32">주로 어떤 직무를 맡고 계신가요?</Text>
        <Text variant="body_16_medium" color="secondary">
          답변에 따라 맞춤화된 회고 서비스를 제공해 드려요!
        </Text>
      </TextBox>
      <JobCardBox>
        {Object.values(jobSelect).map(({ title, img }, index) => {
          return (
            <JobMainCard
              key={index}
              text={title}
              icon={img}
              state={select === index + 1 ? 'selected' : undefined}
              onClick={() => cardHandler(index + 1)}
            />
          );
        })}
      </JobCardBox>
      <ButtonBox>
        <Button disabled={!select} onClick={onNext}>
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
const Percent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
