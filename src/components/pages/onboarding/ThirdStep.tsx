import { IconDirectionLeft } from '@/assets/icons/line';
import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import RadioSurvey from '@/components/common/ui/radio/RadioSurvey';
import Text from '@/components/common/ui/Text';
import { TENDENCY_TITLE_LIST } from '@/constants/stepper';
import styled from 'styled-components';

interface Props {
  tendency: (number | null)[];
  tendencyHandler: (index: number, tendency: number) => void;
  isValidTendency: boolean;
  onBefore: () => void;
  onNext: () => void;
}

const ThirdStep = ({ tendency, tendencyHandler, isValidTendency, onBefore, onNext }: Props) => {
  return (
    <Wrapper>
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
      {TENDENCY_TITLE_LIST.map((title, index) => {
        return (
          <div key={index}>
            <Text variant="body_14_semibold">{title}</Text>
            <TendencyBox>
              <Text variant="heading_18" color="tertiary">
                그렇다
              </Text>
              <RadioBox>
                <RadioSurvey
                  id={`tendency-${index}-very-agree`}
                  name={`tendency-${index}`}
                  $size="lg"
                  onClick={() => tendencyHandler(index, 4)}
                  defaultChecked={tendency[index] === 4}
                />
                <RadioSurvey
                  id={`tendency-${index}-agree`}
                  name={`tendency-${index}`}
                  onClick={() => tendencyHandler(index, 3)}
                  defaultChecked={tendency[index] === 3}
                />
                <RadioSurvey
                  id={`tendency-${index}-soso`}
                  name={`tendency-${index}`}
                  $size="sm"
                  onClick={() => tendencyHandler(index, 2)}
                  defaultChecked={tendency[index] === 2}
                />
                <RadioSurvey
                  id={`tendency-${index}-disagree`}
                  name={`tendency-${index}`}
                  onClick={() => tendencyHandler(index, 1)}
                  defaultChecked={tendency[index] === 1}
                />
                <RadioSurvey
                  id={`tendency-${index}-very-disagree`}
                  name={`tendency-${index}`}
                  $size="lg"
                  onClick={() => tendencyHandler(index, 0)}
                  defaultChecked={tendency[index] === 0}
                />
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
          <TextButton $type="16" leftIcon={<IconDirectionLeft />} onClick={onBefore}>
            이전
          </TextButton>
          <Button disabled={!isValidTendency} onClick={onNext}>
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
