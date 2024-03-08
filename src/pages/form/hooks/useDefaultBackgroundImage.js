import { useCallback, useReducer } from 'react';
import * as Reducer from '@Form/reducer/defaultBackgroundImage-reducer';

function useDefaultBackgroundImage() {
  const [state, dispatch] = useReducer(Reducer.defaultImageReducer, Reducer.defaultImageReducerInitialValues);

  const fetchRequest = useCallback(async ({ url, options }) => {
    dispatch({ type: Reducer.defaultImageActionType.PENDING });
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Unsplash API 호출 횟수를 초과했어요 😂');
        }
      }

      const responseData = await response.json();

      dispatch({ type: Reducer.defaultImageActionType.SUCCESS, data: responseData });
    } catch (error) {
      if (error instanceof TypeError) {
        dispatch({ type: Reducer.defaultImageActionType.ERROR, message: '네트워크 에러 또는 요청이 취소되었습니다.' });
      } else if (error instanceof Error) {
        dispatch({ type: Reducer.defaultImageActionType.ERROR, message: error.message });
      } else {
        dispatch({ type: Reducer.defaultImageActionType.ERROR, message: error.message });
      }
    }
  }, []);

  return {
    state,
    fetchRequest,
  };
}

export default useDefaultBackgroundImage;
