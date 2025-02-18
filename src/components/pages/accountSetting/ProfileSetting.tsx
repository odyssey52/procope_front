import { useState } from 'react';
import Avatar from '@/components/common/ui/avatar/Avatar';
import Button from '@/components/common/ui/button/Button';
import Chip from '@/components/common/ui/chip/Chip';
import Label from '@/components/common/ui/label/Label';
import Placeholder from '@/components/common/ui/placeholder/Placeholder';
import { JOB_MAIN_LIST } from '@/constants/stepper';
import Radio from '@/components/common/ui/radio/Radio';
import { ReadUserInfoResponse } from '@/services/user/info/userInfoService.type';
import { toastActions } from '@/store/modal/toast';
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
  const [name, setName] = useState(data.userContext.name);
  const [jobSelectedValue, setJobSelectedValue] = useState<string>(data.roleInfo.name);
  const [subJob, setSubJob] = useState<JobSub[]>(data.roleInfo.fields);
  const updateUserInfoMutation = useMutation({ mutationFn: updateUserInfo });

  const jobList = Object.keys(JOB_MAIN_LIST);
  const subJobList = JOB_MAIN_LIST[jobSelectedValue as keyof typeof JOB_MAIN_LIST].roles;

  const saveUserInfo = async () => {
    try {
      const payload = {
        role: {
          id: data.roleInfo.id,
          name: jobSelectedValue,
          fields: subJob.map((work) => ({ id: work.id, name: work.name })),
        },
      };
      await updateUserInfoMutation.mutateAsync(payload);
      toastActions.open({
        state: 'success',
        title: '계정 정보가 성공적으로 수정되었습니다.',
      });
    } catch (err) {
      toastActions.open({
        state: 'error',
        title: '다시 시도해 주세요.',
      });
    }
  };
  const handleJob = (value: string) => {
    setJobSelectedValue(value);
    setSubJob([]); // 선택된 Chip 초기화
  };
  const handleSubJob = (name: string, id: number) => {
    setSubJob((prev) => {
      if (prev.some((job) => job.name === name)) return prev.filter((job) => job.name !== name);
      return prev.length < 3 ? [...prev, { id, name }] : prev;
    });
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
      <Placeholder value={name} valueHandler={setName} label={{ text: '이름', required: true }} maxLength={10} />
      <Placeholder
        value={data.userContext.email}
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
                checked={jobSelectedValue === value}
                onChange={() => handleJob(value)}
              />
            );
          })}
        </RadioBox>
      </JobSection>
      <WorkSection>
        <Label required text="담당 업무 (최대 3개)" />
        <ChipBox>
          {subJobList.map((value, index) => {
            const isSelected = subJob.some((job) => job.name === value.name);
            return (
              <Chip
                key={index}
                size={12}
                label={value.name}
                selected={isSelected}
                onClick={() => handleSubJob(value.name, value.id)}
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
const WorkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AccountDelete = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
const RadioBox = styled.div`
  display: flex;
  gap: 12px;
`;
const ChipBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default ProfileSetting;
