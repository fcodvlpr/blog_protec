import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentBlogs from "../components/RecentBlogs";

import { getBlogById } from '../actions/search';
import { formatDate } from "../utils/tools";

const DetailsBlog = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const {
    detail_blog = {},
  } = useSelector(state => state.search);

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch]);

  const {
    author = '',
    content = '',
    image = '',
    start_date = '',
    title = '',
  } = detail_blog;

  return (
    <>
    <Header />
    <Container className="mt-4">
      <Row className="mb-2">
        <Col md={8}>
        <article className="blog-post">
          <h2 className="display-5 link-body-emphasis mb-1">{title}</h2>
          <p className="blog-post-meta">{formatDate(start_date)} by <a href="#">{author}</a></p>
          <hr className="w-100 d-block" />
          <Image 
            className="d-inline mb-3 ms-3 float-end"
            height={350}
            src={image}
          />
          {content}
        </article>
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

export default DetailsBlog;