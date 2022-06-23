import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';
import styles from './style.module.css';

// Utils
import ErrorHandler from '../../utils/ErrorHandler';

// Services
import Admin from '../../services/api/Admin';

const CustomerTable = ({ customers, onUpdate }) => {
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: customers,
  });

  const handleDeleteCustomer = async (customerId) => {
    try {
      const { isConfirmed } = await Swal.fire({
        title: 'Apakah anda yakin?',
        text: 'Data customer yang dihapus tidak akan bisa dikembalikan.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Tidak.'
      });

      if (!isConfirmed) return;

      Swal.showLoading();

      await Admin.deleteCustomer(customerId);
      
      await onUpdate();

      await Swal.fire(
        'Terhapus!',
        'Data pengguna berhasil dihapus.',
        'success'
      );
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  return (
    <div className="table-responsive">
      <table className={`table table-hover ${styles.user_table}`} {...getTableProps()}>
        <thead className="table-light">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th scope="col" {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th scope="col">Aksi</th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIdx) => (
                  <td {...cell.getCellProps()}>
                    {cell.column.id === 'name' ? (
                      <>
                        <img 
                          src={`https://ui-avatars.com/api/?name=${row.original.name}&background=random&color=ffffff&rounded=true`}
                          alt={row.original.username} 
                          className="mb-1 mb-lg-0 me-lg-2"
                        />

                        {cell.render('Cell')}
                      </>
                    ) : (
                      <span className={styles.username}>{cell.render('Cell')}</span>
                    )}
                  </td>
                ))}
                <td>
                  <Link to={`/edit/user/${row.original.id}`} className="btn btn-info text-light me-3">Edit</Link>
                  <button className="btn btn-danger" onClick={() => handleDeleteCustomer(row.original.id)}>Hapus</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  );
};

export default CustomerTable;
