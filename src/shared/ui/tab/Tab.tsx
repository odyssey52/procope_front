'use client';

import { IconDirectionDown, IconDirectionUp } from '@/shared/assets/icons/line';
import Link, { useLinkStatus } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import styled from 'styled-components';
import SubTab, { SubTabType } from './SubTab';

export interface TabType {
  name: string;
  path: string;
  icon: ReactNode;
  subTabs?: SubTabType[];
}
interface TabProps extends TabType {
  openTabPath: string | null;
  setOpenTab: (path: string | null) => void;
}

const Tab = ({ name, path, icon, subTabs, openTabPath, setOpenTab }: TabProps) => {
  const pathname = usePathname();
  const { pending: isLinkPending } = useLinkStatus();

  const isUrlActive = pathname.includes(path);
  const isAccordionOpen = openTabPath === path;

  const shouldRenderSubTabs = subTabs && subTabs.length > 0;

  const isOpenSubTab = shouldRenderSubTabs && (isUrlActive || isAccordionOpen || isLinkPending);

  const selected = isUrlActive || isLinkPending;

  const handleToggleClick = () => {
    if (openTabPath === path) {
      setOpenTab(null);
    } else {
      setOpenTab(path);
    }
  };

  const renderTab = () => {
    return (
      <TabWrapper $selected={selected} onClick={handleToggleClick}>
        {icon}
        <span>{name}</span>
        {subTabs && (isOpenSubTab ? <IconDirectionUp /> : <IconDirectionDown />)}
      </TabWrapper>
    );
  };
  return (
    <Wrapper>
      {shouldRenderSubTabs ? renderTab() : <Link href={path}>{renderTab()}</Link>}
      <SubTabWrapper>
        {isOpenSubTab &&
          subTabs.map((subTab, i) => <SubTab key={`Tab-SubTab-${i}`} name={subTab.name} path={subTab.path} />)}
      </SubTabWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  user-select: none;
`;

const TabWrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  ${({ theme, $selected }) => ($selected ? theme.fontStyle.body_16_semibold : theme.fontStyle.body_16_medium)}
  padding: 16px 0;
  gap: 12px;
  user-select: none;
  color: ${({ theme, $selected }) =>
    $selected ? theme.sementicColors.text.brand : theme.sementicColors.text.disabled};
  > span {
    flex-grow: 1;
  }

  /* 브라우저별 접두사 (호환성을 위해 권장) */
`;

const SubTabWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

Tab.displayName = 'Tab';

export default Tab;
