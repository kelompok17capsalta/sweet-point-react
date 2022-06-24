import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import illustration from "./illustration.png";
import style from "./style.module.css";

// Utils
import ErrorHandler from "../../../utils/ErrorHandler";

// Services
import Customer from "../../../services/api/Customer";

const SignUp = () => {
	const [form, setForm] = useState({
		name: "",
		username: "",
		address: "",
		phone: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSignUp = async (e) => {
		try {
			e.preventDefault();
			await Customer.register(form);

			await Swal.fire('User berhasil dibuat', '', 'success');
			navigate('/sign-in');
		} catch (error) {
			ErrorHandler.handle(error);
		}
	};

	return (
		<div className={style.signup__page}>
			<Link to="/sign-in" className={style.btn__back}>
				<i className="bi bi-arrow-left-circle"></i>
			</Link>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-8 my-5 my-lg-0 offset-2 offset-lg-0">
						<img
							className="container-fluid"
							src={illustration}
							alt="illustration"
						/>
					</div>
					<div className="col-lg-6 col-12 justify-content-end d-lg-flex">
						<div className={style.container__form}>
							<div className={style.container__text}>
								<h1 className={style.header}>Buat Akun</h1>
								<p className={style.description}>
									Lengkapi form dibawah ini dengan menggunakan data anda yang
									valid
								</p>
							</div>
							<form onSubmit={handleSignUp}>
								<div className="mb-3">
									<label htmlFor="name" className={style.label__form}>
										Nama Lengkap
									</label>
									<input
										type="text"
										className="form-control form-control-lg"
										id="name"
										name="name"
										placeholder="Nama Lengkap"
										onChange={handleChange}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="username" className={style.label__form}>
										Username
									</label>
									<input
										type="text"
										className="form-control form-control-lg"
										id="username"
										name="username"
										placeholder="Username"
										onChange={handleChange}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="address" className={style.label__form}>
										Alamat
									</label>
									<input
										type="text"
										className="form-control form-control-lg"
										id="address"
										name="address"
										placeholder="Alamat"
										onChange={handleChange}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="phone" className={style.label__form}>
										Nomor Telepon
									</label>
									<input
										type="text"
										className="form-control form-control-lg"
										id="phone"
										name="phone"
										placeholder="Nomor Telepon"
										onChange={handleChange}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="email" className={style.label__form}>
										Email
									</label>
									<input
										type="email"
										className="form-control form-control-lg"
										id="email"
										name="email"
										placeholder="Email"
										onChange={handleChange}
										required
									/>
								</div>

								<div className="mb-5">
									<label htmlFor="password" className={style.label__form}>
										Password
									</label>
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										name="password"
										placeholder="Password"
										onChange={handleChange}
										required
									/>
								</div>
								<div className="d-grid gap-2">
									<button
										className={`btn btn-lg btn-primary ${style.btn__submit}`}
										type="submit"
									>
										Buat Akun
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
