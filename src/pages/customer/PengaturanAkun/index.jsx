import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import Swal from 'sweetalert2';
import style from './style.module.css';

// Components
import ProfileCard from '../../../components/ProfileCard';

// Errors
import InvariantError from '../../../errors/InvariantError';

// Services
import Customer from '../../../services/api/Customer';
import { updateCustomer } from '../../../services/redux/Customer';

// Utils
import ErrorHandler from '../../../utils/ErrorHandler';

const PengaturanAkun = () => {
  const customer = useSelector((state) => state.customer.value);
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();

      Swal.showLoading();

      if (formValue.password !== formValue.passwordConfirmation) {
        throw new InvariantError('Konfirmasi Password gagal, pastikan password dan konfirmasi password sudah benar.');
      }
      const payload = { id: customer.id, ...formValue };
      payload.username = payload.username === customer.username ? null : payload.username;
      payload.email = payload.email === customer.email ? null : payload.email;

      const updatedCustomerData = await Customer.updateCustomer(payload);

      const updatedCustomer = { ...customer, ...updatedCustomerData };

      dispatch(updateCustomer(updatedCustomer));

      await Swal.fire(
        'Data berhasil disimpan.',
        '',
        'success',
      );
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    setFormValue({
      username: customer?.username || '',
      email: customer?.email || '',
      password: customer?.password || '',
      passwordConfirmation: customer?.passwordConfirmation || '',
    });
  }, [customer]);

  return (
    <>
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Pengaturan Akun
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mb-5">
        <div className="mt-3">
          <div className="row">
            <div className="col-12 col-lg-4">
              <ProfileCard />
            </div>
            <div className="col-12 col-lg-8 mt-3 mt-lg-0">
              <form className={`card ${style.body_card}`} onSubmit={handleUpdate}>
                <div className="mx-3 px-3 mt-5">
                  <h3 className="">Pengaturan Akun</h3>
                </div>
                <div className="card-body mx-3 ">
                  <label htmlFor="username">Ubah Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    className="form-control mt-2"
                    placeholder="Username"
                    value={formValue.username}
                    required
                  />

                  <label htmlFor="email">Ubah Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control mt-2"
                    placeholder="Email"
                    value={formValue.email}
                    required
                  />

                  <label htmlFor="password">Ubah Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    className="form-control mt-2"
                    placeholder="Password"
                    value={formValue.password}
                  />

                  <label htmlFor="password_confirmation">Konfirmasi Password</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    name="passwordConfirmation"
                    onChange={handleChange}
                    className="form-control mt-2"
                    placeholder="Konfirmasi Password"
                    value={formValue.passwordConfirmation}
                  />
                </div>
                <div className="card-body text-end me-3">
                  <button className={`btn btn-lg ${style.btn_clr}`} type="button">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PengaturanAkun;
