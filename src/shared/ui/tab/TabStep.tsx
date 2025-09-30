import { useState } from 'react';
import styled from 'styled-components';
import Tab, { TabType } from './Tab';

interface TabStepProps {
  tabList: TabType[];
}

const TabStep = ({ tabList }: TabStepProps) => {
  // 상태: 현재 열려있는 상위 탭의 고유 경로를 저장합니다.
  const [openTabPath, setOpenTabPath] = useState<string | null>(null);

  // setOpenTab 함수: 특정 탭을 열거나 닫을 때 사용됩니다.
  const setOpenTab = (path: string | null) => {
    setOpenTabPath(path);
  };

  return (
    <Wrapper>
      {tabList.map((tab, i) => (
        <Tab
          key={`TabStep-Tab-${i}`}
          name={tab.name}
          path={tab.path}
          icon={tab.icon}
          subTabs={tab.subTabs}
          // 💡 상태와 상태 변경 함수를 props로 전달합니다.
          openTabPath={openTabPath}
          setOpenTab={setOpenTab}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

TabStep.displayName = 'TabStep';

export default TabStep;
