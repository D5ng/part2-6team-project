import { useCallback, useReducer } from 'react';
import * as Reducer from 'reducer/http-reducer';

function useHttp() {
  const [state, dispatch] = useReducer(Reducer.httpReducer, Reducer.httpReducerInitialValues);

  const fetchRequest = useCallback(async ({ url, errorMapping }) => {
    dispatch({ type: Reducer.httpActionType.PENDING });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (!errorMapping) throw new Error('알 수 없는 이유로 요청에 실패했습니다.', 500);
        const errorMessage = errorMapping[response.status] || errorMapping['500'];
        throw new Error(errorMessage);
      }

      const responseData = await response.json();

      dispatch({ type: Reducer.httpActionType.SUCCESS, data: responseData });
    } catch (error) {
      if (error instanceof TypeError) {
        dispatch({ type: Reducer.httpActionType.ERROR, message: '네트워크 에러 또는 요청이 취소되었습니다.' });
      } else if (error instanceof Error) {
        dispatch({ type: Reducer.httpActionType.ERROR, message: error.message });
      } else {
        dispatch({ type: Reducer.httpActionType.ERROR, message: '알 수 없는 이유로 요청에 실패했습니다.' });
      }
    }
  }, []);

  return {
    state,
    fetchRequest,
  };
}

export default useHttp;
