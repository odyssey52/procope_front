'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text';

interface PartCellContentProps {
  size?: 44 | 56 | 64 | 80;
  icon?: React.ReactNode;
  title?: string;
  button?: React.ReactNode;
  description?: string;
}
// 사이즈에 의한 패딩 값 반환
const getHeight = (size: PartCellContentProps['size']) => {
  switch (size) {
    case 44:
      return 44;
    case 56:
      return 56;
    case 64:
      return 64;
    case 80:
      return 80;
    default:
      return 56;
  }
};

const getIconSize = (size: PartCellContentProps['size']) => {
  switch (size) {
    case 44:
      return 36;
    case 56:
      return 36;
    case 64:
      return 48;
    case 80:
      return 48;
    default:
      return 36;
  }
};
const PartCellContent = ({ size = 56, icon, title, button, description }: PartCellContentProps) => {
  return (
    <Wrapper $size={size}>
      {icon}
      <Content>
        {(title || button) && (
          <TitleBox>
            <Text variant="body_14_medium" color="primary">
              {title}
            </Text>
            {button}
          </TitleBox>
        )}
        <Text variant="body_14_regular" color="secondary">
          {description}
        </Text>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $size: PartCellContentProps['size'] }>`
  display: flex;
  align-items: center;
  gap: 8px;
  height: ${({ $size }) => getHeight($size)}px;
  svg {
    width: ${({ $size }) => getIconSize($size)}px;
    height: ${({ $size }) => getIconSize($size)}px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export default PartCellContent;
