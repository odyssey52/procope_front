'use client';

import { useState } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import SelectOption from '@/shared/ui/select/SelectOption';
import styled from 'styled-components';
import ProfileSetting from './ProfileSetting';
import CommunicationSetting from './CommunicationSetting';
import HeaderLayout from '../layout/HeaderLayout';

const selectOptionList = [{ value: '프로필 설정' }, { value: '소통 설정' }];

const AccountSetting = () => {
  const { user, isLoading } = useAuth();
  const [page, setPage] = useState<'프로필 설정' | '소통 설정'>('프로필 설정');

  const valueHandler = (value: string) => {
    return value === '프로필 설정' ? setPage('프로필 설정') : setPage('소통 설정');
  };

  if (isLoading) {
    return (
      <HeaderLayout>
        <LoadingSpinner />
      </HeaderLayout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <HeaderLayout>
      <Wrapper>
        <Title>계정 설정</Title>
        <Section>
          <SideBar>
            {selectOptionList.map((value, index) => (
              <SelectOption
                key={index}
                valueHandler={() => valueHandler(value.value)}
                value={value.value}
                pageName={page}
                width={134}
                borderRadius="8px"
              />
            ))}
          </SideBar>
          {page === '프로필 설정' ? <ProfileSetting data={user} /> : <CommunicationSetting data={user} />}
        </Section>
      </Wrapper>
    </HeaderLayout>
  );
};

export default AccountSetting;

const Wrapper = styled.div`
  width: 844px;
  height: 630px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  display: flex;
`;

AccountSetting.displayName = 'AccountSetting';
