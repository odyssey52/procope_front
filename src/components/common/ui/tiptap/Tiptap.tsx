'use client';

import DragHandle from '@tiptap-pro/extension-drag-handle-react';
import { Editor, EditorContent } from '@tiptap/react';
import styled from 'styled-components';

const Tiptap = ({ editor }: { editor: Editor }) => {
  return (
    <Wrapper>
      <DragHandle editor={editor} className={editor?.isEditable ? 'block' : 'hidden'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </DragHandle>
      <EditorContent editor={editor} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .ProseMirror {
    position: relative;
    &:first-child {
      margin-top: 0;
    }

    /* List styles */
    ul {
      list-style-type: disc;
    }
    ul ul {
      list-style-type: circle;
      margin: 12px 12px 12px 8px;
    }
    ul ul ul {
      list-style-type: square;
    }
    ol {
      list-style-type: decimal;
    }
    ul,
    ol {
      padding: 0 1rem;
      margin: 14px 14px 14px 8px;

      li p {
        padding-top: 0.25em;
        padding-bottom: 0.25em;
      }
    }

    padding: 10px 30px;
    outline-style: none;
    > * + * {
      margin-top: 0.75em;
    }
    strong {
      font-weight: bold;
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
