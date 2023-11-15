import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  const quick_links = ['Home', 'About', 'Blog', 'Archived', 'Author', 'Contact'];
  const categories = ['Lifestyle', 'Technology', 'Travel', 'Bussines', 'Economy', 'Sports'];

  return (
    <footer className="py-5 text-body-secondary bg-body-secondary">
      <Container>
        <Row>
          <Col>
            <span className="font-weight-bold fs-5 d-block mb-3">About</span>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <ul className="list-unstyled">
              <li><span className="font-weight-bold">Email: </span> info@gmail.com</li>
              <li><span className="font-weight-bold">Phone: 880 123 456 789</span></li>
            </ul>
          </Col>
          <Col className="d-flex justify-content-around">
          <ul className="list-unstyled">
            <li><span className="font-weight-bold fs-5 d-block mb-3">Quick Link</span></li>
            {
              quick_links.map((quick_link, key_quick) => 
                <li role="button" key={key_quick} className="text-decoration-underline text-primary">{quick_link}</li>)
            }
          </ul>
          <ul className="list-unstyled">
            <li><span className="font-weight-bold fs-5 d-block mb-3">Category</span></li>
            {
              categories.map((category, key_categories) => 
                <li role="button" key={key_categories} className="text-decoration-underline text-primary">{category}</li>)
            }
          </ul>
          </Col>
          <Col>
            <div className="bg-white p-4 rounded-3">
              <h6 className="font-weight-bold fs-5 text-center mb-3">Weekly Newsletter</h6>
              <p className="text-center">Get a blog artiles and offers via email</p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                  className="border-end-0"
                />
                <InputGroup.Text id="basic-addon2" className="bg-white border-start-0">
                  <FontAwesomeIcon icon={faEnvelope}/>
                </InputGroup.Text>
              </InputGroup>
              <Button variant="primary" className="w-100">Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;