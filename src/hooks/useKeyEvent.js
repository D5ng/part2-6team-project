import { useEffect } from 'react';

function useKeyEvent(callback) {
  useEffect(() => {
    const handleKeyEvent = (event) => callback(event.key);
    document.addEventListener('keydown', handleKeyEvent);
    return () => document.removeEventListener('keydown', handleKeyEvent);
  }, []);
}

export default useKeyEvent;
