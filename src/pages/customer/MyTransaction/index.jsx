import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import ProfileCard from "../../../components/ProfileCard";

//icon
import filter from "./filter.png";

const MyTransaction = () => {
  return (
    <>
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Transaction
            </li>
          </ol>
        </nav>
      </div>

      {/* My Transaction */}

      <div className="container mb-5">
        <div className="mt-3">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
              <ProfileCard />
            </div>
            <div className="col-12 col-lg-8">
              <h2>My Transaction</h2>
              <p>Daftar hasil dari transaksi anda, untuk mengetahui pengeluaran point yang anda dapatkan</p>

              <div className="text-end">
                <img src={filter} alt="filter" />
              </div>
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
                    {/* Baris 1 */}

                    <tr>
                      <td>Reedem Pulsa</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_success}>Success</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 2 */}

                    <tr>
                      <td>Reedem Pulsa</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_success}>Success</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 3 */}

                    <tr>
                      <td>Reedem Pulsa</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_success}>Success</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 4 */}

                    <tr>
                      <td>Belanja Di Erigo</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_success}>Success</span>
                      </td>
                      <td>
                        <span className={style.text_tambahpoint}>+500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 5 */}

                    <tr>
                      <td>Reedem Cash Out</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_failed}>Failed</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 6 */}

                    <tr>
                      <td>Reedem E-Money</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_pending}>Pending</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 7 */}

                    <tr>
                      <td>Reedem E-Money</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_pending}>Pending</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>

                    {/* Baris 8 */}

                    <tr>
                      <td>Reedem E-Money</td>
                      <td>14/06/2022 12:30</td>
                      <td>
                        <span className={style.text_pending}>Pending</span>
                      </td>
                      <td>
                        <span className={style.text_kurangpoint}>-500 Point</span>
                      </td>
                    </tr>
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
