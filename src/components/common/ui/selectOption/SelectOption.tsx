import { useState } from 'react';
import styled from 'styled-components';
import { TagList } from '../card/TeamCard';

interface SelectOptionProps {
  teamList: {
    tag: keyof TagList;
    name: string;
    description: string;
    members: {
      nickname?: string;
      image?: string;
    }[];
  }[];
  icon?: string;
  subText?: string;
}

// 일단은 header에 들어가는 drowdown만 적용할 수 있는 형식이고 다른 dropdown에 적용되는 형식의 디자인이 나오면 그때 수정

const SelectOption = ({ teamList, icon, subText }: SelectOptionProps) => {
  const arrow_down = '/assets/icons/line/direction-down.svg';
  const arrow_up = '/assets/icons/line/direction-up.svg';
  const [selected, setSelected] = useState<string>(''); // 현재 그룹의 데이터를 가져옴(지금은 임의 값)
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selected}
        {isOpen ? <Arrow src={arrow_up} /> : <Arrow src={arrow_down} />}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {teamList.map((team, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(team.name)}>
              {icon && <Icon src={icon} />}
              <div>
                <Text>{team.name}</Text>
                <SubText>{subText}</SubText>
              </div>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

const Arrow = styled.img`
  font-size: 12px;
`;

const DropdownList = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  z-index: 1000;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.sementicColors.bg.invers};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

const Text = styled.span`
  ${({ theme }) => theme.fontStyle.body_14_semibold};
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
const SubText = styled.span`
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  color: ${({ theme }) => theme.sementicColors.text.secondary};
`;

export default SelectOption;
