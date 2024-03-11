import { useCallback, useReducer } from 'react';
import * as Reducer from 'reducer/http-reducer';

function useHttp() {
  const [state, dispatch] = useReducer(Reducer.httpReducer, Reducer.httpReducerInitialValues);

  const fetchRequest = useCallback(async ({ url, options, id }) => {
    dispatch({ type: Reducer.httpActionType.PENDING });
    try {
      const response = await fetch(url, options);

      if (response.status === 204) {
        dispatch({ type: Reducer.httpActionType.DELETE, id });
        return;
      }

      const responseData = await response.json();

      dispatch({ type: Reducer.httpActionType.SUCCESS, data: responseData });
    } catch (error) {
      if (error instanceof TypeError) {
        dispatch({ type: Reducer.httpActionType.ERROR, message: '네트워크 에러 또는 요청이 취소되었습니다.' });
      } else if (error instanceof Error) {
        dispatch({ type: Reducer.httpActionType.ERROR, message: error.message });
      } else {
        dispatch({ type: Reducer.httpActionType.ERROR, message: error.message });
      }
    }
  }, []);

  return {
    state,
    fetchRequest,
  };
}

export default useHttp;
