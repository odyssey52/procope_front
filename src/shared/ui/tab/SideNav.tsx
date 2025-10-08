'use client';

import { down } from '@/shared/styles/media';
import styled from 'styled-components';
import { TabType } from './Tab';
import TabStep from './TabStep';

interface SideNavProps {
  tabList: TabType[];
}
const SideNav = ({ tabList }: SideNavProps) => {
  return (
    <Wrapper>
      <TabStep tabList={tabList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px;
  flex-shrink: 0;
  width: 16.46%;
  height: 100%;
  min-width: 296px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-right: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  ${down('md')`
    display: none;
  `}
`;

SideNav.displayName = 'SideNav';

export default SideNav;
