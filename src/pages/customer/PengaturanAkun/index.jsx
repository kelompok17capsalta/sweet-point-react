import React from "react";
import style from "./style.module.css";
import CustomerNavbar from "../../../components/CustomerNavbar";
import ProfileCard from "../../../components/ProfileCard";

const PengaturanAkun = () => {
  return (
    <>
      <CustomerNavbar />
      <div className="container">
        <div className="mt-4 mx-3">Home / Pengaturan Akun</div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-4">
              <ProfileCard />
            </div>
            <div className="col-8">
              <div className={`card ${style.body_card}`}>
                <div className="card-body mx-3">
                  <h3 className="mt-3">Pengaturan Akun</h3>
                </div>
                <div className="card-body mx-3 ">
                  <label>Ubah Username</label>
                  <input type="text" className="form-control mt-2" placeholder="Type something here..." />
                  <label>Ubah Password</label>
                  <input type="password" className="form-control mt-2" placeholder="Type something here..." />
                  <label>Konfirmasi Password</label>
                  <input type="password" className="form-control mt-2" placeholder="Type something here..." />
                </div>
                <div className="card-body text-end me-3">
                  <button className={`btn ${style.btn_clr}`}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengaturanAkun;
