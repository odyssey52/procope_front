import React from 'react';
import { Link } from 'react-router-dom';
import TextButton from '../button/TextButton';
import styled from 'styled-components';

interface BreadcrumbProps {
  paths: { [key: string]: string }; // key는 경로 이름 (ex. 팀 목록), value는 (ex. /team)
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ paths }) => {
  const pathEntries = Object.entries(paths); // 객체를 배열로 변환
  return (
    <Wrapper aria-label="breadcrumb">
      <ol>
        {pathEntries.map(([name, path], index) => (
          <Breadcrumb key={index}>
            <Link to={path} onClick={() => console.log('1')}>
              <TextButton
                $type="16"
                $style={index < pathEntries.length - 1 ? 'disabled' : undefined}
                $rightIcon={index < pathEntries.length - 1 ? '/assets/icons/line/direction-right.svg' : undefined} // 마지막 항목일 경우 rightIcon 없음
              >
                {name}
              </TextButton>
            </Link>
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