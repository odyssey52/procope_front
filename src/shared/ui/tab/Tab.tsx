'use client';

import { IconDirectionDown, IconDirectionUp } from '@/shared/assets/icons/line';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useTransition } from 'react';
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
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const isUrlActive = pathname.includes(path);

  const isAccordionOpen = openTabPath === path;
  const isOpenSubTab = isUrlActive || isAccordionOpen;

  const selected = isUrlActive || isPending;

  const onClick = () => {
    if (subTabs && subTabs.length > 0) {
      if (openTabPath === path) {
        setOpenTab(null);
      } else {
        setOpenTab(path);
      }
    } else {
      if (openTabPath) {
        setOpenTab(null);
      }
      startTransition(() => {
        router.push(path);
      });
    }
  };

  return (
    <Wrapper onClick={onClick}>
      <TabWrapper $selected={selected}>
        {icon}
        <span>{name}</span>
        {subTabs && (isOpenSubTab ? <IconDirectionUp /> : <IconDirectionDown />)}
      </TabWrapper>
      <SubTabWrapper>
        {isOpenSubTab &&
          subTabs?.map((subTab, i) => <SubTab key={`Tab-SubTab-${i}`} name={subTab.name} path={subTab.path} />)}
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
`;

const TabWrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  ${({ theme, $selected }) => ($selected ? theme.fontStyle.body_16_semibold : theme.fontStyle.body_16_medium)}
  padding: 16px 0;
  gap: 12px;
  color: ${({ theme, $selected }) =>
    $selected ? theme.sementicColors.text.brand : theme.sementicColors.text.disabled};
  > span {
    flex-grow: 1;
  }
`;

const SubTabWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

Tab.displayName = 'Tab';

export default Tab;
