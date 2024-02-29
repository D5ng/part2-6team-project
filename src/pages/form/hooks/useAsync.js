import { useState } from 'react';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
    try {
      setPending(true);
      setError(null);
      return await asyncFunction(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setPending(false);
    }
  };

  return [pending, error, wrappedFunction];
}

export default useAsync;
