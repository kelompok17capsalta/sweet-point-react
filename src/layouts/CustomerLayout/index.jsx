import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Redux Action
import { updateCustomer } from '../../services/redux/Customer';

// Services
import Customer from '../../services/api/Customer';
import Token from '../../services/localStorage/Token';

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
      } catch {
      }
    };

    updateData();
  }, [dispatch]);

  return (
    <>
      <header>
        {/* Ini Header */}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Ini Footer */}
      </footer>
    </>
  );
};

export default CustomerLayout;
