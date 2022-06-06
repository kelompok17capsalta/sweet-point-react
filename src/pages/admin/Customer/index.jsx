import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

import AdminFooter from '../../../components/AdminFooter';

import styles from './style.module.css';

const PageNav = ({ totalPages }) => {
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

  const users = [];
  for(let i = 1; i <= 10; i++) {
    users.push({
      name: `Dummy User - ${i}`,
      username: `dummyuser_${i}`,
      image: 'https://ui-avatars.com/api/?name=dummy+user&background=random&color=ffffff&rounded=true',
    });
  }

  const totalPages = 7;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: users,
  })

  return (
    <>
      <div className="container">
        <section className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
          <h1 className="mb-0 h3">Data Users</h1>

          <form className="d-flex flex-column flex-lg-row mt-3 mt-lg-1">
            <div className="input-group">
              <span className={`input-group-text ${styles.input_icon}`} id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>

              <input type="text" className={`form-control ${styles.input}`} placeholder="Search ..." aria-label="Search User" aria-describedby="basic-addon1" />

              <button type="button" className={`input-group-text ${styles.input_icon}`}>
                <i className="bi bi-x-circle"></i>
              </button>
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
            <p className="text-secondary">10 results found</p>
          </div>

          <div className={styles.sort_button}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-sort-down"></i>
              <span className="mx-1">Sort By</span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><button className="dropdown-item">Default</button></li>
              <li><button className="dropdown-item">Name</button></li>
              <li><button className="dropdown-item">Username</button></li>
            </ul>
          </div>
        </section>

        <section className="mt-3 my-5">
          <div className="table-responsive">
            <table className={`table table-hover ${styles.user_table}`} {...getTableProps()}>
              <thead className="table-light">
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th scope="col" {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                    <th scope="col">Action</th>
                  </tr>
                ))}
              </thead>

              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  console.log(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, cellIdx) => (
                        <td {...cell.getCellProps()}>
                          {cell.column.id === 'name' && (
                            <img src={row.original.image} alt={row.original.username} className="mb-1 mb-lg-0 me-lg-1" />
                          )}
                          {cell.render('Cell')}
                        </td>
                      ))}
                      <td>
                        <button className="btn btn-info text-light me-3">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
          </div>

          <PageNav totalPages={totalPages}/>
        </section>
      </div>

      <AdminFooter />
    </>
  );
};

export default Customer;
