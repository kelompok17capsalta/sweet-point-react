import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import style from './style.module.css';

// Components
import ProfileCard from '../../../components/ProfileCard';

// Services
import Transaction from '../../../services/api/Transaction';
import { updateTransactionList } from '../../../services/redux/TransactionList';

// Utils
import DateHelper from '../../../utils/DateHelper';
import ErrorHandler from '../../../utils/ErrorHandler';

const MyTransaction = () => {
  const transactionList = useSelector((state) => state.transactionList.data);
  const sortedTransactionList = [...transactionList].sort((a, b) => {
    if (new Date(a.created) < new Date(b.created)) {
      return 1;
    }
    if (new Date(a.created) > new Date(b.created)) {
      return -1;
    }

    return 0;
  });
  const customer = useSelector((state) => state.customer.value);
  const dispatch = useDispatch();

  const updateData = async () => {
    try {
      Swal.showLoading();
      const updatedList = await Transaction.getUserTransactions(customer?.id);
      dispatch(updateTransactionList(updatedList));
      Swal.close();
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  const getTransactionStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'success':
        return style.text_success;

      case 'failed':
        return style.text_failed;

      case 'pending':
        return style.text_pending;

      default:
        break;
    }
  };

  return (
    <>
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Transaksiku
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mb-5">
        <div className="mt-3">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
              <ProfileCard />
            </div>
            <div className="col-12 col-lg-8">
              <h2>Transaksi Saya</h2>
              <p>
                Daftar hasil dari transaksi anda,
                untuk mengetahui pengeluaran point yang anda dapatkan
              </p>

              {/* <div className="text-end">
                <img src={filter} alt="filter" />
              </div> */}
              <div className="table-responsive">
                <table className="table mt-4">
                  <thead className="table-primary ">
                    <tr>
                      <th scope="col">Keterangan</th>
                      <th scope="col">Waktu</th>
                      <th scope="col">Status</th>
                      <th scope="col">Saldo Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedTransactionList.map(({
                      id, descriptions, created, status, category, points,
                    }) => (
                      <tr key={id}>
                        <td>{descriptions}</td>
                        <td>{DateHelper.formatTransactionDate(created)}</td>
                        <td>
                          <span className={getTransactionStatusClass(status)}>{status}</span>
                        </td>
                        <td>
                          <span
                            className={category.toLowerCase() === 'shopping'
                              ? style.text_tambahpoint : style.text_kurangpoint}
                          >
                            {category.toLowerCase() !== 'shopping' && '-'}{points} Point
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTransaction;
