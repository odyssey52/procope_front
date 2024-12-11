import styled from 'styled-components';
import SelectOption, { SelectOptionProps } from './SelectOption';

const ItemList = ({ selectOptionList }: { selectOptionList: SelectOptionProps[] }) => {
  return (
    <Wrapper>
      {selectOptionList.map((item, index) => (
        <SelectOption
          key={index}
          leftContent={item.leftContent}
          text={item.text}
          state={item.state}
          description={item.description}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 8px;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background: ${({ theme }) => theme.sementicColors.bg.invers};

  box-shadow:
    0px 2px 4px 0px rgba(0, 0, 0, 0.16),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
`;
const Option = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
`;

ItemList.displayName = 'ItemList';

export default ItemList;
