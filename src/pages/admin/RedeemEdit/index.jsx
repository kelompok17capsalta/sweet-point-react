import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";

const RedeemEdit = () => {
  const [categories, setCategories] = useState([
    {
      id: "contohcategory1",
      name: "Contoh Category 1",
    },
    {
      id: "contohcategory2",
      name: "Contoh Category 2",
    },
    {
      id: "contohcategory3",
      name: "Contoh Category 3",
    },
  ]);

  let params = useParams();
  console.log(params.itemId);

  return (
    <div className={`container mt-5 ${styles.container}`}>
      <span className={`mt-5 ${styles.header}`}>Edit Data Products</span>
      <div className={`${styles.form_container}`}>
        <div className={`form-outline mb-4`}>
          <label htmlFor="productName" className={styles.input_label}>
            Product Category
          </label>
          <select className="form-select">
            <option selected>Kategori</option>
            {categories.map((category, i) => (
              <option key={i} value={categories.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`form-outline mb-4`}>
          <label htmlFor="productName" className={styles.input_label}>
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            className="form-control form-control-lg"
            placeholder="Write product name..."
          />
        </div>
        <div className="form-outline mb-4">
          <label htmlFor="productDescription" className={styles.input_label}>
            Description
          </label>
          <input
            id="productDescription"
            type="text"
            className="form-control form-control-lg"
            placeholder="Write description..."
          />
        </div>
        <div className="form-outline mb-4">
          <label htmlFor="productPicture" className={styles.input_label}>
            Picture
          </label>
          <div className="input-group form-outline mb-4">
            <input
              type="file"
              id="image_file"
              className="form-control form-control-lg"
              placeholder="Choose a picture"
            />
          </div>
        </div>
        <div>
          <button
            className={`btn btn-success btn-lg ${styles.button_login}`}
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemEdit;
