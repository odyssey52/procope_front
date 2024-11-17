'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

export interface SubTabType {
  name: string;
  path: string;
}
const SubTab = ({ name, path }: SubTabType) => {
  const pathname = usePathname();
  const router = useRouter();
  const selected = pathname === path;
  return (
    <Wrapper $selected={selected} onClick={() => router.push(path)}>
      <span>{name}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  min-width: 268px;
  align-items: center;
  gap: 12px;
  padding: 12px 24px 12px 36px;
  ${({ theme, $selected }) => ($selected ? theme.fontStyle.body_14_semibold : theme.fontStyle.body_14_medium)}
  color: ${({ theme, $selected }) =>
    $selected ? theme.sementicColors.text.invers : theme.sementicColors.text.disabled};
  cursor: pointer;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.sementicColors.text.invers};
  }
  > span {
    flex-grow: 1;
  }
`;

SubTab.displayName = 'SubTab';

export default SubTab;
