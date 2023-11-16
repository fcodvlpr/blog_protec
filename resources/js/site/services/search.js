import http from "../utils/http-common";

const getSearch = term => {
  return http.get(`/search/${term}`);
};

const getAllBlogs = () => {
  return http.get(`/blogs`);
}

const getBlogById = blog_id => {
  return http.get(`/blogs/${blog_id}`);
}

const Blogs = {
  getSearch,
  getAllBlogs,
  getBlogById,
};


export default Blogs;
