import styles from "./style.module.css";
import iconEdit from "./icon-edit.svg";
import iconDelete from "./icon-delete.svg";

const TableTransactionAdmin = () => {
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">
							Name
							<button className={styles.button}>
								<i className={`bi bi-caret-down-fill ms-1 ${styles.arrow_down}`}></i>
							</button>
						</th>
						<th scope="col">
							Email
							<button className={styles.button}>
								<i className={`bi bi-caret-down-fill ms-1 ${styles.arrow_down}`}></i>
							</button>
						</th>
						<th scope="col">
							Status
							<button className={styles.button}>
								<i className={`bi bi-caret-down-fill ms-1 ${styles.arrow_down}`}></i>
							</button>
						</th>
						<th scope="col" colSpan="2">
							Category
							<button className={styles.button}>
								<i className={`bi bi-caret-down-fill ms-1 ${styles.arrow_down}`}></i>
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{/* Baris 1 */}
					<tr>
						<td>
							<div className="d-flex align-items-center">
								<img src="https://ui-avatars.com/api/?name=dummy+user&background=random&color=ffffff&rounded=true" alt="" className={`${styles.img_profile} me-1`} width="60" height="60" />
								Darlene Robertson
							</div>
						</td>
						<td className="align-middle">trungkienspktnd@gamail.com</td>
						<td className="align-middle pe-5">
							<span className={styles.text_success}>Success</span>
						</td>
						<td className="align-middle pe-5">Pulsa</td>
						<td className="align-middle pe-5">
							<button className={`me-3 ${styles.button}`}>
								<img src={iconEdit} alt="edit" />
							</button>
							<button className={styles.button}>
								<img src={iconDelete} alt="delete" />
							</button>
						</td>
					</tr>

					{/* Baris 2 */}
					<tr>
						<td>
							<div className="d-flex align-items-center">
								<img src="https://ui-avatars.com/api/?name=dummy+user&background=random&color=ffffff&rounded=true" alt="" className={`${styles.img_profile} me-1`} width="60" height="60" />

								Darlene Rober
							</div>
						</td>
						<td className="align-middle">truktnd@gamail.com</td>
						<td className="align-middle pe-5">
							<span className={styles.text_failed}>Failed</span>
						</td>
						<td className="align-middle pe-5">Cash Out</td>
						<td className="align-middle pe-5">
							<button className={`me-3 ${styles.button}`}>
								<img src={iconEdit} alt="edit" />
							</button>
							<button className={styles.button}>
								<img src={iconDelete} alt="delete" />
							</button>
						</td>
					</tr>

					{/* Baris 3 */}
					<tr>
						<td>
							<div className="d-flex align-items-center">
								<img src="https://ui-avatars.com/api/?name=dummy+user&background=random&color=ffffff&rounded=true" alt="" className={`${styles.img_profile} me-1`} width="60" height="60" />
								
								Darlen
							</div>
						</td>
						<td className="align-middle">trungkienspktnd@gamail.com</td>
						<td className="align-middle pe-5">
							<span className={styles.text_failed}>Failed</span>
						</td>
						<td className="align-middle pe-5">E-Money</td>
						<td className="align-middle pe-5">
							<button className={`me-3 ${styles.button}`}>
								<img src={iconEdit} alt="edit" />
							</button>
							<button className={styles.button}>
								<img src={iconDelete} alt="delete" />
							</button>
						</td>
					</tr>

					{/* Baris 5 */}
					<tr>
						<td>
							<div className="d-flex align-items-center">
								<img src="https://ui-avatars.com/api/?name=dummy+user&background=random&color=ffffff&rounded=true" alt="" className={`${styles.img_profile} me-1`} width="60" height="60" />

								Darlene Rober
							</div>
						</td>
						<td className="align-middle">ngkienspktnd@gamail.com</td>
						<td className="align-middle pe-5">
							<span className={styles.text_pending}>Pending</span>
						</td>
						<td className="align-middle pe-5">Paket Data</td>
						<td className="align-middle pe-5">
							<button className={`me-3 ${styles.button}`}>
								<img src={iconEdit} alt="edit" />
							</button>
							<button className={styles.button}>
								<img src={iconDelete} alt="delete" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableTransactionAdmin;
