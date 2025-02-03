import Button from '@/components/common/ui/button/Button';
import RadioSurvey from '@/components/common/ui/radio/RadioSurvey';
import Text from '@/components/common/ui/Text';
import { updateUserInfo } from '@/services/user/info/userInfoService';
import { ReadUserInfoResponse } from '@/services/user/info/userInfoService.type';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  data: ReadUserInfoResponse;
}

const CommunicationSetting = ({ data }: Props) => {
  const [preferences, setPreferences] = useState(data.preferenceInfoList.preferences.map((pref) => pref.score));

  const handleRadioChange = (index: number, score: number) => {
    setPreferences((prev) => {
      const updatedPreferences = [...prev];
      updatedPreferences[index] = score;
      return updatedPreferences;
    });
  };
  const updateUserInfoMutation = useMutation({ mutationFn: updateUserInfo });

  const saveUserInfo = async () => {
    try {
      const payload = {
        role: data.roleInfo,
        preferences: preferences.map((score, index) => ({
          questionId: data.preferenceInfoList.preferences[index].questionInfo.id,
          score,
        })),
      };
      await updateUserInfoMutation.mutateAsync(payload);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Content>
      {data.preferenceInfoList.preferences.map(({ questionInfo, score }, index) => {
        return (
          <div key={index}>
            <Text variant="body_14_semibold">{questionInfo.description}</Text>
            <PreferencesBox>
              <Text variant="heading_18" color="tertiary">
                그렇다
              </Text>
              <RadioBox>
                <RadioSurvey
                  id={`preferences-${index}-very-agree`}
                  name={`preferences-${index}`}
                  $size="lg"
                  onClick={() => handleRadioChange(index, 5)}
                  defaultChecked={score === 5}
                />
                <RadioSurvey
                  id={`preferences-${index}-agree`}
                  name={`preferences-${index}`}
                  onClick={() => handleRadioChange(index, 4)}
                  defaultChecked={score === 4}
                />
                <RadioSurvey
                  id={`preferences-${index}-soso`}
                  name={`preferences-${index}`}
                  $size="sm"
                  onClick={() => handleRadioChange(index, 3)}
                  defaultChecked={score === 3}
                />
                <RadioSurvey
                  id={`preferences-${index}-disagree`}
                  name={`preferences-${index}`}
                  onClick={() => handleRadioChange(index, 2)}
                  defaultChecked={score === 2}
                />
                <RadioSurvey
                  id={`preferences-${index}-very-disagree`}
                  name={`preferences-${index}`}
                  $size="lg"
                  onClick={() => handleRadioChange(index, 1)}
                  defaultChecked={score === 1}
                />
              </RadioBox>
              <Text variant="heading_18" color="tertiary">
                그렇지 않다
              </Text>
            </PreferencesBox>
          </div>
        );
      })}
      <BottomSection>
        <div />
        <Button onClick={saveUserInfo}>수정</Button>
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
