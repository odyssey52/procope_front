import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface PageSubTitleProps {
  number?: number;
  first?: string;
  point?: string;
  last?: string;
  children?: React.ReactNode;
}
const PageSubTitle = ({ number, first, point, last, children }: PageSubTitleProps) => {
  return (
    <Wrapper>
      {number && (
        <Text variant="heading_18" color="brand">
          {number}
        </Text>
      )}
      <TitleBox>
        {first && (
          <Text variant="heading_18" color="secondary">
            {first}
          </Text>
        )}
        {point && (
          <Text variant="heading_18" color="brand">
            {point}
          </Text>
        )}
        {last && (
          <Text variant="heading_18" color="secondary">
            {last}
          </Text>
        )}
      </TitleBox>
      {children && children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  gap: 8px;
`;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  flex-grow: 1;
`;
PageSubTitle.displayName = 'PageTitle';

export default PageSubTitle;
