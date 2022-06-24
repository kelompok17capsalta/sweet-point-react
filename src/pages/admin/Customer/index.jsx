import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

// Components
import CustomerTable from '../../../components/CustomerTable';

// Utils
import ErrorHandler from '../../../utils/ErrorHandler';

// Services
import Admin from '../../../services/api/Admin';


const PageNav = ({ totalPages = 7 }) => {
  const pages = [];
  for(let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link to="/" className={`${styles.page_nav} me-3`}>
        <i className="bi bi-chevron-left"></i>
      </Link>

      {pages.map((page) =>(
        <Link key={page} to="/" className={`mx-1 bg-light ${styles.page_number}`}>
          {page}
        </Link>
      ))}

      <Link to="/" className={`${styles.page_nav} ms-3`}>
        <i className="bi bi-chevron-right"></i>
      </Link>
    </div>
  );
};

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortedBy, setSortedBy] = useState('default');

  const filteredCustomers = customers
    .filter((customer) => (
      customer.name.toLowerCase().includes(searchKeyword.toLowerCase()) || customer.username.toLowerCase().includes(searchKeyword.toLowerCase())
    ))
    .sort((a,b) => {
      if (sortedBy === 'default') return 0;

      if (a[sortedBy].toLowerCase() < b[sortedBy].toLowerCase()) {
        return -1;
      }
      if (a[sortedBy].toLowerCase() > b[sortedBy].toLowerCase()) {
        return 1;
      }

      return 0;
    });

  const getSortedTogglerClassName = (sortBy) => {
    return `dropdown-item ${sortedBy === sortBy && 'active'}`;
  };

  const updateData = async () => {
    try {
      const newCustomers = await Admin.getCustomers();
      setCustomers(newCustomers);
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className="container">
      <section className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between mt-4">
        <h1 className="mb-0 h3">Data Customer</h1>

        <form className="d-flex flex-column flex-lg-row mt-3 mt-lg-1">
          <div className="input-group">
            <span className={`input-group-text ${styles.input_icon}`}>
              <i className="bi bi-search"></i>
            </span>

            <input
              type="text"
              className={`form-control my-0 ${styles.input}`}
              placeholder="Cari ..."
              aria-label="Cari customer"
              value={searchKeyword}
              onChange={(event) => {
                setSearchKeyword(event.target.value);
              }}
            />

            <button
              type="button"
              className={`input-group-text ${styles.input_icon}`}
              onClick={() => {
                setSearchKeyword('');
              }}
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </form>
      </section>

      <hr className="my-4" />

      <section className="d-flex align-items-lg-center justify-content-between">
        <div>
          <h2 className="mb-0 h3">Customer</h2>
          <p className="text-secondary">{filteredCustomers.length} ditemukan.</p>
        </div>

        <div className={styles.sort_button}>
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-sort-down"></i>
            <span className="mx-1">Sort By</span>
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button 
                className={getSortedTogglerClassName('default')}
                onClick={() => {
                  if (sortedBy !== 'default') setSortedBy('default');
                }}
              >
                Default
              </button>
            </li>
            <li>
              <button 
                className={getSortedTogglerClassName('name')}
                onClick={() => {
                  if (sortedBy !== 'name') setSortedBy('name');
                }}
              >
                Name
              </button>
            </li>
            <li>
              <button 
                className={getSortedTogglerClassName('username')}
                onClick={() => {
                  if (sortedBy !== 'username') setSortedBy('username');
                }}
              >
                Username
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-3 my-5">
        <CustomerTable customers={filteredCustomers} onUpdate={updateData} />

        {/* <PageNav /> */}
      </section>
    </div>
  );
};

export default Customer;
