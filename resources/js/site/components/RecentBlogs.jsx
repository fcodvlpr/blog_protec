import React from "react";

import RecentBlogItem from './RecentBlogItem';

const RecentBlogs = () => {
  return (
    <div className="position-sticky">
      <div className="p-4 mb-3 bg-body-tertiary rounded">
        <h4 className="fst-italic">About</h4>
        <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
      </div>

      <div>
        <h4 className="fst-italic">Recent posts</h4>
        <ul className="list-unstyled">
          <RecentBlogItem />
        </ul>
      </div>

      <div className="p-4">
        <h4 className="fst-italic">Archives</h4>
        <ol className="list-unstyled mb-0">
          <li><a href="#">March 2021</a></li>
        </ol>
      </div>
    </div>
  );
}

export default RecentBlogs;