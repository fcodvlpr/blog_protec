import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemBlog from "../components/ItemBlog";

const Home = () => {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <Row className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary bg-blog-main mx-0">
          <Col lg={6}>
            <h1 className="display-4 fst-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3 text-white">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={12} className="d-flex pb-2 justify-content-between align-items-center my-3">
            <h3 className="fst-italic font-weight-bold">Recent posts</h3>
            <a className="btn btn-sm btn-outline-primary font-weight-bold" href="/newpost">Add new post</a>
          </Col>
          <ItemBlog />

        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;