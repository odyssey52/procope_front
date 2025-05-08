import { IconDirectionRight } from '@/shared/assets/icons/line';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import TextButton from '../button/TextButton';

interface BreadcrumbProps {
  paths: { [key: string]: string }; // key는 경로 이름 (ex. 팀 목록), value는 (ex. /team)
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ paths }) => {
  const pathEntries = Object.entries(paths); // 객체를 배열로 변환
  const router = useRouter();
  return (
    <Wrapper aria-label="breadcrumb">
      <ol>
        {pathEntries.map(([name, path], index) => (
          <Breadcrumb key={index}>
            <TextButton
              $type="16"
              $disabled={index < pathEntries.length - 1}
              rightIcon={index < pathEntries.length - 1 ? <IconDirectionRight /> : undefined} // 마지막 항목일 경우 rightIcon 없음
              onClick={() => router.push(path)}
            >
              {name}
            </TextButton>
          </Breadcrumb>
        ))}
      </ol>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  > ol {
    display: flex;
  }
`;
const Breadcrumb = styled.li`
  padding: 2px 0;
  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
    cursor: pointer;
  }
  border-radius: 4px;
`;
export default Breadcrumbs;
