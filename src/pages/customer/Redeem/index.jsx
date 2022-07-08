import style from "./style.module.css";

import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../../../components/ProfileCard";
import LogoRedeem from "../../../components/LogoRedeem";
import indosat from "./indosat.png";

const Redem = () => {
	return (
		<>
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

			<div className="container mb-5">
				<div className="row">
					<div className="col-12 col-lg-4 mb-5 mb-lg-0">
						<ProfileCard />
					</div>

					<div className="col-12 col-lg-8">
						<div className="row">
							<div className="col-12">
								<h2 className={style.title}>Redeem Category</h2>
								<span className={style.title__description}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aenean maecenas diam amet faucibus vitae tristique nulla
									faucibus urna.
								</span>
							</div>

							<div className="col-12 my-3">
								<div className="d-flex justify-content-between flex-wrap px-1">
									<LogoRedeem text="cashout" />
									<LogoRedeem text="pulsa" />
									<LogoRedeem text="paket" />
									<LogoRedeem text="emoney" />
								</div>
							</div>

							<div className="col-12 mt-5">
								<h2 className={style.title}>Pilih Paket</h2>
								<span className={style.title__description}>Masukkan Nomor</span>
								<div className="input-group d-flex align-items-center">
									<input
										className={`form-control form-control-lg ${style.input__nomor}`}
										type="text"
										placeholder="Contoh : 081276598720"
										aria-label="default input example"
									></input>
									<span className={`input-group-text ${style.logo__operator}`}>
										<img src={indosat} alt="" />
									</span>
									<button
										className={`btn btn-primary ${style.btn__close}`}
										type="button"
									>
										<i class="bi bi-x-circle"></i>
									</button>
								</div>
							</div>

							<div className="col-12 my-5 d-flex justify-content-around flex-wrap">
								<div
									className={`d-flex justify-content-around mb-4 ${style.card}`}
								>
									<div className={`align-self-center ${style.harga__point}`}>
										<span className={style.number}>
											1 <span className={style.rupiah}>jt</span>
										</span>
										<span className={style.jmlh__point}>1000 point</span>
									</div>
									<div>
										<span className={style.jenis__paket}>Pkt A</span>
									</div>
								</div>
								<div
									className={`d-flex justify-content-around mb-4 ${style.card}`}
								>
									<div className={`align-self-center ${style.harga__point}`}>
										<span className={style.number}>
											1 <span className={style.rupiah}>jt</span>
										</span>
										<span className={style.jmlh__point}>1000 point</span>
									</div>
									<div>
										<span className={style.jenis__paket}>Pkt A</span>
									</div>
								</div>
								<div
									className={`d-flex justify-content-around mb-4 ${style.card}`}
								>
									<div className={`align-self-center ${style.harga__point}`}>
										<span className={style.number}>
											1 <span className={style.rupiah}>jt</span>
										</span>
										<span className={style.jmlh__point}>1000 point</span>
									</div>
									<div>
										<span className={style.jenis__paket}>Pkt A</span>
									</div>
								</div>

								{/* style dengan card active */}

								<div
									className={`d-flex justify-content-around mb-4 ${style.card} ${style.active}`}
								>
									<div className={`align-self-center ${style.harga__point}`}>
										<span className={style.number}>
											1 <span className={style.rupiah}>jt</span>
										</span>
										<span className={style.jmlh__point}>1000 point</span>
									</div>
									<div>
										<span className={style.jenis__paket}>Pkt A</span>
									</div>
								</div>
							</div>

							<div className="col-12 mb-5">
								<div className={style.container__keterangan}>
									<span className={style.keterangan}>Keterangan</span>
									<span className={style.keterangan__hari}>
										Masa Berlaku 90 Hari
									</span>
								</div>
							</div>

							<div className="col-12 d-flex justify-content-between align-items-center mb-5">
								<div>
									<span className={style.required}>Point yang dibutuhkan</span>
									<h3 className={style.title}>100 Point</h3>
								</div>
								<div>
									<button
										className={`btn btn-lg btn-primary ${style.btn__submit}`}
									>
										Redeem Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Redem;
