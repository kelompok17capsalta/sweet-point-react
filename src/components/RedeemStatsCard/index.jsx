import React from "react";
import styles from "./style.module.css";

const RedeemStatsCard = ({ title, value }) => {
  return (
    <div className={`${styles.redeem_container}`}>
      <span className={`${styles.redeem_title}`}>{title}</span>
      <span className={`${styles.redeem_value}`}>{value} Coins</span>
    </div>
  );
};

export default RedeemStatsCard;
