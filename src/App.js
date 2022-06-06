import { useSelector } from 'react-redux';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';

// Global Component
import ProtectedRoutes from './components/ProtectedRoutes';

// Layouts
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './layouts/AdminLayout';

// Customer Pages
import CustomerHome from './pages/customer/Home';
import CustomerSignOut from './pages/customer/SignOut';

// Admin Pages
import AdminSignOut from './pages/admin/SignOut';
import AdminCustomer from './pages/admin/Customer';

const App = () => {
  const customer = useSelector((state) => (state.customer.value));
  const admin = useSelector((state) => (state.admin.value));

  return (
    <Routes>
      {/* Customers */}
      <Route path="/" element={<CustomerLayout />}>

        <Route element={<ProtectedRoutes redirectPath="/sign-in" allowedBy={customer} />}>
          <Route index element={<CustomerHome />} />

          <Route path="sign-out" element={<CustomerSignOut />} />
        </Route>

        <Route element={<ProtectedRoutes redirectPath="/" allowedBy={!customer} />}>
          <Route path="sign-in" element={<CustomerHome />} />
          <Route path="sign-up" element={<CustomerHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      {/* ./Customers */}

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<CustomerHome />} />

        {/* <Route element={<ProtectedRoutes redirectPath="/admin/sign-in" allowedBy={admin} />}> */}
          <Route path="sign-out" element={<AdminSignOut />} />
          <Route path="customer" element={<AdminCustomer />} />
        {/* </Route> */}

        <Route element={<ProtectedRoutes redirectPath="/admin" allowedBy={!admin} />}>
          <Route path="sign-in" element={<CustomerHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
      {/* ./Admin */}
    </Routes>
  );
}

export default App;
