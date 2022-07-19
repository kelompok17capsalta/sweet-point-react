import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

// Utils
import ErrorHandler from '../../../utils/ErrorHandler';

// Services
import Admin from '../../../services/api/Admin';

export default function CustomerEdit() {
  const [customer, setCustomer] = useState(null);
  const [formValue, setFormValue] = useState({
    name: '',
    username: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  });
  const { customerId } = useParams();

  useEffect(() => {
    const updateCustomer = async () => {
      try {
        Swal.showLoading();
        const newCustomer = await Admin.getCustomerById(customerId);
        setCustomer(newCustomer);
        setFormValue({
          name: newCustomer?.name || '',
          username: newCustomer?.username || '',
          address: newCustomer?.address || '',
          phone: newCustomer?.phone || '',
          email: newCustomer?.email || '',
          password: newCustomer?.password || '',
        });
        Swal.close();
      } catch (error) {
        ErrorHandler.handle(error);
      }
    };

    updateCustomer();
  }, [customerId]);

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

      const payload = { id: customer.id, ...formValue };
      payload.username = payload.username === customer.username ? null : payload.username;
      payload.email = payload.email === customer.email ? null : payload.email;
      payload.password = payload.password === '' ? null : payload.password;

      const updatedCustomerData = await Admin.updateCustomer(payload);

      const updatedCustomer = { ...customer, ...updatedCustomerData };
      setCustomer(updatedCustomer);

      await Swal.fire(
        'Data berhasil disimpan.',
        '',
        'success',
      );
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  return (
    <div className="container">
      <div className="px-5 pb-5 mb-5">
        <h3 className="pt-5 fw-bolder">Edit Data Customer</h3>
        <hr className="mb-5" />

        <div className="row">
          <form className="col-12 col-lg-6 offset-lg-3" onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Nama lengkap"
                onChange={handleChange}
                value={formValue.name}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-bold">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={formValue.username}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label fw-bold">
                Alamat
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="Alamat"
                onChange={handleChange}
                value={formValue.address}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-bold">
                No. Handphone
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="No. Handphone"
                onChange={handleChange}
                value={formValue.phone}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formValue.email}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={formValue.password}
                required
              />
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
              <button type="submit" className="btn btn-success">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
