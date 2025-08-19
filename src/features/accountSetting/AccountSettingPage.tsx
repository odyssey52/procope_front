'use client';

import { useState } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import SelectOption from '@/shared/ui/select/SelectOption';
import styled from 'styled-components';
import ProfileSetting from './ProfileSetting';
import CommunicationSetting from './CommunicationSetting';
import HeaderLayout from '../layout/HeaderLayout';

const selectOptionList = [
  { value: '프로필 설정', label: '프로필 설정' },
  { value: '소통 설정', label: '소통 설정' },
];

const AccountSettingPage = () => {
  const { user, isLoading } = useAuth();
  const [page, setPage] = useState<'프로필 설정' | '소통 설정'>('프로필 설정');

  const handleSelect = (next: '프로필 설정' | '소통 설정') => setPage(next);

  if (isLoading) {
    return (
      <HeaderLayout>
        <LoadingSpinner />
      </HeaderLayout>
    );
  }
  if (!user) return null;

  return (
    <HeaderLayout>
      <Wrapper>
        <Title>계정 설정</Title>
        <Section>
          <SideBar>
            {selectOptionList.map((value, index) => (
              <SelectOption
                key={index}
                onClick={() => handleSelect(value.value as '프로필 설정' | '소통 설정')}
                display={value.value}
                state={page === value.value ? 'selected' : undefined}
                width="134px"
                borderRadius="8px"
              />
            ))}
          </SideBar>
          <Content>
            {page === '프로필 설정' ? <ProfileSetting data={user} /> : <CommunicationSetting data={user} />}
          </Content>
        </Section>
      </Wrapper>
    </HeaderLayout>
  );
};

const Wrapper = styled.div`
  max-width: 908px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  padding: 0 32px;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh; // 임시 JHW (140px = 12.96vh 지만 디바이스 높이가 작을 경우 마진이 너무 크게 적용되어 8vh로 설정)
`;

const SideBar = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  height: 112px;
  padding: 16px 0px;
`;

const Title = styled.div`
  width: 100%;
  padding: 3px 0px;
  ${({ theme }) => theme.fontStyle.heading_24};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;

const Section = styled.div`
  gap: 24px;
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  flex-grow: 1;
`;

AccountSettingPage.displayName = 'AccountSettingPage';

export default AccountSettingPage;
