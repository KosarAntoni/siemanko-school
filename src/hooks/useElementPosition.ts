import { RefObject, useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

const useElementPosition = (elementRef: RefObject<HTMLElement>): number => {
  const [elementPossition, setElementPosition] = useState<number>(0);
  const documentRef = useRef<Document>(document);
  const entry = useIntersectionObserver(elementRef, {});

  const isVisible = !!entry?.isIntersecting;
  const windowHeight = window.innerHeight;

  useEffect(() => {
    if (!elementRef.current) return;
    const document = documentRef.current;

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
  }, [elementRef, isVisible, windowHeight]);

  return elementPossition;
};

export default useElementPosition;
