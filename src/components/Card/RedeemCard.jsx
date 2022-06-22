import React from "react";

export default function RedeemCard({ imgProduct, imgLogo, title, content }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={imgProduct}
        className="card-img-top"
        alt={title}
        style={{ borderRadius: "10px", height: "10rem" }}
      />
      <div className="d-flex justify-content-center">
        <img src={imgLogo} className="rounded" width="75px" alt={title} />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <h6 className="card-title">
            <b>{title}</b>
          </h6>
        </div>
        <p className="card-text text-center">{content}</p>
      </div>
    </div>
  );
}
