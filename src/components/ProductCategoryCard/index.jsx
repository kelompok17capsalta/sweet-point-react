import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const ProductCategoryCard = ({ image, title, redirectTo }) => (
  <Link to={redirectTo}>
    <div className={`${styles.product_category_container}`}>
      <div height="60px">
        <img src={image} height="100%" alt={title} />
      </div>
      <span className={`mt-2 ${styles.product_category_title}`}>{title}</span>
    </div>
  </Link>
);

export default ProductCategoryCard;
