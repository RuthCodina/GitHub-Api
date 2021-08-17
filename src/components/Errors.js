import React from "react";

export function Errors({ msg }) {
  return (
    <div className="alert alert-dismissible alert-warning">
      <button className="btn-close" />
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0">{msg}</p>
    </div>
  );
}

export default Errors;
