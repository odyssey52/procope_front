import Button from '@/components/common/ui/button/Button';
import JobMainCard from '@/components/common/ui/card/JobMainCard';
import Text from '@/components/common/ui/Text';
import { JOB_MAIN_IMG_LIST } from '@/constants/stepper';
import propertiesRolesQueries from '@/query/properties/roles/propertiesRolesQueries';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

export interface JobMain {
  id: number;
  name: string;
}
interface Props {
  jobMain: JobMain | null;
  jobMainHandler: (jobMain: JobMain) => void;
  onNext: () => void;
}

const FirstStep = ({ jobMain, jobMainHandler, onNext }: Props) => {
  const { data: roles, isSuccess } = useQuery({
    ...propertiesRolesQueries.readPropertiesRoles,
    select: (data) => data.roles.sort((a, b) => a.id - b.id),
  });

  return (
    <Wrapper>
      <TextBox>
        <Text variant="heading_32">주로 어떤 직무를 맡고 계신가요?</Text>
        <Text variant="body_16_medium" color="secondary">
          답변에 따라 맞춤화된 회고 서비스를 제공해 드려요!
        </Text>
      </TextBox>
      <JobCardBox>
        {isSuccess &&
          roles.map(({ id, name }) => {
            return (
              <JobMainCard
                key={`JobMainCard-${id}`}
                text={name}
                icon={JOB_MAIN_IMG_LIST[id - 1] || ''}
                state={jobMain?.name === name ? 'selected' : undefined}
                onClick={() => jobMainHandler({ id, name })}
              />
            );
          })}
      </JobCardBox>
      <ButtonBox>
        <Button disabled={!jobMain} onClick={onNext}>
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
