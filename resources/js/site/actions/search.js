
import {
  RETRIEVE_SEARCH,
  SAVE_SEARCH,
} from "./types";

export const getSearch = (query) => async (dispatch) => {
  try {
    const items = {};

    dispatch({
      type: RETRIEVE_SEARCH,
      payload: items,
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveSearch = (query) => (dispatch) => {
  dispatch({
    type: SAVE_SEARCH,
    payload: query,
  });
}