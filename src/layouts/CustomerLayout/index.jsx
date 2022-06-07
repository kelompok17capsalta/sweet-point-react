import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Redux Action
import { updateCustomer } from '../../services/redux/Customer';

// API Service
import Customer from '../../services/api/Customer';

const CustomerLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateData = async () => {
      try {
        const newCustomer = await Customer.getCustomer();
        dispatch(updateCustomer(newCustomer));
      } catch (error) {
        console.log(error);
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
