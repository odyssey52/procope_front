import Button from '@/components/common/ui/button/Button';
import RadioSurvey from '@/components/common/ui/radio/RadioSurvey';
import Text from '@/components/common/ui/Text';
import styled from 'styled-components';

const CommunicationSetting = () => {
  return (
    <Content>
      {/* {data.map(({ id, description }, index) => {
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
      })} */}
      <BottomSection>
        <div />
        <Button>수정</Button>
      </BottomSection>
    </Content>
  );
};

const Content = styled.div`
  width: 686px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
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
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CommunicationSetting;
