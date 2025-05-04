'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface Tab4Props {
  title: string;
  href: string;
  selected?: boolean;
}

const Tab4 = ({ title, href, selected }: Tab4Props) => {
  const router = useRouter();
  return (
    <Wrapper onClick={() => router.push(href)} $selected={selected} role="tab" aria-selected={selected}>
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $selected?: boolean }>`
  width: fit-content;
  ${({ $selected, theme }) =>
    $selected
      ? `
      background: ${theme.sementicColors.bg.inverse};
      color: ${theme.sementicColors.text.primary};
      box-shadow:
        0px 1px 2px 0px rgba(0, 0, 0, 0.16),
        0px 0px 1px 0px rgba(0, 0, 0, 0.12);
  `
      : `
      color: ${theme.sementicColors.text.tertiary};
    &:hover {
      color: ${theme.sementicColors.text.primary};
    }
  `}
  padding: 8px 12px;
  cursor: pointer;

  border-radius: 8px;
`;

Tab4.displayName = 'Tab4';

export default Tab4;
