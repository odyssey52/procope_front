'use client';

import { IconChat01 } from '@/shared/assets/icons/line';
import { theme } from '@/shared/styles/theme';
import BulletList from '@tiptap/extension-bullet-list';
import History from '@tiptap/extension-history';
import ListItem from '@tiptap/extension-list-item';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import MoreArea from '../button/MoreArea';
import Divider from '../line/Divider';
import TagJob from '../tag/TagJob';
import Text from '../Text';
import Tiptap from '../tiptap/Tiptap';

const MAX_LINES = 9;
const MAX_CHARS = 170;

export type RetroCardRole = 'development' | 'planning' | 'data' | 'design' | 'marketing' | 'sales' | 'operations';
interface RetroCardProps {
  item: {
    role: RetroCardRole;
    title: string;
    content: string;
    user: {
      nickname: string;
      profileImage: string;
    };
    totalComments: number;
  };
}
const RetroCard = ({ item }: RetroCardProps) => {
  const editor = useEditor({
    extensions: [BulletList, StarterKit, ListItem],
    content: item.content,
    editable: false,
  });

  const toggleEditable = () => {
    if (!editor) return; // editor가 null이면 함수 종료

    editor.setEditable(!editor.isEditable);
    editor.view.dispatch(editor.view.state.tr);
  };

  if (!editor) return <p>Loading editor...</p>; // editor가 없을 때 로딩 상태 표시
  return (
    <Wrapper>
      <Content>
        <TagBox>
          <TagJob type={item.role} bgColor={theme.sementicColors.bg.tertiary_hover_pressed} />
          <div>
            <button type="button" onClick={toggleEditable}>
              {editor.isEditable ? '업데이트' : '편집'}
            </button>
          </div>
          <MoreArea />
        </TagBox>
        <TextBox>
          <Text variant="body_16_semibold" color="primary">
            {item.title}
          </Text>

          <Tiptap editor={editor} />
        </TextBox>
      </Content>
      <Divider />
      <Bottom>
        <CommentBox>
          <IconChat01 />
          <Text variant="body_14_medium" color="tertiary">
            {item.totalComments}
          </Text>
        </CommentBox>
        <UserBox>
          <Text variant="body_14_medium" color="tertiary">
            {item.user.nickname}
          </Text>
          <Avatar image={item.user.profileImage} />
        </UserBox>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  min-width: 460px;
  max-width: 500px;

  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  border-radius: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const TagBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
RetroCard.displayName = 'RetroCard';

export default RetroCard;
