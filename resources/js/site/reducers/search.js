import {
  RETRIEVE_SEARCH,
  SAVE_SEARCH,
} from "../actions/types";

const initialState = {
  data: [],
  find: '',
};

const actionsMap = {
  [RETRIEVE_SEARCH]: (state, action) => ({
    ...state,
    data: action.payload,
  }),

  [SAVE_SEARCH]: (state, action) => ({
    ...state,
    find: action.payload,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  if (!fn) {
    return state;
  }
  return fn(state, action);
}