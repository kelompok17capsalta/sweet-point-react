import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Redux Action
import { updateAdmin } from '../../services/redux/Admin';

// Services
import Admin from '../../services/api/Admin';
import Token from '../../services/localStorage/Token';


const AdminLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateData = async () => {
      try {
        const adminToken = Token.getAdminToken();

        if (adminToken) {
          const newAdmin = await Admin.getAdmin();
          dispatch(updateAdmin(newAdmin));
        }
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

export default AdminLayout;
