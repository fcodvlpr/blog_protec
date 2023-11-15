import http from "../utils/http-common";

const getSearch = (query) => {
  return http.get(`/search?q=${query}`);
};

const Search = {
  getSearch,
};


export default Search;
