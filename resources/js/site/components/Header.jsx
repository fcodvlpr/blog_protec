import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="container">
      <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <FontAwesomeIcon icon={faBlog} size="xl"/>
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-body-emphasis text-decoration-none font-weight-bold fs-4" href="/">Blog</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <InputGroup className="mb-0 w-75 me-2">
              <Form.Control
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="basic-addon2"
                className="border-end-0"
              />
              <InputGroup.Text id="basic-addon2" className="bg-white border-start-0">
                <a className="link-secondary" href="/result" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                </a>
              </InputGroup.Text>
            </InputGroup>
            <a className="btn btn-sm btn-outline-secondary font-weight-bold" href="#">Sign in</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;