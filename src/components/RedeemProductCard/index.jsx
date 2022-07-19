import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './style.module.css';

// Services
import Product from '../../services/api/Product';

// Utils
import ErrorHandler from '../../utils/ErrorHandler';

const RedeemProductCard = ({
  id, product_name, descriptions, image, stock, onUpdate,
}) => {
  const handleDelete = async () => {
    try {
      const { isConfirmed } = await Swal.fire({
        title: 'Apakah anda yakin?',
        text: 'Data Produk yang dihapus tidak akan bisa dikembalikan.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Tidak.',
      });

      if (!isConfirmed) return;

      Swal.showLoading();

      await Product.deleteProduct(id, image);

      await onUpdate();

      await Swal.fire(
        'Terhapus!',
        'Data produk berhasil dihapus.',
        'success',
      );
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  return (
    <div className={`${styles.redeem_product_container} p-4`}>
      <img src={image} alt={product_name} className="w-100" />

      <div>
        <p className={`${styles.redeem_product_title}`}>{product_name}</p>
        <p className={`${styles.redeem_product_sub}`}>{descriptions}</p>
        <p className={`${styles.redeem_product_sub}`}>Stok : {stock}</p>
        <div>
          <Link to={`/admin/redeem/${id}/edit`} className="btn btn-info text-light me-3">Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RedeemProductCard;
