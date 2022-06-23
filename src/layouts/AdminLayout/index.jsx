import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

// Components
import Navbar from '../../components/AdminNavbar';
import Footer from '../../components/AdminFooter';

// Redux Action
import { updateAdmin } from '../../services/redux/Admin';

// Services
import Admin from '../../services/api/Admin';
import Token from '../../services/localStorage/Token';

// Utils
import ErrorHandler from '../../utils/ErrorHandler';


const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const pagesWithoutHeadAndFooter = [
    '/admin',
  ];

  useEffect(() => {
    const updateData = async () => {
      try {
        const adminToken = Token.getAdminToken();

        if (adminToken) {
          const newAdmin = await Admin.getAdmin();
          dispatch(updateAdmin(newAdmin));
        }
      } catch {
        ErrorHandler.sessionExpired();
        Token.removeAdminToken();
        navigate('/admin', { replace: true });
      }
    };

    updateData();
  }, [dispatch, navigate]);

  return (
    <>
      {!pagesWithoutHeadAndFooter.includes(location.pathname) && (<Navbar />)}


      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      {!pagesWithoutHeadAndFooter.includes(location.pathname) && (<Footer />)}

    </>
  );
};

export default AdminLayout;
