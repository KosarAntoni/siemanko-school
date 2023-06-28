import { RefObject, useEffect, useState } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

const useElementPosition = (elementRef: RefObject<HTMLElement>): number => {
  const [elementPossition, setElementPosition] = useState<number>(0);
  const entry = useIntersectionObserver(elementRef, {});

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = (): void => {
      const offsetTop = elementRef?.current?.getBoundingClientRect().top;
      if (!offsetTop) return;

      setElementPosition(offsetTop);
    };

    if (isVisible) {
      document.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('scroll', handleScroll);
    }

    return () => document.removeEventListener('scroll', handleScroll);
  }, [elementRef, isVisible]);

  return elementPossition;
};

export default useElementPosition;
