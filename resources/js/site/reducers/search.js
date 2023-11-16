import {
  RETRIEVE_SEARCH,
  RETRIEVE_BLOG,
  SAVE_SEARCH,
} from "../actions/types";

const initialState = {
  data: [],
  find: '',
  detail_blog: [],
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

  [RETRIEVE_BLOG]: (state, action) => ({
    ...state,
    detail_blog: action.payload,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  if (!fn) {
    return state;
  }
  return fn(state, action);
}