import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

//logo
import LogoLogin from "./logologin.png";
import MenuBack from "./menuback.png";

const SignIn = () => {
  const [clickEye, setClickEye] = useState(false);

  const toggleEye = () => {
    setClickEye((prevState) => !prevState);
  };

  return (
    <div className={styles.body}>
      <img src={MenuBack} className={`${styles.body_menu} mb-3`} />
      <div className={`${styles.body} container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5  mx-auto`}>
        <div className={`${styles.body} card border-0`}>
          <div className={`row d-flex`}>
            <div className="col-lg-6">
              <div className="pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5">
                  <img src={LogoLogin} className={`${styles.sizeImage}`} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.body}  border-0 px-4 py-5`}>
                <h3 className="mb-4 px-2">Log In</h3>
                <div className="row mb-3 px-3">
                  <label className="mb-1 px-1">
                    <h4 className={styles.color_text}>Email</h4>
                  </label>
                  <input className="mb-4" type="text" placeholder="Enter your email" />
                </div>
                <div className="row mb-3 px-3">
                  <label className="mb-0 px-1">
                    <h4 className={styles.color_text}>Password</h4>
                  </label>
                  <input className={`mb-1`} type={clickEye ? "text" : "password"} placeholder="Enter your password" />
                  <div className={` ${styles.col_layout} col-auto`}>
                    <i className={clickEye ? `bi bi-eye` : `bi bi-eye-slash`} onClick={toggleEye}></i>
                  </div>
                </div>
                <div className="row px-2 mb-5">
                  <a href="#" className="ml-auto mb-0 text-end">
                    Lupa Password ?
                  </a>
                </div>
                <div className="row mb-4 px-3">
                  <button type="button" className={`btn btn-primary btn-lg ${styles.button_login}`}>
                    Log In
                  </button>
                </div>
                <div className="row mb-4 px-3">
                  <button type="button" class="btn btn-outline-primary btn-lg">
                    Create New Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
