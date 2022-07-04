import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import styles from "./style.module.css";
import iconEdit from "./icon-edit.svg";
import iconDelete from "./icon-delete.svg";

// Services
import Transaction from "../../services/api/Transaction";
import { updateTransactionList } from "../../services/redux/TransactionList"; 

// Utils
import ErrorHandler from "../../utils/ErrorHandler";

const TableTransactionAdmin = () => {
	const transactionList = useSelector((state) => state.transactionList.data);
	const filteredTransactionList = transactionList.filter(({ status }) => status.toLowerCase() === 'pending');
  const dispatch = useDispatch();

	const updateData = async () => {
    try {
      Swal.showLoading();
      const updatedList = await Transaction.getAllTransactions();
      dispatch(updateTransactionList(updatedList));
      Swal.close();
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">
							Username
						</th>
						<th scope="col">
							Provider
						</th>
						<th scope="col">
							Kredential
						</th>
						<th scope="col">
							Kategori
						</th>
						<th scope="col">
							Point
						</th>
						<th scope="col">
							Nominal Hadiah
						</th>
						<th scope="col">
							Aksi
						</th>
					</tr>
				</thead>
				<tbody>
					{filteredTransactionList.map(({ id, provider, credentials, category, points, denom }) => (
						<tr>
							<td>
								<div className="d-flex align-items-center">
									<img src="https://ui-avatars.com/api/?name=dummy+user&background=random&color=ffffff&rounded=true" alt="" className={`${styles.img_profile} me-1`} width="60" height="60" />
									Darlene Robertson
								</div>
							</td>
							<td className="align-middle">{provider}</td>
							<td className="align-middle pe-5">
								<span>{credentials}</span>
							</td>
							<td className="align-middle pe-5">{category}</td>
							<td className="align-middle pe-5">{points}</td>
							<td className="align-middle pe-5">{denom}</td>
							<td className="align-middle">
								<button className="btn btn-primary">Bayar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableTransactionAdmin;
