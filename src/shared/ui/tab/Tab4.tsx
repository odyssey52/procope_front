'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface Tab4Props {
  title: string;
  href: string;
}

const Tab4 = ({ title, href }: Tab4Props) => {
  const router = useRouter();
  return <Wrapper onClick={() => router.push(href)}>{title}</Wrapper>;
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.sementicColors.bg.primary};
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  padding: 8px 12px;
  cursor: pointer;
`;

Tab4.displayName = 'Tab4';

export default Tab4;
