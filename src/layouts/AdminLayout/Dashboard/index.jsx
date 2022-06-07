import React from "react";
import TableTransactionAdmin from "../../../components/TableTransactionAdmin";
import TotalPoint from "../../../components/TotalPoint";
import style from "./dashboard-admin.module.css";

const Dashboard = () => {
	return (
		<>
			<div className="container mt-5">
				<span className={style.header}>Welcome back, Admin!</span>
				<div className="d-flex justify-content-center flex-wrap">
					<TotalPoint />
					<TotalPoint />
					<TotalPoint />
				</div>
				<div className="container mt-5">
					<span className={style.transaction}>Recent Transaction</span>
					<TableTransactionAdmin />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
