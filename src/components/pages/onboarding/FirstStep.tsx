import Button from '@/components/common/ui/button/Button';
import JobMainCard from '@/components/common/ui/card/JobMainCard';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import Text from '@/components/common/ui/Text';
import { jobSelect } from '@/constants/stepper';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FirstStep = () => {
  const navigate = useNavigate();
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
              state={select === index ? 'selected' : undefined}
              onClick={() => cardHandler(index)}
            />
          );
        })}
      </JobCardBox>
      <ButtonBox>
        <Button
          disabled={!select}
          onClick={() => {
            // api 연결 전이라 지금은 그냥 이동만 되도록 해놓음
            navigate('/onboarding/second');
          }}
        >
          다음
        </Button>
      </ButtonBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 608px;
  height: 684px;
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