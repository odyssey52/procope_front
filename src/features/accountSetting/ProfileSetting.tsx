import { useEffect, useState } from 'react';
import Avatar from '@/shared/ui/avatar/Avatar';
import Button from '@/shared/ui/button/Button';
import Chip from '@/shared/ui/chip/Chip';
import Label from '@/shared/ui/label/Label';
import Placeholder from '@/shared/ui/placeholder/Placeholder';
import Radio from '@/shared/ui/radio/Radio';
import { ReadUserInfoResponse } from '@/features/user/services/info/userInfoService.type';
import { toastActions } from '@/shared/lib/store/modal/toast';
import styled from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { updateUserInfo } from '@/features/user/services/info/userInfoService';
import propertiesRolesQueries from '@/features/properties/query/roles/propertiesRolesQueries';
import propertiesFieldsQueries from '@/features/properties/query/fields/propertiesFieldsQueries';
import { JobSub } from '../onboarding/SecondStep';
import DeleteModal from './DeleteModal';
import { JobMain } from '../onboarding/FirstStep';

interface Props {
  data: ReadUserInfoResponse;
}

const ProfileSetting = ({ data }: Props) => {
  const [avatar, setAvatar] = useState<{
    type: 'profile' | 'initial';
    image: string;
    nickname: string;
  }>(() => ({
    type: 'profile',
    image: data.userContext.picture,
    nickname: data.userContext.name,
  }));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(data.userContext.name);
  const [jobSelectedValue, setJobSelectedValue] = useState<JobMain>(data.roleInfo);
  const [subJob, setSubJob] = useState<JobSub[]>(data.roleInfo.fields);
  const updateUserInfoMutation = useMutation({ mutationFn: updateUserInfo });

  const { data: roles, isSuccess: isRolesSuccess } = useQuery({
    ...propertiesRolesQueries.readPropertiesRoles,
    select: (data) => data.roles.sort((a, b) => a.id - b.id),
  });
  const { data: subJobList, isSuccess: isSubJobListSuccess } = useQuery({
    ...propertiesFieldsQueries.readPropertiesFields({ roleId: jobSelectedValue.id }),
    select: (data) => data.fields.sort((a, b) => a.id - b.id),
  });

  const saveUserInfo = async () => {
    try {
      const payload = {
        role: {
          id: jobSelectedValue.id,
          name: jobSelectedValue.name,
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
  const handleJob = (index: number, value: string) => {
    setJobSelectedValue({ id: index, name: value });
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

  useEffect(() => {
    setAvatar((prev) => ({
      ...prev,
      type: data.userContext.picture ? 'profile' : 'initial',
    }));
  }, [data.userContext.picture]);

  return (
    <Content>
      <Avatar type={avatar.type} size={84} image={avatar.image} nickname={avatar.nickname} />
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
          {isRolesSuccess &&
            roles.map(({ id, name, fields }) => {
              return (
                <Radio
                  key={`Radio-${id}`}
                  size={20}
                  name={name}
                  id={name}
                  label={name}
                  checked={jobSelectedValue.name === name}
                  onChange={() => handleJob(id, name)}
                />
              );
            })}
        </RadioBox>
      </JobSection>
      <WorkSection>
        <Label required text="담당 업무 (최대 3개)" />
        <ChipBox>
          {isSubJobListSuccess &&
            subJobList.map((value) => {
              const isSelected = subJob.some((job) => job.name === value.name);
              return (
                <Chip
                  key={`Chip-${value.id}`}
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
  width: 100%;
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
