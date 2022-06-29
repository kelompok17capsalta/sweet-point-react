import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import defaultImage from "./profile.png";
import styles from "./style.module.css";
import Swal from "sweetalert2";

// Components
import NumberFormat from 'react-number-format';

// Utils
import ErrorHandling from "../../utils/ErrorHandler";

// Services
import Product from "../../services/api/Product";
import { updateProductForm, updateProductField, resetProductForm } from "../../services/redux/ProductForm";
import InvariantError from "../../errors/InvariantError";

const RedeemProductForm = ({ id } = {}) => {
  const productForm = useSelector((state) => state.productForm.value);
  const [image, setImage] = useState(productForm.image);
  const [oldImage, setOldImage] = useState(null);
	const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const updateProductFormValue = async () => {
        try {
          const product = await Product.getProductById(id);

          setImage(product.image);
          dispatch(updateProductForm(product));
        } catch (error) {
          ErrorHandling.handle(error);
        }
      };

      updateProductFormValue();
    }
  },[])

	const handleClickforInput = () => {
		hiddenFileInput.current.click();
	};

  const categories = [
    "Cash Out",
    "E-Money",
    "Pulsa",
    "Paket Data"
  ];

  const handleChange = (event) => {
		const { name, value } = event.target;

		dispatch(updateProductField({
      [name]: value,
    }));
	};

  const handleChangeImage = (event) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      if (image.startsWith('https')) {
        setOldImage(image);
      }
      setImage(reader.result);
      dispatch(updateProductField({
        image: reader.result,
      }));
    }, false);

    const [file] = event.target.files;
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      Swal.showLoading();

      if (!image) {
        throw new InvariantError("Gambar produk diperlukan !");
      }

      if (!id) {
        await Product.createProduct(productForm);
        await Swal.fire(
          "Sukses !",
          "Produk Berhasil Dibuat",
          "success"
        );

        dispatch(resetProductForm());
        return navigate(-1);
      }

      await Product.updateProduct(productForm, oldImage);
      await Swal.fire(
        "Sukses !",
        "Produk Berhasil dirubah.",
        "success"
      );

      dispatch(resetProductForm());
      navigate(-1);
    } catch (error) {
      ErrorHandling.handle(error);
    }
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card">
          <div className="p-3">
            <img
              src={image || defaultImage}
              className="w-100"
              alt="profile"
            />
          </div>
          <div className="card-body">
            <div className="d-grid gap-2 mb-4">
              <button
                type="button"
                className={`btn btn-lg btn-primary ${styles.btn__submit}`}
                onClick={handleClickforInput}
              >
                Pilih Foto
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-8 offset-lg-1">
        <div className={`form-outline mb-4`}>
          <label htmlFor="c" className={styles.input_label}>
            Kategori
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            required
            value={productForm.category}
            onChange={handleChange}
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className={`form-outline mb-4`}>
          <label htmlFor="name" className={styles.input_label}>
            Nama
          </label>
          <input
            id="name"
            name="product_name"
            type="text"
            className="form-control form-control-lg"
            placeholder="Tulis Nama..."
            required
            value={productForm.product_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-outline mb-4">
          <label htmlFor="descriptions" className={styles.input_label}>
            Deskripsi
          </label>
          <input
            id="descriptions"
            type="text"
            name="descriptions"
            className="form-control form-control-lg"
            placeholder="Tulis deskripsi..."
            value={productForm.descriptions}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-outline mb-4">
          <label htmlFor="denom" className={styles.input_label}>
            Nominal
          </label>
          <NumberFormat
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
            autoComplete="off"
            displayType="number"
            required
            margin="dense"
            id="denom"
            name="denom"
            className="form-control form-control-lg"
            placeholder="Nominal yang didapatkan.."
            min={0}
            value={productForm.denom}
            onChange={handleChange}
          />
        </div>

        <div className="form-outline mb-4">
          <label htmlFor="point" className={styles.input_label}>
            Points
          </label>
          <NumberFormat
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
            autoComplete="off"
            displayType="number"
            id="points"
            name="points"
            className="form-control form-control-lg"
            placeholder="Point yang diperlukan..."
            min={0}
            value={productForm.points}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-outline mb-4">
          <label htmlFor="stock" className={styles.input_label}>
            Stock
          </label>
          <NumberFormat
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
            autoComplete="off"
            displayType="number"
            id="stock"
            name="stock"
            className="form-control form-control-lg"
            placeholder="Stock yang tersedia..."
            min={0}
            value={productForm.stock}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-outline mb-4 d-none">
          <label htmlFor="gambar" className={styles.input_label}>
            Gambar
          </label>
          <div className="input-group form-outline mb-4">
            <input
              ref={hiddenFileInput}
              type="file"
              id="gambar"
              name="image"
              className="form-control form-control-lg"
              placeholder="Pilih gambar"
              onChange={handleChangeImage}
              accept="image/*"
            />
          </div>
        </div>

        <div>
          <button
            className={`btn btn-success btn-lg ${styles.button_login}`}
            type="submit"
          >
            Simpan
          </button>
        </div>
      </div>
    </form>
  );
};

export default RedeemProductForm;
