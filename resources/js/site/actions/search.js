import {
  RETRIEVE_BLOG,
  RETRIEVE_SEARCH,
  SAVE_SEARCH,
} from "./types";

import Search from "../services/search";

export const getSearch = (term) => async (dispatch) => {
  try {
    const response = await Search.getSearch(term);

    const {
      data = [],
    } = response;

    dispatch({
      type: RETRIEVE_SEARCH,
      payload: data,
    });
  } catch (err) {
    console.log({errorGetSearch: err});
  }
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    const response = await Search.getAllBlogs();

    const {
      data = [],
    } = response;

    dispatch({
      type: RETRIEVE_SEARCH,
      payload: data,
    });
  } catch (err) {
    console.log({errorGetSearch: err});
  }
}

export const getBlogById = blog_id => async (dispatch) => {
  try {
    const response = await Search.getBlogById(blog_id);

    const {
      data = [],
    } = response;

    const detail_blog = data.length ? data[0] : {};

    dispatch({
      type: RETRIEVE_BLOG,
      payload: detail_blog,
    });
  } catch (err) {
    console.log({errorGetSearch: err});
  }
}

export const saveSearch = (term) => (dispatch) => {
  dispatch({
    type: SAVE_SEARCH,
    payload: term,
  });
}