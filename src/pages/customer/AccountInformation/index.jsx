import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from 'sweetalert2';
import style from "./style.module.css";
import CustomerNavbar from "../../../components/CustomerNavbar";
import ProfileCard from "../../../components/ProfileCard";


// Utils
import ErrorHandler from "../../../utils/ErrorHandler";

const AccountInformation = () => {
  const customer = useSelector((state) => state.customer.value);
	const [formValue, setFormValue] = useState({
		name: customer?.name || '',
		address: customer?.address || '',
		phone: customer?.phone || '',
	});

	const handleUpdate = async (e) => {
		try {
			e.preventDefault();

			swal.showLoading();
			await swal.fire(
				'Data berhasil disimpan.',
				'',
				'success',
			)
		} catch (error) {
			ErrorHandler.handle(error);
		}
	} 

	return (
		<>
			<CustomerNavbar />
			<div className={style.informasi__page}>
				{/* breadcrumb */}
				<div className="container mt-5">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Informasi Akun
							</li>
						</ol>
					</nav>
				</div>

				{/* Edit Akun */}
				<div className="container mb-5">
					<div className="row">
						<div className="col-12 col-lg-4 mb-5 mb-lg-0">
							<ProfileCard />
						</div>
						<div className="col-12 col-lg-8">
							<div className="d-flex align-items-center">
								<span className={style.icon__person}>
									<i className="bi bi-person fw-bold"></i>
								</span>
								<span className={style.title__name}>{customer?.name}</span>
							</div>

							<div className={style.edit__account}>
								<div className="container">
									<h6 className={`mt-5 mb-4 ${style.title__edit}`}>
										Ubah Biodata Diri
									</h6>
									<form onSubmit={handleUpdate}>
										<div className="row">
											<div className="col-12">
												<div className="mb-4">
													<label htmlFor="name">
														<h6 className={style.title__edit}>Nama Lengkap</h6>
													</label>
													<input
														type="text"
														id="name"
														name="name"
														value={formValue.name}
													/>
												</div>
												<div className="mb-4">
													<label htmlFor="address">
														<h6 className={style.title__edit}>Alamat</h6>
													</label>
													<input
														type="text"
														id="address"
														name="address"
														value={formValue.address}
													/>
												</div>
												<div className="mb-4">
													<label htmlFor="phone">
														<h6 className={style.title__edit}>
															Nomor Handphone
														</h6>
													</label>
													<input
														type="text"
														id="phone"
														name="phone"
														value={formValue.phone}
													/>
												</div>
											</div>

											<div className="col-12 d-flex justify-content-end">
												<button
													className={`btn btn-lg btn-primary mb-4 mt-lg-1 ${style.btn__submit}`}
												>
													Save
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountInformation;
