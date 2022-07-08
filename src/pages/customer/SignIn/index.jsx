import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import styles from "./style.module.css";

//logo
import LogoLogin from "./logologin.png";
import MenuBack from "./menuback.png";

// Redux Action
import { updateCustomer } from '../../../services/redux/Customer';

// Services
import Customer from "../../../services/api/Customer";
import Token from "../../../services/localStorage/Token";

// Utils
import ErrorHandler from "../../../utils/ErrorHandler";

const SignIn = () => {
  const [clickEye, setClickEye] = useState(false);
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
	const navigate = useNavigate();

  const toggleEye = () => {
    setClickEye((prevState) => !prevState);
  };

  const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValue({
			...formValue,
			[name]: value,
		});
	};

  const handleSignIn = async (e) => {
    try {
			e.preventDefault();
			const { token } = await Customer.signIn(formValue);

			Token.saveCustomerToken(token);

      const newCustomer = await Customer.getCustomer();
      dispatch(updateCustomer(newCustomer));
			navigate('/');
		} catch (error) {
			ErrorHandler.handle(error);
		}
  };

  return (
    <div className={styles.body}>
      <Link to="/">
        <img src={MenuBack} className={`${styles.body_menu} mb-3`} alt="Go back" />
      </Link>
      <div className={`${styles.body} ${styles.body_height} container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5  mx-auto`}>
        <div className={`${styles.body} card border-0`}>
          <div className={`row d-flex`}>
            <div className="col-lg-6">
              <div className="pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5">
                  <img src={LogoLogin} className={`${styles.sizeImage}`} alt="illustration" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className={`${styles.body} border-0 px-4 py-5`} onSubmit={handleSignIn}>
                <h3 className="mb-4 px-2">Log In</h3>
                <div className="row mb-3 px-3">
                  <label className="mb-1 px-1">
                    <h4 className={styles.color_text}>Username</h4>
                  </label>
                  <input className="mb-4" type="text" placeholder="Username" name="username" onChange={handleChange} required />
                </div>
                <div className="row mb-3 px-3">
                  <label className="mb-0 px-1">
                    <h4 className={styles.color_text}>Password</h4>
                  </label>
                  <input className={`mb-1`} type={clickEye ? "text" : "password"} placeholder="Password" name="password" onChange={handleChange} required />
                  <div className={` ${styles.col_layout} col-auto`}>
                    <i className={clickEye ? `bi bi-eye` : `bi bi-eye-slash`} onClick={toggleEye}></i>
                  </div>
                </div>
                {/* <div className="row px-2 mb-5">
                  <a href="#" className="ml-auto mb-0 text-end">
                    Lupa Password ?
                  </a>
                </div> */}
                <div className="row mb-4 px-3">
                  <button type="submit" className={`btn btn-primary btn-lg ${styles.button_login}`}>
                    Log In
                  </button>
                </div>
                <div className="row mb-4 px-3">
                  <Link to="/sign-up" className="btn btn-outline-primary btn-lg">
                    Buat Akun Baru
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
