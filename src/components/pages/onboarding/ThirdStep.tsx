import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import ProgressBar from '@/components/common/ui/progress/ProgressBar';
import Radio from '@/components/common/ui/radio/Radio';
import Text from '@/components/common/ui/Text';
import { tendencyTitle } from '@/constants/stepper';
import styled from 'styled-components';

interface Props {
  onBefore: () => void;
  onNext: () => void;
}

const ThirdStep = ({ onBefore, onNext }: Props) => {
  return (
    <Wrapper>
      <Percent>
        <ProgressBar rate={100} />
        <Text variant="caption_12_regular" color="secondary">
          3/3단계
        </Text>
      </Percent>
      <TextBox>
        <Text variant="heading_32">
          마지막이에요!
          <br />
          업무 성향을 선택해 주세요.
        </Text>
        <Text variant="body_16_medium" color="secondary">
          답변에 따라 맞춤화된 회고 서비스를 제공해 드려요!
        </Text>
      </TextBox>
      {tendencyTitle.map((title, index) => {
        return (
          <div key={index}>
            <Text variant="body_14_semibold">{title}</Text>
            <TendencyBox>
              <Text variant="heading_18" color="tertiary">
                그렇다
              </Text>
              <RadioBox>
                <Radio id={`${index}-very_agree`} name={`${index}`} $size="lg" />
                <Radio id={`${index}-agree`} name={`${index}`} />
                <Radio id={`${index}-soso`} name={`${index}`} $size="sm" />
                <Radio id={`${index}-disagree`} name={`${index}`} />
                <Radio id={`${index}-very_disagree`} name={`${index}`} $size="lg" />
              </RadioBox>
              <Text variant="heading_18" color="tertiary">
                그렇지 않다
              </Text>
            </TendencyBox>
          </div>
        );
      })}
      <ButtonContainer>
        <ButtonBox>
          <TextButton $type="16" $leftIcon="/assets/icons/line/direction-left.svg" onClick={onBefore}>
            이전
          </TextButton>
          <Button
            // disabled
            onClick={onNext}
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
  height: 794px;
`;
const Percent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextBox = styled.div`
  margin: 40px 0px 36px 0px;
`;
const TendencyBox = styled.div`
  margin: 24px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RadioBox = styled.div`
  width: 358px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export default ThirdStep;
