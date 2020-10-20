import React from "react";

const Error = ({ message }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <h5 className="text-center alert alert-danger p-2">{message}</h5>
      </div>
    </div>
  );
};

export default Error;
