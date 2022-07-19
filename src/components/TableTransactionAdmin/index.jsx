/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import styles from './style.module.css';

// Services
import Transaction from '../../services/api/Transaction';
import Payment from '../../services/api/Payment';
import { updateTransactionList } from '../../services/redux/TransactionList';

// Utils
import ErrorHandler from '../../utils/ErrorHandler';
import MoneyFormatter from '../../utils/MoneyFormatter';

const TableTransactionAdmin = () => {
  const transactionList = useSelector((state) => state.transactionList.data);
  const filteredTransactionList = transactionList.filter(({ status }) => status.toLowerCase() === 'pending').sort((a, b) => {
    if (new Date(a.created) < new Date(b.created)) {
      return 1;
    }
    if (new Date(a.created) > new Date(b.created)) {
      return -1;
    }

    return 0;
  });
  const dispatch = useDispatch();

  const updateData = async () => {
    try {
      Swal.showLoading();
      const updatedList = await Transaction.getAllTransactions();
      dispatch(updateTransactionList(updatedList));
      Swal.close();
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  const handlePay = async (transaction) => {
    try {
      Swal.showLoading();
      const name = transaction.user.username;
      const price = transaction.denom;

      const { token: paymentToken } = await Payment.payTransaction({
        ...transaction,
        name,
        price,
      });

      window.snap.pay(paymentToken, {
        onPending: (result) => {
          console.log(result);
        },
        onError: (result) => {
          console.log(result);
        },
        onClose: () => {
          console.log('Payment Closed');
        },
        onSuccess: async () => {
          try {
            await Transaction.updateTransactionStatus(transaction.id, 'Success');
            await updateData();
            await Swal.fire(
              'Pembayaran berhasil',
              '',
              'success',
            );
          } catch (error) {
            ErrorHandler.handle(error);
          }
        },
      });
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              Username
            </th>
            <th scope="col">
              Provider
            </th>
            <th scope="col">
              Kredensial
            </th>
            <th scope="col">
              Kategori
            </th>
            <th scope="col">
              Point
            </th>
            <th scope="col">
              Nominal Hadiah
            </th>
            <th scope="col">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactionList.map((transaction) => {
					  const {
					    id, user: { username },
					    provider,
					    credentials,
					    category,
					    points,
					    denom,
            } = transaction;

					  return (
							<tr key={id}>
								<td>
									<div className="d-flex align-items-center">
										<img src={`https://ui-avatars.com/api/?name=${username}&background=random&color=ffffff&rounded=true`} alt={username} className={`${styles.img_profile} me-1`} width="60" height="60" />
										{username}
									</div>
								</td>
								<td className="align-middle">{provider}</td>
								<td className="align-middle pe-5">
									<span>{credentials}</span>
								</td>
								<td className="align-middle pe-5">{category}</td>
								<td className="align-middle pe-5">{MoneyFormatter.format(points)}</td>
								<td className="align-middle pe-5">{MoneyFormatter.format(denom)}</td>
								<td className="align-middle">
									<button
										className="btn btn-primary"
										type="button"
										onClick={() => handlePay(transaction)}
									>Bayar
									</button>
								</td>
							</tr>
					  );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactionAdmin;
