import { useSelector } from 'react-redux';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';

// Global Component
import ProtectedRoutes from './components/ProtectedRoutes';

// Layouts
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

// Customer Pages
import CustomerHome from './pages/customer/Home';
import CustomerSignOut from './pages/customer/SignOut';

// Admin Pages
import AdminSignOut from './pages/admin/SignOut';

const App = () => {
  const user = useSelector((state) => (state.user.value));
  const admin = useSelector((state) => (state.admin.value));

  return (
    <Routes>
      {/* Users */}
      <Route path="/" element={<UserLayout />}>

        <Route element={<ProtectedRoutes redirectPath="/sign-in" allowedBy={user} />}>
          <Route index element={<CustomerHome />} />

          <Route path="sign-out" element={<CustomerSignOut />} />
        </Route>

        <Route element={<ProtectedRoutes redirectPath="/" allowedBy={!user} />}>
          <Route path="sign-in" element={<CustomerHome />} />
          <Route path="sign-up" element={<CustomerHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<CustomerHome />} />

        <Route element={<ProtectedRoutes redirectPath="/admin/sign-in" allowedBy={admin} />}>
          <Route path="sign-out" element={<AdminSignOut />} />
        </Route>

        <Route element={<ProtectedRoutes redirectPath="/admin" allowedBy={!admin} />}>
          <Route path="sign-in" element={<CustomerHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
