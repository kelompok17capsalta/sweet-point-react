import { useEffect, useState } from 'react';
import styles from './style.module.css';

// Services
import Admin from '../../services/api/Admin';

// Utils
import MoneyFormatter from '../../utils/MoneyFormatter';
import ErrorHandler from '../../utils/ErrorHandler';

const AdminSummary = () => {
  const [points, setPoints] = useState({
    user: 0,
    product: 0,
    transaction: 0,
  });

  useEffect(() => {
    const updatePoints = async () => {
      try {
        const summaryPoint = await Admin.getSummary();
        setPoints(summaryPoint);
      } catch (error) {
        ErrorHandler.handle(error);
      }
    };

    updatePoints();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className={`mb-4 mx-1 mb-xxl-0 ${styles.container_card}`}>
        <span className={styles.point}>{MoneyFormatter.format(points.user)}</span>
        <span className={styles.description}>Total Customer</span>
      </div>

      <div className={`mb-4 mx-1 mb-xxl-0 ${styles.container_card}`}>
        <span className={styles.point}>{MoneyFormatter.format(points.product)}</span>
        <span className={styles.description}>Total Produk</span>
      </div>

      <div className={`mb-4 mx-1 mb-xxl-0 ${styles.container_card}`}>
        <span className={styles.point}>{MoneyFormatter.format(points.transaction)}</span>
        <span className={styles.description}>Total Transaksi</span>
      </div>
    </div>
  );
};

export default AdminSummary;
