import React from "react";

export default function CardEditUser() {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      <div className="col px-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label fw-bold">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Write Username..."
          />
        </div>
      </div>
      <div className="col px-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label fw-bold">
            Password
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Write Password..."
          />
        </div>
      </div>
      <div className="col px-5 pt-4">
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-success">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
