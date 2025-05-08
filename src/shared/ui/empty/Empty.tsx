import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';

interface EmptyProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const Empty = ({ title, description, onClick }: EmptyProps) => {
  return (
    <Wrapper>
      <Image
        src="/assets/icons/graphic/glass/add.png"
        width={120}
        height={120}
        onClick={onClick}
        alt="추가 아이콘 이미지"
      />
      <TextBox>
        <Text variant="heading_18" color="primary">
          {title}
        </Text>
        <Text variant="body_14_regular" color="secondary">
          {description}
        </Text>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

Empty.displayName = 'Empty';

export default Empty;
