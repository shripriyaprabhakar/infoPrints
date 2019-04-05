import React from "react";

const Spinner = props => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "50px" }}
    >
      {props.message}
      <div className="spinner-border align-items-center" role="status">
        <span className="mx-auto sr-only mt-5">
          <strong>{props.message}</strong>
        </span>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
