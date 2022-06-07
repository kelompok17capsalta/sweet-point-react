import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import coin from "./logocoin.png";
import styles from "./style.module.css";

const SignIn = () => {
  const admin = useSelector((state) => state.admin.value);

  // if (!admin) {
  //   return <Navigate to="/" />
  // }

  return (
    <div className={`${styles.body_login}`}>
      <div className={`container`}>
        <div className={`mt-3 ${styles.text_login}`}>
          <img className={`px-1`} src={coin} alt="" />
          Sweet Point
        </div>

        <div className={`container px-4 ${styles.body_form}`}>
          <div className={`row ${styles.gap}`}>
            <div className={`col ${styles.text_h1}`}>
              <h1>Sell Digital</h1>
              <h1>Product the</h1>
              <h1>easy-peasy way</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit voluptate, eos vero deleniti minus optio maxime culpa natus repudiandae sint voluptatem velit inventore mollitia.</p>
            </div>
            <div className="col">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <h3 className={`mb-5 text-start ${styles.color_text}`}>Login</h3>
                  <div className="form-outline mb-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Username" />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" />
                  </div>
                  <button className={`btn btn-primary btn-lg ${styles.button_login}`} type="submit">
                    LOGIN
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
