const defaultImageReducerMapping = {
  PENDING: (state) => ({ ...state, isLoading: true }),
  SUCCESS: (state, action) => ({
    ...state,
    data: state.data ? [...state.data, ...action.data] : action.data,
    isLoading: false,
  }),
  ERROR: (state, action) => ({ ...state, isLoading: false, hasError: action.message }),
};

export const defaultImageActionType = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const defaultImageReducer = (state, action) => defaultImageReducerMapping[action.type](state, action) || state;

export const defaultImageReducerInitialValues = {
  data: null,
  isLoading: null,
  hasError: null,
};
