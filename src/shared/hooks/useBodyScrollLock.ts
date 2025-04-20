'use client';

import { useEffect } from 'react';

const useBodyScrollLock = (when = true) => {
  useEffect(() => {
    const lockStyle = {
      overflow: 'hidden',
    };

    if (when) {
      Object.entries(lockStyle).forEach(([property, value]) => {
        document.body.style.setProperty(property, value);
      });
    }

    return () => {
      Object.entries(lockStyle).forEach(([property]) => {
        document.body.style.removeProperty(property);
      });
    };
  }, [when]);
};

export default useBodyScrollLock;
