import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

// Components
import CustomerTable from '../../../components/CustomerTable';

// Actions
import {
  sortUserList,
  searchUser,
} from '../../../services/redux/UserList';

// eslint-disable-next-line no-unused-vars
const PageNav = ({ totalPages = 7 }) => {
  const pages = [];
  // eslint-disable-next-line keyword-spacing, no-plusplus
  for(let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link to="/" className={`${styles.page_nav} me-3`}>
        <i className="bi bi-chevron-left" />
      </Link>

      {pages.map((page) => (
        <Link key={page} to="/" className={`mx-1 bg-light ${styles.page_number}`}>
          {page}
        </Link>
      ))}

      <Link to="/" className={`${styles.page_nav} ms-3`}>
        <i className="bi bi-chevron-right" />
      </Link>
    </div>
  );
};

const Customer = () => {
  const {
    sortedBy,
    search,
    result: customers,
  } = useSelector((state) => state.userList);

  const dispatch = useDispatch();

  const getSortedTogglerClassName = (sortBy) => `dropdown-item ${sortedBy === sortBy && 'active'}`;

  return (
    <div className="container">
      <section className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between mt-4">
        <h1 className="mb-0 h3">Data Customer</h1>

        <form className="d-flex flex-column flex-lg-row mt-3 mt-lg-1">
          <div className="input-group">
            <span className={`input-group-text ${styles.input_icon}`}>
              <i className="bi bi-search" />
            </span>

            <input
              type="text"
              className={`form-control my-0 ${styles.input}`}
              placeholder="Cari ..."
              aria-label="Cari customer"
              value={search}
              onChange={(event) => {
                dispatch(searchUser(event.target.value));
              }}
            />

            <button
              type="button"
              className={`input-group-text ${styles.input_icon}`}
              onClick={() => {
                dispatch(searchUser(''));
              }}
            >
              <i className="bi bi-x-circle" />
            </button>
          </div>
        </form>
      </section>

      <hr className="my-4" />

      <section className="d-flex align-items-lg-center justify-content-between">
        <div>
          <h2 className="mb-0 h3">Customer</h2>
          <p className="text-secondary">{customers.length} ditemukan.</p>
        </div>

        <div className={styles.sort_button}>
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-sort-down" />
            <span className="mx-1">Sort By</span>
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className={getSortedTogglerClassName('default')}
                type="button"
                onClick={() => {
                  if (sortedBy !== 'default') dispatch(sortUserList('default'));
                }}
              >
                Default
              </button>
            </li>
            <li>
              <button
                className={getSortedTogglerClassName('name')}
                type="button"
                onClick={() => {
                  if (sortedBy !== 'name') dispatch(sortUserList('name'));
                }}
              >
                Name
              </button>
            </li>
            <li>
              <button
                className={getSortedTogglerClassName('username')}
                type="button"
                onClick={() => {
                  if (sortedBy !== 'username') dispatch(sortUserList('username'));
                }}
              >
                Username
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-3 my-5">
        <CustomerTable />

        {/* <PageNav /> */}
      </section>
    </div>
  );
};

export default Customer;
