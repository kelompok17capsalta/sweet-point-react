import {
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

import styles from './style.module.css';

const NavLink = ({
  children, to, className, ...props
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={`${className} ${match ? 'active' : ''}`}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => (
  <header>
    <nav className={`navbar navbar-expand-lg navbar-dark py-0 ${styles.navbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          <img src="/logo.png" alt="Logo" width="60" height="60" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
            </li>

            <li className="nav-item mx-lg-3">
              <NavLink className="nav-link" aria-current="page" to="/admin/customer">Customer</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/admin/redeem">Redeem</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link h4 d-flex align-items-center" aria-current="page" to="/admin/sign-out">
                <i className="bi bi-box-arrow-in-right" />
                <span className="d-lg-none h6 ms-2 mb-0">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
