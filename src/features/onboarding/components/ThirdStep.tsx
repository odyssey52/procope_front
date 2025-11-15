import { IconDirectionLeft } from '@/shared/assets/icons/line';
import Button from '@/shared/ui/button/Button';
import TextButton from '@/shared/ui/button/TextButton';
import RadioSurvey from '@/shared/ui/radio/RadioSurvey';
import Text from '@/shared/ui/Text';
import propertiesQuestionsQueries from '@/features/properties/query/questions/propertiesQuestionsQueries';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';

export interface Preference {
  questionId: number;
  score: number;
}
interface Props {
  preferences: (Preference | null)[];
  preferencesHandler: (index: number, preference: Preference) => void;
  isValidPreferences: boolean;
  onBefore: () => void;
  onNext: () => void;
}

const ThirdStep = ({ preferences, preferencesHandler, isValidPreferences, onBefore, onNext }: Props) => {
  const { data, isSuccess, isLoading } = useQuery({
    ...propertiesQuestionsQueries.readPropertiesQuestions,
    select: (data) => data.questions.sort((a, b) => a.id - b.id),
  });
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
      <Content>
        {isLoading && <LoadingSpinner />}
        {isSuccess &&
          data?.map(({ id, description }, index) => {
            return (
              <div key={index}>
                <Text variant="body_14_semibold">{description}</Text>
                <PreferencesBox>
                  <Text variant="heading_18" color="tertiary">
                    그렇다
                  </Text>
                  <RadioBox>
                    <RadioSurvey
                      id={`preferences-${index}-very-agree`}
                      name={`preferences-${index}`}
                      $size="lg"
                      onClick={() => preferencesHandler(index, { questionId: id, score: 5 })}
                      defaultChecked={preferences[index]?.score === 5}
                    />
                    <RadioSurvey
                      id={`preferences-${index}-agree`}
                      name={`preferences-${index}`}
                      onClick={() => preferencesHandler(index, { questionId: id, score: 4 })}
                      defaultChecked={preferences[index]?.score === 4}
                    />
                    <RadioSurvey
                      id={`preferences-${index}-soso`}
                      name={`preferences-${index}`}
                      $size="sm"
                      onClick={() => preferencesHandler(index, { questionId: id, score: 3 })}
                      defaultChecked={preferences[index]?.score === 3}
                    />
                    <RadioSurvey
                      id={`preferences-${index}-disagree`}
                      name={`preferences-${index}`}
                      onClick={() => preferencesHandler(index, { questionId: id, score: 2 })}
                      defaultChecked={preferences[index]?.score === 2}
                    />
                    <RadioSurvey
                      id={`preferences-${index}-very-disagree`}
                      name={`preferences-${index}`}
                      $size="lg"
                      onClick={() => preferencesHandler(index, { questionId: id, score: 1 })}
                      defaultChecked={preferences[index]?.score === 1}
                    />
                  </RadioBox>
                  <Text variant="heading_18" color="tertiary">
                    그렇지 않다
                  </Text>
                </PreferencesBox>
              </div>
            );
          })}
      </Content>
      <ButtonContainer>
        <ButtonBox>
          <TextButton $type="16" leftIcon={<IconDirectionLeft />} onClick={onBefore}>
            이전
          </TextButton>
          <Button disabled={!isValidPreferences} onClick={onNext}>
            다음
          </Button>
        </ButtonBox>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;
const TextBox = styled.div`
  margin: 40px 0px 36px 0px;
`;
const PreferencesBox = styled.div`
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
