'use client';

import { IconChat01, IconClockCircle, IconFlag, IconMenuCircleVertical } from '@/shared/assets/icons/line';
import { theme } from '@/shared/styles/theme';
import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import Divider from '../line/Divider';
import TagJob from '../tag/TagJob';
import Text from '../Text';

interface MenuItem {
  id: string | number;
  label: string;
  onClick: () => void;
}

interface TaskCardProps {
  tags?: React.ReactNode[];
  tagJob: 'development' | 'planning' | 'data' | 'design' | 'marketing' | 'sales' | 'operations';
  title: string;
  startDate: string;
  endDate?: string;
  totalComments?: number;
  user: {
    nickname: string;
    profileImage: string;
  };
  hasComments?: boolean;
  showMenu?: boolean;
  menuItems?: MenuItem[];
}

const TaskCard = ({
  tags,
  tagJob,
  title,
  startDate,
  endDate,
  user,
  hasComments = false,
  totalComments = 0,
  showMenu = false,
  menuItems = [],
}: TaskCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (onClick: () => void) => {
    onClick();
    setIsMenuOpen(false);
  };

  return (
    <Wrapper>
      <Top>
        <TagBox>
          <TagList>
            {tags?.map((tag) => tag)}
            <TagJob type={tagJob} bgColor={theme.sementicColors.bg.tertiary_hover_pressed} />
          </TagList>
          {showMenu && (
            <MenuContainer>
              <MenuIconButton onClick={handleMenuClick}>
                <IconMenuCircleVertical />
              </MenuIconButton>
              {isMenuOpen && (
                <MenuDropdown>
                  {menuItems.map((item) => (
                    <Menu key={item.id} onClick={() => handleMenuItemClick(item.onClick)}>
                      {item.label}
                    </Menu>
                  ))}
                </MenuDropdown>
              )}
            </MenuContainer>
          )}
        </TagBox>
        <Text variant="heading_18" color="secondary" ellipsis>
          {title}
        </Text>
      </Top>
      <StartDateBox>
        <IconClockCircle size={20} color={theme.sementicColors.icon.disabled} />
        <Text variant="body_14_medium" color="disabled">
          {startDate}
        </Text>
      </StartDateBox>
      <Divider />
      <Bottom>
        <UserBox>
          <Avatar image={user.profileImage} />
          <Text variant="body_14_medium" color="tertiary">
            {user.nickname}
          </Text>
        </UserBox>
        <BottomRight>
          {hasComments && (
            <CommentBox>
              <IconChat01 size={24} color={theme.sementicColors.icon.tertiary} />
              <Text variant="body_14_medium" color="tertiary">
                {totalComments}
              </Text>
            </CommentBox>
          )}
          {endDate && (
            <EndDateBox>
              <IconFlag size={24} color={theme.sementicColors.icon.tertiary} />
              <Text variant="body_14_medium" color="disabled">
                {endDate}
              </Text>
            </EndDateBox>
          )}
        </BottomRight>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 444px;
  gap: 12px;
  border-radius: 12px;
  padding: 24px;
  max-width: 444px;
  width: 100%;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
`;

const Top = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StartDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MenuContainer = styled.div`
  position: relative;
`;

const MenuIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 10;
`;

const Menu = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  ${({ theme }) => theme.fontStyle.body_14_regular};
  color: ${({ theme }) => theme.sementicColors.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const CommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const EndDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

TaskCard.displayName = 'TaskCard';

export default TaskCard;
