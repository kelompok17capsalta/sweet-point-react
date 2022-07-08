import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";

import brilogo from "./brilogo.png";
import RedeemProductCard from "../../../components/RedeemProductCard";

const RedeemProducts = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const mockProducts = [];
    for (let i = 0; i < 10; i++) {
      mockProducts.push({
        title: `Paket ${i}`,
        description: `Saldo Bank ${i} sebesar 50.000 rupiah ada daw awdaw daw awd wa`,
        image: brilogo,
      });
    }
    setProducts(mockProducts);
  }, []);

  return (
    <div className={`container mt-5 ${styles.container}`}>
      <section className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between mt-4">
        <h1 className="mb-0 h3">Data Product</h1>

        <form className="d-flex flex-column flex-lg-row mt-3 mt-lg-1">
          <div className="input-group">
            <span
              className={`input-group-text ${styles.input_icon}`}
              id="basic-addon1"
            >
              <i className="bi bi-search"></i>
            </span>

            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="Search ..."
              aria-label="Search User"
              aria-describedby="basic-addon1"
            />

            <button
              type="button"
              className={`input-group-text ${styles.input_icon}`}
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>

          <div
            className={`input-group mt-3 mt-lg-0 ms-lg-3 ${styles.input_button}`}
          >
            <button type="button" className=" d-block btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </section>
      <section>
        <h1 className={`mb-0 h5 ${styles.subpage_title}`}>{category}</h1>
        <p>{products.length} results found</p>
        <div className="d-flex justify-content-center flex-wrap gap-5">
          {products.map((product, index) => (
            <RedeemProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={brilogo}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RedeemProducts;
