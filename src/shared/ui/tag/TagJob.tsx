import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';

const JOB_LIST = {
  development: { title: '개발', src: '/assets/icons/graphic/job/development.svg' },
  planning: { title: '기획', src: '/assets/icons/graphic/job/planning.svg' },
  data: { title: '데이터', src: '/assets/icons/graphic/job/data.svg' },
  design: { title: '디자인', src: '/assets/icons/graphic/job/design.svg' },
  marketing: { title: '마케팅', src: '/assets/icons/graphic/job/marketing.svg' },
  sales: { title: '영업', src: '/assets/icons/graphic/job/sales.svg' },
  operations: { title: '운영', src: '/assets/icons/graphic/job/operations.svg' },
};

interface TagJobProps {
  type: 'development' | 'planning' | 'data' | 'design' | 'marketing' | 'sales' | 'operations';
  bgColor?: string;
}
const TagJob = ({ type, bgColor }: TagJobProps) => {
  return (
    <Wrapper $bgColor={bgColor}>
      <Image src={JOB_LIST[type].src} width={16} height={16} alt={`${JOB_LIST[type].title}태그아이콘 이미지`} />
      <Text color="primary" variant="body_14_medium">
        {JOB_LIST[type].title}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $bgColor?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 2px 8px;
  width: fit-content;
  gap: 2px;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.sementicColors.bg.inverse};
`;

TagJob.displayName = 'TagJob';

export default TagJob;
