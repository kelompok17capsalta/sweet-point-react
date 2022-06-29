import styles from "./style.module.css";

// Components
import RedeemProductForm from "../../../components/RedeemProductForm";

const RedeemAdd = () => {
  return (
    <div className={`container mt-5 ${styles.container}`}>
      <span className={`mt-5 ${styles.header}`}>Tambah Produk Redeem</span>
      
      <RedeemProductForm />
    </div>
  );
};

export default RedeemAdd;
