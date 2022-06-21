import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from 'sweetalert2';
import style from "./style.module.css";
import profile from "./profile.png";
import CustomerNavbar from "../../../components/CustomerNavbar";
import ProfileCard from "../../../components/ProfileCard";

// Services
import Storage from '../../../services/firebase/Storage';

// Utils
import ErrorHandler from "../../../utils/ErrorHandler";
import Swal from "sweetalert2";

const AccountInformation = () => {
	const [fotoProfile, setFotoProfile] = useState(null);
	const [preview, setPreview] = useState(profile);
	const hiddenFileInput = useRef(null);
  const customer = useSelector((state) => state.customer.value);

	const handleChangeInput = (event) => {
		const fileUploaded = event.target.files[0];
		setFotoProfile(fileUploaded);

		const reader = new FileReader();

		reader.addEventListener('load', () => {
			setPreview(reader.result);
		}, false);

		reader.readAsDataURL(fileUploaded);
	};

	const handleClickforInput = () => {
		hiddenFileInput.current.click();
	};

	const handleUpdate = async (e) => {
		try {
			e.preventDefault();

			swal.showLoading();
			// if (fotoProfile) {
			// 	const imageUrl = await Storage.uploadCustomerProfile(customer, fotoProfile);
			// 	setPreview(imageUrl);
			// }

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
								<span className={style.title__name}>Asep yahud</span>
							</div>

							<div className={style.edit__account}>
								<div className="container">
									<h6 className={`mt-5 mb-4 ${style.title__edit}`}>
										Ubah Biodata Diri
									</h6>
									<form onSubmit={handleUpdate}>
										<div className="row">
											<div className="col-12 col-lg-5 mb-5 mb-lg-0 d-flex d-lg-inline justify-content-center">
												<div className="card" style={{ width: "18rem" }}>
													<div className="p-3">
														<img
															src={preview}
															className={style.img__profile}
															alt="profile"
														/>
													</div>
													<div className="card-body">
														<div className="d-grid gap-2 mb-4">
															<label
																className={`btn btn-lg btn-primary ${style.btn__submit}`}
																onClick={handleClickforInput}
															>
																Pilih Foto
															</label>
															<input
																type="file"
																id="input"
																style={{ display: "none" }}
																accept="image/*"
																ref={hiddenFileInput}
																onChange={handleChangeInput}
															/>
														</div>
														<p className="card-text">
															Besar file: maksimum 10.000.000 bytes (10
															Megabytes). Ekstensi file yang diperbolehkan: .JPG
															.JPEG .PNG
														</p>
													</div>
												</div>
											</div>
											<div className="col-12 col-lg-7">
												<div className="mb-4">
													<label htmlFor="name">
														<h6 className={style.title__edit}>Nama Lengkap</h6>
													</label>
													<input
														type="text"
														id="name"
														name="name"
														value="Asep Yahud"
													/>
												</div>
												<div className="mb-4">
													<label htmlFor="name">
														<h6 className={style.title__edit}>Alamat</h6>
													</label>
													<input
														type="text"
														id="name"
														name="name"
														value="Jl. Barong"
													/>
												</div>
												<div className="mb-4">
													<label htmlFor="name">
														<h6 className={style.title__edit}>
															Nomor Handphone
														</h6>
													</label>
													<input
														type="text"
														id="name"
														name="name"
														value="08123837****"
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
