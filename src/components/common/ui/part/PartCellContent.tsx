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
const getPadding = (size: PartCellContentProps['size']) => {
  switch (size) {
    case 80:
      return css`
        padding: 16px 12px;
      `;
    default:
      return css`
        padding: 4px 12px;
      `;
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
  ${({ $size }) => getPadding($size)}
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
