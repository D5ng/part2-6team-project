import { useCallback, useEffect, useRef } from 'react';

function useIntersectionObserver(onIntersect, options = undefined) {
  const ref = useRef(null);

  const callback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('실행 횟수');
          onIntersect(entry, observer);
          return;
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
}

export default useIntersectionObserver;
