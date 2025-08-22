import { IconDirectionLeft } from '@/shared/assets/icons/line';
import Button from '@/shared/ui/button/Button';
import TextButton from '@/shared/ui/button/TextButton';
import JobSubCard from '@/shared/ui/card/JobSubCard';
import Text from '@/shared/ui/Text';
import propertiesFieldsQueries from '@/features/properties/query/fields/propertiesFieldsQueries';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { JobMain } from './FirstStep';

export interface JobSub {
  id: number;
  name: string;
}
interface Props {
  jobMain: JobMain;
  jobSub: JobSub[];
  jobSubHandler: (jobSub: JobSub) => void;
  onBefore: () => void;
  onNext: () => void;
}

const SecondStep = ({ jobMain, jobSub, jobSubHandler, onBefore, onNext }: Props) => {
  const { data, isSuccess } = useQuery({
    ...propertiesFieldsQueries.readPropertiesFields({ roleId: jobMain.id }),
    select: (data) => data.fields.sort((a, b) => a.id - b.id),
  });

  if (!isSuccess) return null;

  return (
    <Wrapper>
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
        {isSuccess &&
          data.map((field) => {
            return (
              <JobSubCard
                key={`JobSubCard-${field.id}`}
                text={field.name}
                state={jobSub.includes(field) ? 'selected' : undefined}
                onClick={() => jobSubHandler(field)}
                width="100%"
              />
            );
          })}
      </JobCardBox>
      <ButtonContainer>
        <ButtonBox>
          <TextButton $type="16" leftIcon={<IconDirectionLeft />} onClick={onBefore}>
            이전
          </TextButton>
          <Button disabled={jobSub.length === 0} onClick={onNext}>
            다음
          </Button>
        </ButtonBox>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const TextBox = styled.div`
  margin: 40px 0px 36px 0px;
`;
const JobCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 24px;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: visible;
  padding: 2px;
  position: relative;
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
