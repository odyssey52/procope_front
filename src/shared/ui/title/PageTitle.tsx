import React from 'react';
import styled from 'styled-components';
import Back from '../Back';
import Text from '../Text';

interface PageTitleProps {
  hasBack?: boolean;
  title: string;
  setTitle?: (title: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  description?: string;
  children?: React.ReactNode;
}

const PageTitle = ({ hasBack, title, setTitle, onBlur, placeholder, description, children }: PageTitleProps) => {
  return (
    <Wrapper>
      {hasBack && <Back />}
      {setTitle && (
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
      {!setTitle && (
        <Text variant="heading_24" color="primary">
          {title}
        </Text>
      )}
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
  width: 100%;
  gap: 8px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  background: transparent;
  ${({ theme }) => theme.fontStyle.heading_24};
  color: ${({ theme }) => theme.sementicColors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.sementicColors.text.disabled};
  }
`;
PageTitle.displayName = 'PageTitle';

export default PageTitle;
