import React from 'react';
import styled from 'styled-components';
import Back from '../Back';
import Text from '../Text';

interface PageTitleProps {
  hasBack?: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
}
const PageTitle = ({ hasBack, title, description, children }: PageTitleProps) => {
  return (
    <Wrapper>
      {hasBack && <Back />}
      <Text variant="heading_24" color="primary">
        {title}
      </Text>
      {description && (
        <Text variant="caption_12_regular" color="tertiary">
          {description}
        </Text>
      )}
      {children && children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

PageTitle.displayName = 'PageTitle';

export default PageTitle;
