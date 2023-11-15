import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';

const ItemBlog = ({ columns = 6}) => {
  return (
    <Col md={columns}>
      <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <Col className="p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </p>
          <a href="/details" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </Col>
        <Col className="col-auto d-none d-lg-block">
          <Image 
            height={250} 
            width={200} 
            src="https://images.pexels.com/photos/18892582/pexels-photo-18892582/free-photo-of-nieve-madera-paisaje-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Col>
      </Row>
    </Col>
  );
}

export default ItemBlog;