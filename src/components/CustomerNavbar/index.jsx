import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const Navbar = () => {
  const customer = useSelector((state) => state.customer.value);

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
            <ul className="navbar-nav flex-lg-row ms-auto mb-2 mb-lg-0">
              {customer && (
                <>
                  <li className="nav-item">
                    <Link
                      className="d-flex align-items-center nav-link active py-0"
                      aria-current="page"
                      to="/informasi-akun"
                    >
                      <i className="bi bi-person h2 m-0 me-2"></i>
                      <span>{customer.point} Point</span>
                    </Link>
                  </li>
                </>
              )}

              {!customer && (
                <>
                  <li className="nav-item">
                    <Link
                      className="btn btn-outline-light"
                      aria-current="page"
                      to="/sign-in"
                    >
                      Login
                    </Link>
                  </li>

                  <li className="nav-item my-2 my-lg-0 ms-lg-4">
                    <Link
                      className="btn btn-outline-light"
                      aria-current="page"
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item d-flex align-items-center ms-1 ms-lg-3">
                <Link className="nav-link active py-0" to="/bantuan">
                  <i className="bi bi-question-circle me-2 me-lg-0"></i>
                  <span className="ms-1 d-lg-none">Bantuan</span>
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
