'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import styled from 'styled-components';
import Tab4 from './Tab4';

interface SegmentedTabsProps {
  tabs: {
    title: string;
    href: string;
  }[];
}
// JHW : useSearchParams 를 사용할 때에는 Suspense 를 사용하도록 next 프레임워크에서 강제하고 있습니다.
// 이유는 URL 을 가져오기 위해 비동기 작업이 필요하기 때문

const SegmentedTabs = (props: SegmentedTabsProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SegmentedTabsContent {...props} />
    </Suspense>
  );
};

const SegmentedTabsContent = ({ tabs }: SegmentedTabsProps) => {
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
