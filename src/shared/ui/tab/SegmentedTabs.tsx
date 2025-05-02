'use client';

import styled from 'styled-components';
import Tab4 from './Tab4';

interface SegmentedTabsProps {
  tabs: {
    title: string;
    href: string;
  }[];
}

const SegmentedTabs = ({ tabs }: SegmentedTabsProps) => {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Tab4 key={tab.title} title={tab.title} href={tab.href} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: ${({ theme }) => theme.sementicColors.bg.primary}; */
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
`;

SegmentedTabs.displayName = 'SegmentedTabs';

export default SegmentedTabs;
