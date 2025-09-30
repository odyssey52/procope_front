import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, Editor } from '@tiptap/react';
import { useEffect, useRef, useState } from 'react';

interface UseRetroAutoSaveOptions {
  initialTitle: string;
  initialContent: string;
  save: (title: string, content: string) => Promise<void> | void;
  placeholder?: string;
  debounceMs?: number;
}

interface UseRetroAutoSaveResult {
  editor: Editor | null;
  currentTitle: string;
  setCurrentTitle: (title: string) => void;
  currentContent: string;
  isInitialized: boolean;
  triggerSave: (immediate?: boolean) => void;
}

const DEFAULT_DEBOUNCE_MS = 3000;

export function useRetroAutoSave(options: UseRetroAutoSaveOptions): UseRetroAutoSaveResult {
  const {
    initialTitle,
    initialContent,
    save,
    placeholder = '본문을 작성해 주세요',
    debounceMs = DEFAULT_DEBOUNCE_MS,
  } = options;

  const [isInitialized, setIsInitialized] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const baselineTitleRef = useRef('');
  const baselineContentRef = useRef('');

  const currentTitleRef = useRef('');
  const currentContentRef = useRef('');

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3] }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: currentContent,
  });

  const handleSave = async (title: string, content: string): Promise<void> => {
    await Promise.resolve(save(title, content)).then(() => undefined);
  };

  const triggerSave = (immediate = false) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    if (immediate) {
      handleSave(currentTitle, currentContent);
    } else {
      saveTimer.current = setTimeout(() => {
        handleSave(currentTitle, currentContent);
      }, debounceMs);
    }
  };

  useEffect(() => {
    if (!editor) return;
    editor.on('update', ({ editor }) => {
      setCurrentContent(editor.getHTML());
    });
  }, [editor]);

  useEffect(() => {
    setCurrentTitle(initialTitle ?? '');
    setCurrentContent(initialContent ?? '');
    baselineTitleRef.current = initialTitle ?? '';
    baselineContentRef.current = initialContent ?? '';
    currentTitleRef.current = initialTitle ?? '';
    currentContentRef.current = initialContent ?? '';
    setIsInitialized(true);

    if (editor && (initialContent ?? '').trim()) {
      editor.commands.setContent(initialContent);
    }
  }, [initialTitle, initialContent, editor]);

  useEffect(() => {
    currentTitleRef.current = currentTitle;
    currentContentRef.current = currentContent;
    if (!isInitialized) return;

    const changedTitle = currentTitle !== baselineTitleRef.current;
    const changedContent = currentContent !== baselineContentRef.current;
    if (changedTitle || changedContent) {
      triggerSave(false);
    }
  }, [currentTitle, currentContent, isInitialized]);

  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      if (!isInitialized) return;

      const finalTitle = currentTitleRef.current;
      const finalContent = currentContentRef.current;
      const changedTitle = finalTitle !== baselineTitleRef.current;
      const changedContent = finalContent !== baselineContentRef.current;
      if ((finalTitle || finalContent) && (changedTitle || changedContent)) {
        handleSave(finalTitle, finalContent);
      }
    };
  }, [isInitialized]);

  return {
    editor,
    currentTitle,
    setCurrentTitle,
    currentContent,
    isInitialized,
    triggerSave,
  };
}

export default useRetroAutoSave;
