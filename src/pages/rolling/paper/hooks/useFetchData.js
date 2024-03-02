import { useCallback, useReducer, useState } from 'react';
import * as Reducer from 'reducer/http-reducer';

function useFetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);

  const fetchRequest = useCallback(async ({ url }) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const responseData = await response.json();

      setData((prevData) => ({
        ...responseData,
        results: prevData?.results ? [...prevData.results, ...responseData.results] : responseData.results,
      }));
    } catch (error) {
      setHasError(error.message);
    }

    setIsLoading(false);
  }, []);

  return {
    state: { data, isLoading, hasError },
    fetchRequest,
  };
}

export default useFetchData;
