import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

// Components
import Navbar from '../../components/CustomerNavbar';
import Footer from '../../components/CustomerFooter';

// Redux Action
import { updateCustomer } from '../../services/redux/Customer';

// Services
import Customer from '../../services/api/Customer';
import Token from '../../services/localStorage/Token';

// Utils
import ErrorHandler from '../../utils/ErrorHandler';

const CustomerLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const pagesWithoutHeadAndFooter = [
    '/sign-in',
    '/sign-up',
  ];

  useEffect(() => {
    const updateData = async () => {
      try {
        const customerToken = Token.getCustomerToken();

        if (customerToken) {
          const newCustomer = await Customer.getCustomer();
          dispatch(updateCustomer(newCustomer));
        }
      } catch {
        ErrorHandler.sessionExpired();
        Token.removeCustomerToken();
        dispatch(updateCustomer(null));
        navigate('/', { replace: true });
      }
    };

    updateData();
  }, []);

  return (
    <>
      {!pagesWithoutHeadAndFooter.includes(location.pathname) && (<Navbar />)}

      <main style={{ minHeight: '85vh' }}>
        <Outlet />
      </main>

      {!pagesWithoutHeadAndFooter.includes(location.pathname) && (<Footer />)}
    </>
  );
};

export default CustomerLayout;
