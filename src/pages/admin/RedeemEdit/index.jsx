import { useParams } from "react-router-dom";
import styles from "./style.module.css";

// Components
import RedeemProductForm from "../../../components/RedeemProductForm";

const RedeemEdit = () => {
  
  const params = useParams();

  return (
    <div className={`container mt-5 ${styles.container}`}>
      <span className={`mt-5 ${styles.header}`}>Edit Data Produck</span>
      
      <RedeemProductForm id={params.id} />
    </div>
  );
};

export default RedeemEdit;
