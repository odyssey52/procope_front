'use client';

import Link, { useLinkStatus } from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

export interface SubTabType {
  name: string;
  path: string;
}

const SubTab = ({ name, path }: SubTabType) => {
  const pathname = usePathname();
  const { pending } = useLinkStatus();

  const isPathSelected = pathname === path;
  const selected = isPathSelected || pending;

  return (
    <Link href={path}>
      <Wrapper $selected={selected}>
        <span>{name}</span>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px 12px 36px;
  ${({ theme, $selected }) => ($selected ? theme.fontStyle.body_14_semibold : theme.fontStyle.body_14_medium)}
  color: ${({ theme, $selected }) =>
    $selected ? theme.sementicColors.text.brand : theme.sementicColors.text.disabled};
  cursor: pointer;
  user-select: none;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.sementicColors.text.brand};
  }
  > span {
    flex-grow: 1;
  }
`;

SubTab.displayName = 'SubTab';

export default SubTab;
