// hooks/useClickOutside.ts
// 외부 클릭 시 컴포넌트 닫힘
import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler();
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchend', listener);
    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [handler]);

  return ref;
}
