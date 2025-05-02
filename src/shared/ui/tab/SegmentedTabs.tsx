'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Tab4 from './Tab4';

interface SegmentedTabsProps {
  tabs: {
    title: string;
    href: string;
  }[];
}

const SegmentedTabs = ({ tabs }: SegmentedTabsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isSelected = (href: string) => {
    const [targetPath, targetQuery] = href.split('?');
    const currentQuery = searchParams.toString();
    // pathname이 일치하는지 확인
    if (pathname !== targetPath) return false;

    // 쿼리 파라미터가 있는 경우에만 비교
    if (targetQuery) {
      return currentQuery === targetQuery;
    }

    return true;
  };

  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Tab4 key={tab.title} title={tab.title} href={tab.href} selected={isSelected(tab.href)} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 12px;
  padding: 4px;

  background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
`;

SegmentedTabs.displayName = 'SegmentedTabs';

export default SegmentedTabs;
