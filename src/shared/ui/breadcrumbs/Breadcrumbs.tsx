import { IconDirectionRight } from '@/shared/assets/icons/line';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import TextButton from '../button/TextButton';

interface BreadcrumbItem {
  name: string;
  path: string;
  clickable?: boolean;
}

interface BreadcrumbProps {
  paths: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ paths }) => {
  const router = useRouter();

  return (
    <Wrapper aria-label="breadcrumb">
      <ol>
        {paths.map((item, index) => (
          <Breadcrumb key={index}>
            <TextButton
              $type="16"
              $disabled={index < paths.length - 1}
              rightIcon={index < paths.length - 1 ? <IconDirectionRight /> : undefined}
              style={{
                cursor: item.clickable ? 'pointer' : 'default',
              }}
              onClick={() => item.clickable && router.push(item.path)}
            >
              {item.name}
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
