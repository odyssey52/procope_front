import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';

const JOB_LIST = {
  개발: { src: '/assets/icons/graphic/job/development.svg' },
  기획: { src: '/assets/icons/graphic/job/planning.svg' },
  데이터: { src: '/assets/icons/graphic/job/data.svg' },
  디자인: { src: '/assets/icons/graphic/job/design.svg' },
  마케팅: { src: '/assets/icons/graphic/job/marketing.svg' },
  영업: { src: '/assets/icons/graphic/job/sales.svg' },
  운영: { src: '/assets/icons/graphic/job/operations.svg' },
};

export type JobType = '개발' | '기획' | '데이터' | '디자인' | '마케팅' | '영업' | '운영';

interface TagJobProps {
  type: JobType;
  bgColor?: string;
}
const TagJob = ({ type, bgColor }: TagJobProps) => {
  return (
    <Wrapper $bgColor={bgColor}>
      <Image src={JOB_LIST[type].src} width={16} height={16} alt={`${type}태그아이콘 이미지`} />
      {type}
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
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.sementicColors.bg.tertiary_hover_pressed};
  color: ${({ theme }) => theme.sementicColors.text.primary};
  white-space: nowrap;
  ${({ theme }) => theme.fontStyle.body_14_medium}
`;

TagJob.displayName = 'TagJob';

export default TagJob;
