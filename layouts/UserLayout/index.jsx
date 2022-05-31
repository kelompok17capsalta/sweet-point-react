import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Redux Action
import { updateUser } from '../../services/redux/User';

// API Service
import User from '../../services/api/User';

const UserLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateData = async () => {
      try {
        const newUser = await User.getUser();
        dispatch(updateUser(newUser));
      } catch (error) {
        console.log(error);
      }
    };

    updateData();
  }, [dispatch]);

  return (
    <>
      <header>Ini Header</header>

      <main>
        <Outlet />
      </main>

      <footer>Ini Footer</footer>
    </>
  );
};

export default UserLayout;
