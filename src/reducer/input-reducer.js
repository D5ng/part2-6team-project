export const initialNameValues = {
  value: '',
  isTouched: false,
  hasError: null,
};

export const nameReducerMapping = {
  BLUR: (state, action) => ({ ...state, isTouched: true }),
  CHANGE: (state, action) => ({ ...state, value: action.value }),
  ERROR: (state, action) => ({ ...state, hasError: action.error }),
};

export const nameActionType = {
  BLUR: 'BLUR',
  CHANGE: 'CHANGE',
  ERROR: 'ERROR',
};

export const nameReducer = (state, action) => nameReducerMapping[action.type](state, action) || state;
