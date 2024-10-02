import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
// import JobSubCard from '@/compkonents/common/ui/card/JobSubCard';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import Text from '@/components/common/ui/Text';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SecondStep = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Percent>
        <ProgressBar rate={50} />
        <Text variant="caption_12_regular" color="secondary">
          2/3단계
        </Text>
      </Percent>
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
        {
          // first에서 선택한 값을 백엔드에서 받아서 해당 값에 맞는 값을 띄워주기
          // <JobSubCard></JobSubCard>
        }
      </JobCardBox>
      <ButtonContainer>
        <ButtonBox>
          <TextButton
            $type="16"
            $leftIcon="/assets/icons/line/direction-left.svg"
            onClick={() => {
              navigate('/onboarding/first');
            }}
          >
            이전
          </TextButton>
          <Button
            // disabled
            onClick={() => {
              navigate('/onboarding/third');
            }}
          >
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
