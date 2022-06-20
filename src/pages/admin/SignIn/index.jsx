import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import coin from "./logocoin.png";
import styles from "./style.module.css";

// Redux Action
import { updateAdmin } from '../../../services/redux/Admin';

// Services
import Admin from "../../../services/api/Admin";
import Token from "../../../services/localStorage/Token";

// Utils
import ErrorHandler from "../../../utils/ErrorHandler";

const SignIn = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
  });

  const admin = useSelector((state) => state.admin.value);

  const dispatch = useDispatch();
	const navigate = useNavigate();

  if (admin) {
    return <Navigate to="/admin/dashboard" />
  }

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
			const { token } = await Admin.signIn(formValue);

			Token.saveAdminToken(token);

      const { point, ...newAdmin } = await Admin.getAdmin();
      dispatch(updateAdmin(newAdmin));
			navigate('/');
		} catch (error) {
			ErrorHandler.handle(error);
		}
  };

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
              <form onSubmit={handleSignIn} className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <h3 className={`mb-5 text-start ${styles.color_text}`}>Login</h3>
                  <div className="form-outline mb-4">
                    <input onChange={handleChange} type="text" name="username" className="form-control form-control-lg" placeholder="Username" required />
                  </div>
                  <div className="form-outline mb-4">
                    <input onChange={handleChange} type="password" name="password" className="form-control form-control-lg" placeholder="Password" required />
                  </div>
                  <button className={`btn btn-primary btn-lg ${styles.button_login}`} type="submit">
                    LOGIN
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

export default SignIn;
