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

const newBlog = data => {
  return http.post(`/blogs`, data);
}

const Blogs = {
  getSearch,
  getAllBlogs,
  getBlogById,
  newBlog,
};


export default Blogs;
