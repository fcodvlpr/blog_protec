import React from "react";
import Image from 'react-bootstrap/Image';

const RecentBlogItem = () => {
  return (
    <li>
      <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/details">
        <Image
          height={96} 
          width="100%"
          src="https://images.pexels.com/photos/18892582/pexels-photo-18892582/free-photo-of-nieve-madera-paisaje-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="col-lg-8">
          <h6 className="mb-0">Example blog post title</h6>
          <small className="text-body-secondary">January 15, 2023</small>
        </div>
      </a>
    </li>
  );
}

export default RecentBlogItem;