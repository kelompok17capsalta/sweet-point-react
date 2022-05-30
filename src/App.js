import { useSelector } from 'react-redux';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';

// Global Component
import ProtectedRoutes from './components/ProtectedRoutes';

// Layout
import UserLayout from './Layouts/UserLayout';
import AdminLayout from './Layouts/AdminLayout';

// Pages
import Home from './pages/Home';

const App = () => {
  const user = useSelector((state) => (state.user.value));
  const admin = useSelector((state) => (state.admin.value));

  return (
    <Routes>
      {/* Users */}
      <Route path="/" element={<UserLayout />}>

        <Route element={<ProtectedRoutes redirectPath="/sign-in" allowedBy={user} />}>
          <Route index element={<Home />} />

          <Route path="sign-out" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoutes redirectPath="/" allowedBy={!user} />}>
          <Route path="sign-in" element={<Home />} />
          <Route path="sign-up" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Home />} />

        <Route element={<ProtectedRoutes redirectPath="/admin/sign-in" allowedBy={admin} />}>
          <Route path="sign-out" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoutes redirectPath="/" allowedBy={!admin} />}>
          <Route path="sign-in" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
