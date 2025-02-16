'use client';

import { theme } from '@/styles/theme';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styled from 'styled-components';
import { IconMenuCircleVertical } from '@/assets/icons/line';
import TagJob from '../tag/TagJob';
import Tiptap from '../tiptap/Tiptap';

interface RetroCardProps {
  item: {
    role: 'development' | 'planning' | 'data' | 'design' | 'marketing' | 'sales' | 'operations';
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
    extensions: [StarterKit],
    content: item.content,
  });

  const toggleEditable = () => {
    if (!editor) return; // editor가 null이면 함수 종료

    editor.setEditable(!editor.isEditable);
    editor.view.dispatch(editor.view.state.tr);
  };

  if (!editor) return <p>Loading editor...</p>; // editor가 없을 때 로딩 상태 표시
  return (
    <Wrapper>
      <TagJob type={item.role} bgColor={theme.sementicColors.bg.tertiary_hover_pressed} />

      <div>
        <button type="button" onClick={toggleEditable}>
          수정 활성화
        </button>
      </div>
      <Tiptap editor={editor} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  border-radius: 12px;
`;

RetroCard.displayName = 'RetroCard';

export default RetroCard;
