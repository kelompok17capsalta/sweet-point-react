import React from "react";
import styles from "./style.module.css";

const RedeemProductCard = ({ title, description, image }) => {
  return (
    <div className={`${styles.redeem_product_container}`}>
      <div height="20px">
        <img src={image} height="100" />
      </div>
      <div>
        <p className={`${styles.redeem_product_title}`}>{title}</p>
        <p className={`${styles.redeem_product_description}`}>{description}</p>
        <div>
          <button className="btn btn-info text-light me-3">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RedeemProductCard;
