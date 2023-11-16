import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from '../actions/search';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemBlog from "../components/ItemBlog";
import RecentBlogs from "../components/RecentBlogs";

const Result = () => {
  const dispatch = useDispatch();

  const {
    href,
  } = window.location;

  const splitHref = href.split('/');
  const term = splitHref[splitHref.length -1];

  const {
    data: blogs = [],
  } = useSelector(state => state.search);

  useEffect(() => {
    dispatch(getSearch(term));
  }, [dispatch]);

  return (
    <>
    <Header />
    <Container className="mt-4">
      <Row className="mb-2">
        <Col md={12}>
          <h3 className="fst-italic font-weight-bold my-3 pb-2 border-bottom">Blogs found</h3>
        </Col>
        <Col md={8}>
          {
            blogs.map((blog, indexBlog) => <ItemBlog key={indexBlog} columns={12} blog={blog} />)
          }
        </Col>
        <Col md={4}>
          <RecentBlogs />
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}

export default Result;