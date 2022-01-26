import { useRef, useEffect, RefObject } from 'react';

export const useIsMountedRef = (): RefObject<boolean> => {
  const isMountedRef = useRef(true);

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    [],
  );

  return isMountedRef;
};
