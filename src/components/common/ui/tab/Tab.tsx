import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';

interface TabProps {
  leftIcon: string;
  text: string;
  rightIcon?: string;
  selected?: boolean;
}
const Tab = ({ leftIcon, text, rightIcon, selected }: TabProps) => {
  return (
    <Wrapper>
      <Image src={leftIcon} width={24} height={24} alt="좌측 탭 아이콘이미지" color="white" />
      <Text
        className="tab-text"
        color={selected ? 'invers' : 'disabled'}
        variant={selected ? 'body_16_semibold' : 'body_16_medium'}
      >
        {text}
      </Text>
      {rightIcon && <Image src={rightIcon} width={24} height={24} alt="우측 탭 아이콘이미지" />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-width: 268px;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  color: ${({ theme }) => theme.sementicColors.text.disabled};
  cursor: pointer;
  > .tab-text {
    flex-grow: 1;
  }
`;

Tab.displayName = 'Tab';

export default Tab;
