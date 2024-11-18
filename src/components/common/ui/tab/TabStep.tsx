import styled from 'styled-components';
import Tab, { TabType } from './Tab';

interface TabStepProps {
  tabList: TabType[];
}
const TabStep = ({ tabList }: TabStepProps) => {
  return (
    <Wrapper>
      {tabList.map((tab, i) => (
        <Tab key={`TabStep-Tab-${i}`} name={tab.name} path={tab.path} icon={tab.icon} subTabs={tab.subTabs} />
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
