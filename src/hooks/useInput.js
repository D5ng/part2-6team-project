import React, { useReducer } from 'react';

import * as inputReducer from 'reducer/input-reducer';

function useInput() {
  const [state, dispatch] = useReducer(inputReducer.nameReducer, inputReducer.initialNameValues);

  const handleChange = (event) => dispatch({ type: inputReducer.nameActionType.CHANGE, value: event.target.value });
  const handleBlur = () => dispatch({ type: inputReducer.nameActionType.BLUR });

  const isValid = state.value.trim().length !== 0;
  const hasError = state.isTouched && !isValid;

  return {
    state,
    hasError,
    handleChange,
    handleBlur,
  };
}

export default useInput;
