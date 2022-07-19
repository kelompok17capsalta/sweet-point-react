import styles from './style.module.css';

import TableTransactionAdmin from '../../../components/TableTransactionAdmin';
import AdminSummary from '../../../components/AdminSummary';

const Dashboard = () => (
  <div className={`container mt-5 ${styles.container}`}>
    <span className={styles.header}>Welcome back, Admin!</span>
    <AdminSummary />

    <div className="container mt-5">
      <span className={styles.transaction}>Pending Transaction</span>
      <TableTransactionAdmin />
    </div>
  </div>
);

export default Dashboard;
