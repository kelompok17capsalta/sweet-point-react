import { useMemo } from 'react';
import styles from './style.module.css'

const Customer = () => {
  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {

      Header: 'Username',
      accessor: 'username',
    },
  ], []);

  return (
    <div className="container">
      <section className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
        <h1 className="mb-0 h3">Data Users</h1>

        <form className="d-flex flex-column flex-lg-row mt-3 mt-lg-1">
          <div className="input-group">
            <span className={`input-group-text ${styles.input_icon}`} id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>

            <input type="text" className={`form-control ${styles.input}`} placeholder="Search ..." aria-label="Search User" aria-describedby="basic-addon1" />

            <span className={`input-group-text ${styles.input_icon}`}>
              <i className="bi bi-x-circle"></i>
            </span>
          </div>

          <div className={`input-group mt-3 mt-lg-0 ms-lg-3 ${styles.input_button}`}>
            <button type="button" className=" d-block btn btn-primary">Add User</button>
          </div>
        </form>
      </section>

      <hr className="my-4" />

      <section className="d-flex align-items-lg-center justify-content-between">
        <div>
          <h2 className="mb-0 h3">Users</h2>
          <p className="text-secondary">8 results found</p>
        </div>

        <div class={styles.sort_button}>
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-sort-down"></i> Sort By
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><button className="dropdown-item">Default</button></li>
            <li><button className="dropdown-item">Name</button></li>
            <li><button className="dropdown-item">Username</button></li>
          </ul>
        </div>
      </section>

      <section className="mt-3"></section>
    </div>
  );
};

export default Customer;
