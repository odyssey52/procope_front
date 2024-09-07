import useMounted from '@/hooks/useMounted';
import { useEffect, type PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  id?: string;
}

const DEFAULT_ID = 'portal-root';

const Portal = ({ id = DEFAULT_ID, children }: PropsWithChildren<Props>) => {
  const [hasPortal, setHasPortal] = useState(false);

  const isMounted = useMounted();

  useEffect(() => {
    const defaultPortal = document.getElementById(DEFAULT_ID);
    const portal = () => {
      return document.getElementById(id);
    };

    if (!portal()) {
      const el = document.createElement('div');
      el.setAttribute('id', id);

      if (id !== DEFAULT_ID && defaultPortal) {
        insertBeforeDialogPortal(el);
      } else {
        document.body.appendChild(el);
      }
    }

    setHasPortal(true);

    function insertBeforeDialogPortal(el: HTMLDivElement) {
      document.getElementById(DEFAULT_ID)?.prepend(el);
    }
  }, [id]);

  if (!(isMounted && hasPortal)) return null;

  return createPortal(children, document.getElementById(id) as HTMLElement);
};

export default Portal;
