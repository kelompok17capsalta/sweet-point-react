import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

// Routes
import ProtectedRoutes from "./routes/ProtectedRoutes";

// Layouts
import CustomerLayout from "./layouts/CustomerLayout";
import AdminLayout from "./layouts/AdminLayout";

// Customer Pages
import CustomerHome from "./pages/customer/Home";
import CustomerSignOut from "./pages/customer/SignOut";
import CustomerSignIn from "./pages/customer/SignIn";
import CustomerSignUp from "./pages/customer/SignUp";
import CustomerPengaturanAkun from "./pages/customer/PengaturanAkun";
import CustomerAccountInformation from "./pages/customer/AccountInformation";
import CustomerMyTransaction from "./pages/customer/MyTransaction";
import CustomerRedeem from './pages/customer/Redeem'

// Admin Pages
import AdminSignIn from "./pages/admin/SignIn";
import AdminSignOut from "./pages/admin/SignOut";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCustomer from "./pages/admin/Customer";
import AdminRedeem from "./pages/admin/Redeem";
import AdminRedeemProducts from "./pages/admin/RedeemProducts";
import AdminRedeemEdit from "./pages/admin/RedeemEdit";

const App = () => {
  const customer = useSelector((state) => state.customer.value);
  const admin = useSelector((state) => state.admin.value);

  return (
    <Routes>
      {/* Customers */}
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<CustomerHome />} />

        <Route element={<ProtectedRoutes redirectPath="/sign-in" allowedBy={customer} />}>
          <Route path="sign-out" element={<CustomerSignOut />} />
          <Route path="informasi-akun" element={<CustomerAccountInformation />} />
          <Route path="pengaturan" element={<CustomerPengaturanAkun />} />
          <Route path="transaksi" element={<CustomerMyTransaction />} />
          <Route path="redeem" element={<CustomerRedeem />} />
          <Route path="redeem/:category" element={<CustomerRedeem />} />
        </Route>

        <Route
          element={<ProtectedRoutes redirectPath="/" allowedBy={!customer} />}
        >
          <Route path="sign-in" element={<CustomerSignIn />} />
          <Route path="sign-up" element={<CustomerSignUp />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      {/* ./Customers */}

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={admin ? <Navigate to="/admin/dashboard" replace /> : <AdminSignIn />} />

        <Route element={<ProtectedRoutes redirectPath="/admin" allowedBy={admin} />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="customer" element={<AdminCustomer />} />
          <Route path="redeem" element={<AdminRedeem />} />
          <Route path="redeem/:category" element={<AdminRedeemProducts />} />
          <Route path="sign-out" element={<AdminSignOut />} />
          <Route path="redeem/:category/:itemId/edit" element={<AdminRedeemEdit />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
      {/* ./Admin */}
    </Routes>
  );
};

export default App;
