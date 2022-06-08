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

// Admin Pages
import AdminSignIn from "./pages/admin/SignIn";
import AdminSignOut from "./pages/admin/SignOut";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCustomer from "./pages/admin/Customer";

const App = () => {
  const customer = useSelector((state) => state.customer.value);
  // const admin = useSelector((state) => state.admin.value);

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
        <Route index element={<AdminSignIn />} />

        {/* <Route element={<ProtectedRoutes redirectPath="/admin" allowedBy={admin} />}> */}
          <Route path="sign-out" element={<AdminSignOut />} />
          <Route path="customer" element={<AdminCustomer />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        {/* </Route> */}

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
      {/* ./Admin */}
    </Routes>
  );
};

export default App;
