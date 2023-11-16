import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { crearURL, formatDate } from '../utils/tools';

const ItemBlog = ({columns = 6, blog  = {}}) => {

  const {
    author = '',
    blog_id = '',
    content = '',
    image = '',
    start_date = '',
    title = '',
  } = blog;

  return (
    <Col md={columns}>
      <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <Col className="p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">{author}</strong>
          <h3 className="mb-0">{title}</h3>
          <div className="mb-1 text-body-secondary small my-2">{formatDate(start_date)}</div>
          <p className="card-text mb-auto" dangerouslySetInnerHTML={{__html: content.substring(0,69)}}>
          </p>
          <a href={`/details/${blog_id}/${crearURL(title)}`} className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </Col>
        <Col className="col-auto d-none d-lg-block">
          <Image 
            height={250} 
            width={200} 
            src={image}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default ItemBlog;