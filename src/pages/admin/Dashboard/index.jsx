import styles from './style.module.css';

import TableTransactionAdmin from '../../../components/TableTransactionAdmin';
import TotalPoint from '../../../components/TotalPoint';

const Dashboard = () => (
  <div className={`container mt-5 ${styles.container}`}>
    <span className={styles.header}>Welcome back, Admin!</span>
    <div className="d-flex justify-content-center flex-wrap">
      <TotalPoint />
      <TotalPoint />
      <TotalPoint />
    </div>

    <div className="container mt-5">
      <span className={styles.transaction}>Pending Transaction</span>
      <TableTransactionAdmin />
    </div>
  </div>
);

export default Dashboard;
