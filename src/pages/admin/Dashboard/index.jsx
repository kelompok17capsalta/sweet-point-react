import styles from "./style.module.css";

import AdminNavbar from '../../../components/AdminNavbar';
import AdminFooter from '../../../components/AdminFooter';
import TableTransactionAdmin from "../../../components/TableTransactionAdmin";
import TotalPoint from "../../../components/TotalPoint";

const Dashboard = () => {
	return (
		<>
			<AdminNavbar />

			<div className={`container mt-5 ${styles.container}`}>
				<span className={styles.header}>Welcome back, Admin!</span>
				<div className="d-flex justify-content-center flex-wrap">
					<TotalPoint />
					<TotalPoint />
					<TotalPoint />
				</div>

				<div className="container mt-5">
					<span className={styles.transaction}>Recent Transaction</span>
					<TableTransactionAdmin />
				</div>
			</div>
			<AdminFooter />
		</>
	);
};

export default Dashboard;
