import { Link } from "react-router-dom";
import styles from './style.module.css';

const Footer = () => (
  <footer className={`py-3 ${styles.footer}`}>
    <div className="container">
      <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
        <div className="d-flex align-items-center">
            <img src="/logo.png" alt="Logo" width="60" height="60" />
            <span className={`text-light h4 ${styles.title} mt-1`}>Sweet Point</span>
        </div>

        <div className="d-flex align-items-center m-auto m-lg-0">
          <a href="/" className={`btn btn-outline-light rounded-circle ${styles.social_icon}`}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="/" className={`btn btn-outline-light rounded-circle mx-3 ${styles.social_icon}`}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="/" className={`btn btn-outline-light rounded-circle ${styles.social_icon}`}>
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>

      <hr className="text-light" />

      <p className="h4 text-light">Sweet Point</p>
      <nav className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between mb-3">
        <ul className={`d-flex flex-column flex-lg-row align-items-lg-center p-0 mt-3 ${styles.footer_nav}`}>
          <li>
            <Link to="/" className="text-light text-decoration-none me-lg-3">Home</Link>
          </li>

          <li>
            <Link to="/bantuan" className="text-light text-decoration-none">FAQ</Link>
          </li>
        </ul>

        <a href="/" target="__blank" className="btn btn-outline-light">Contact Us</a>
      </nav>

      <p className="text-center text-light">© Sweet Point 2022 All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
