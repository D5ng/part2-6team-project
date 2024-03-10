const httpReducerMapping = {
  PENDING: (state) => ({ ...state, isLoading: true }),
  SUCCESS: (state, action) => ({
    ...state,
    data: {
      ...action.data,
      results: state?.data?.results ? [...state.data.results, ...action.data.results] : action.data.results,
    },
    isLoading: false,
  }),
  ERROR: (state, action) => ({ ...state, isLoading: false, hasError: action.message }),
  DELETE: (state, action) => ({ ...state, data: { ...state.data, results: [...action.data] }}),
};

export const httpActionType = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  DELETE: 'DELETE',
};

export const httpReducer = (state, action) => httpReducerMapping[action.type](state, action) || state;

export const httpReducerInitialValues = {
  data: null,
  isLoading: null,
  hasError: null,
};
