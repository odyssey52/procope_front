import { useState } from 'react';
import Avatar from '@/components/common/ui/avatar/Avatar';
import Button from '@/components/common/ui/button/Button';
import Chip from '@/components/common/ui/chip/Chip';
import Label from '@/components/common/ui/label/Label';
import Placeholder from '@/components/common/ui/placeholder/Placeholder';
import { JOB_MAIN_LIST } from '@/constants/stepper';
import Radio from '@/components/common/ui/radio/Radio';
import { ReadUserInfoResponse } from '@/services/user/info/userInfoService.type';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { updateUserInfo } from '@/services/user/info/userInfoService';
import { JobSub } from '../onboarding/SecondStep';
import DeleteModal from './DeleteModal';

interface Props {
  data: ReadUserInfoResponse;
}

const ProfileSetting = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [jobSub, setJobSub] = useState<JobSub[]>([]);
  const updateUserInfoMutation = useMutation({ mutationFn: updateUserInfo });

  const jobList = Object.keys(JOB_MAIN_LIST);
  const workList = JOB_MAIN_LIST[data.roleInfo.name].roles;

  const saveUserInfo = async () => {
    try {
      const payload = {
        role: {
          id: data.roleInfo.id,
          name: selectedValue,
          fields: jobSub.map((work) => ({ id: work.id, name: work.name })),
        },
      };
      await updateUserInfoMutation.mutateAsync(payload);
    } catch (err) {
      console.log(err);
    }
  };
  const handleWorkSelect = (work: JobSub) => {
    setJobSub((prevWorks) =>
      prevWorks.includes(work) ? prevWorks.filter((item) => item !== work) : [...prevWorks, work],
    );
  };
  const accountDelete = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Content>
      <Avatar type="initial" size={84} nickname="B" />
      <Placeholder value={data!.userContext.name} label={{ text: '이름', required: true }} maxLength={10} />
      <Placeholder
        value={data!.userContext.email}
        disabled
        label={{ text: '이메일', required: false }}
        maxLength={200}
      />
      <JobSection>
        <Label required text="직무" />
        <RadioBox>
          {jobList.map((value, index) => {
            return (
              <Radio
                key={index}
                size={20}
                name={value}
                id={value}
                label={value}
                checked={selectedValue === data?.roleInfo.name}
                onChange={() => setSelectedValue(value)}
              />
            );
          })}
        </RadioBox>
      </JobSection>
      <WorkSection>
        <Label required text="담당 업무 (최대 3개)" />
        <ChipBox>
          {workList.map((value, index) => {
            return (
              <Chip
                key={index}
                size={12}
                label={value.name}
                onClick={() => handleWorkSelect(value)}
                selected={jobSub.includes(value)}
              />
            );
          })}
        </ChipBox>
      </WorkSection>
      <BottomSection>
        <AccountDelete onClick={accountDelete}>회원탈퇴</AccountDelete>
        <Button onClick={saveUserInfo}>수정</Button>
      </BottomSection>

      {isModalOpen && <DeleteModal onClose={closeModal} />}
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
const JobSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const WorkSection = styled.div``;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AccountDelete = styled.div`
  cursor: pointer;
`;
const RadioBox = styled.div`
  display: flex;
  gap: 12px;
`;
const ChipBox = styled.div`
  display: flex;
  gap: 8px;
`;

export default ProfileSetting;
