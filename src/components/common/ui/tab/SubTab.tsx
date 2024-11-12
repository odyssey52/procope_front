'use client';

import styled from 'styled-components';

interface SubTabProps {
  text: string;
  selected?: boolean;
}
const SubTab = ({ text, selected }: SubTabProps) => {
  return (
    <Wrapper $selected={selected}>
      <span>{text}</span>
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
