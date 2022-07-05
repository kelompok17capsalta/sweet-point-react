import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import styles from "./style.module.css";

// Components
import RedeemProductCard from "../../../components/RedeemProductCard";

// Services
import { updateProductList, updateCategory, searchProduct } from "../../../services/redux/ProductList";
import Product from "../../../services/api/Product";

// Utils
import ErrorHandler from "../../../utils/ErrorHandler";
import ProductHelper from "../../../utils/ProductHelper";

const RedeemProducts = () => {
  const {
    search,
    result: productList
  } = useSelector((state) => state.productList);
  const { category } = useParams();
  const dispatch = useDispatch();

  const updateList = async () => {
    try {
      Swal.showLoading();
      const newProductList = await Product.getAllProducts();
      dispatch(updateCategory(category));
      dispatch(updateProductList(newProductList));
      Swal.close();
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    updateList();
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
              placeholder="Cari ..."
              aria-label="Cari Produk"
              aria-describedby="basic-addon1"
              value={search}
              onChange={(event) => {
                dispatch(searchProduct(event.target.value));
              }}
            />

            <button
              type="button"
              className={`input-group-text ${styles.input_icon}`}
              onClick={() => {
                dispatch(searchProduct(''));
              }}
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>

          <div
            className={`input-group mt-3 mt-lg-0 ms-lg-3 ${styles.input_button}`}
          >
            <Link to="/admin/redeem/add" className=" d-block btn btn-primary">
              Tambah Product
            </Link>
          </div>
        </form>
      </section>
      <section>
        <h1 className={`mb-0 h5 ${styles.subpage_title}`}>{ProductHelper.formatCategory(category)}</h1>
        <p>{productList.length} Ditemukan</p>
        <div className="d-flex justify-content-center flex-wrap gap-5">
          {productList.map((product, index) => (
            <RedeemProductCard
              key={index}
              category={category}
              onUpdate={updateList}
              {...product}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RedeemProducts;
