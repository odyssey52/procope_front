'use client';

import { IconDirectionDown, IconDirectionUp } from '@/assets/icons/line';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import styled from 'styled-components';
import SubTab, { SubTabType } from './SubTab';

export interface TabType {
  name: string;
  path: string;
  icon: ReactNode;
  subTabs?: SubTabType[];
}

const Tab = ({ name, path, icon, subTabs }: TabType) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname.includes(path);
  const isOpenSubTab = selected && subTabs;

  const onClick = () => {
    if (subTabs) {
      router.push(subTabs[0].path);
    } else {
      router.push(path);
    }
  };

  return (
    <Wrapper $selected={selected} onClick={onClick}>
      <TabWrapper $selected={selected}>
        {icon}
        <span>{name}</span>
        {subTabs && isOpenSubTab ? <IconDirectionUp /> : <IconDirectionDown />}
      </TabWrapper>
      <SubTapWrapper>
        {isOpenSubTab &&
          subTabs.map((subTab, i) => <SubTab key={`Tab-SubTab-${i}`} name={subTab.name} path={subTab.path} />)}
      </SubTapWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 268px;
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
    $selected ? theme.sementicColors.text.invers : theme.sementicColors.text.disabled};
  > span {
    flex-grow: 1;
  }
`;

const SubTapWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

Tab.displayName = 'Tab';

export default Tab;
