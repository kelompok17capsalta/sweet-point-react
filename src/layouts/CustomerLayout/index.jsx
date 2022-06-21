import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

// Redux Action
import { updateCustomer } from "../../services/redux/Customer";

// Services
import Customer from "../../services/api/Customer";
import Token from "../../services/localStorage/Token";
import Navbar from "../../components/CustomerNavbar";
import Footer from "../../components/CustomerFooter";

const CustomerLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateData = async () => {
      try {
        const customerToken = Token.getCustomerToken();

        if (customerToken) {
          const newCustomer = await Customer.getCustomer();
          dispatch(updateCustomer(newCustomer));
        }
      } catch {}
    };

    updateData();
  }, [dispatch]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CustomerLayout;
