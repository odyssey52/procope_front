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
  flex-shrink: 0;
  width: 16.46%;
  min-width: 296px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border-right: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  @media (max-width: 768px) {
    display: none;
  }
`;

SideNav.displayName = 'SideNav';

export default SideNav;
