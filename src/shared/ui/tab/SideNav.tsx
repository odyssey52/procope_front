'use client';

import styled from 'styled-components';
import TabStep from './TabStep';
import { TabType } from './Tab';

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
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-right: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
`;

SideNav.displayName = 'SideNav';

export default SideNav;
