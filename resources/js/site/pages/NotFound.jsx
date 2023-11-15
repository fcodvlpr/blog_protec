import React from "react";

const NotFound = () => {
  return (
    <div className="position-relative d-flex aling-items-top justify-content-center bg-dark h-100" style={{minHeight: "100vh"}}>
      <div className="mx-auto my-auto">
        <div className="d-flex aling-items-center pt-8 flex-column">
          <div className="px-4 text-lg text-white font-weight-bold fs-4">
            404
          </div>
          <div className="ml-4 text-lg text-white font-weight-bold fs-4">
            Not Found
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;