import { Link } from "react-router-dom";

import styles from "./style.module.css";

const Navbar = () => {
  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-dark p-0 ${styles.navbar}`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Logo" width="60" height="60" />
            <span className={styles.title}>Sweet Point</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-light"
                  aria-current="page"
                  to="/sign-in"
                >
                  Login/Sign up
                </Link>
              </li>

              <li className="nav-item ms-3">
                <Link className="nav-link active" to="/help">
                  <i className="bi bi-question-circle"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
