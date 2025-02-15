'use client';

import DragHandle from '@tiptap-pro/extension-drag-handle-react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styled from 'styled-components';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
          <h1>
            This is a very unique heading.
          </h1>
          <p>
            This is a unique paragraph. It’s so unique, it even has an ID attached to it.
          </p>
          <p>
            And this one, too.
          </p>
        `,
  });

  const toggleEditable = () => {
    if (!editor) return; // editor가 null이면 함수 종료

    editor.setEditable(!editor.isEditable);
    editor.view.dispatch(editor.view.state.tr);
  };

  if (!editor) return <p>Loading editor...</p>; // editor가 없을 때 로딩 상태 표시
  return (
    <Wrapper>
      <div>
        <button type="button" onClick={toggleEditable}>
          수정 활성화
        </button>
      </div>
      <DragHandle editor={editor}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </DragHandle>
      <EditorContent editor={editor} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ProseMirror {
    padding-inline: 4rem;

    > * + * {
      margin-top: 0.75em;
    }

    [data-id] {
      border: 3px solid #0d0d0d;
      border-radius: 0.5rem;
      margin: 1rem 0;
      position: relative;
      margin-top: 1.5rem;
      padding: 2rem 1rem 1rem;

      &::before {
        content: attr(data-id);
        background-color: #0d0d0d;
        font-size: 0.6rem;
        letter-spacing: 1px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        position: absolute;
        top: 0;
        padding: 0.25rem 0.75rem;
        border-radius: 0 0 0.5rem 0.5rem;
      }
    }
  }

  .drag-handle {
    align-items: center;
    background: #f0f0f0;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: grab;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    width: 1.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
export default Tiptap;
