import React from "react";
import { useState } from "react";
import illustration from "./illustration.png";
import style from "./style.module.css";

const SignUp = () => {
	const [form, setForm] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	console.log("Input Form SignUp" + form);
	return (
		<div className={style.signup__page}>
			<button className={style.btn__back}>
				<i className="bi bi-arrow-left-circle"></i>
			</button>
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
								<h1 className={style.header}>New Account</h1>
								<p className={style.description}>
									Lengkapi form dibawah ini dengan menggunakan data anda yang
									valid
								</p>
							</div>
							<form>
								<div className="mb-3">
									<label htmlFor="name" className={style.label__form}>
										Nama Lengkap
									</label>
									<input
										type="text"
										className="form-control form-control-lg"
										id="name"
										name="name"
										placeholder="Type something here..."
										onChange={handleChange}
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
										placeholder="Type something here..."
										onChange={handleChange}
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
										placeholder="Type something here..."
										onChange={handleChange}
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
										placeholder="Type something here..."
										onChange={handleChange}
									/>
								</div>
								<div className="d-grid gap-2">
									<button
										className={`btn btn-lg btn-primary ${style.btn__submit}`}
										type="button"
									>
										Create Account
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
