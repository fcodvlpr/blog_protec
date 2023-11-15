import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentBlogs from "../components/RecentBlogs";

const DetailsBlog = () => {
  return (
    <>
    <Header />
    <Container className="mt-4">
      <Row className="mb-2">
        <Col md={8}>
        <article className="blog-post">
          <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
          <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
          <hr />
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <blockquote className="blockquote">
            <p>Quoted text goes here.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example lists</h3>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
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