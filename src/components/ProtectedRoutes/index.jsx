import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ redirectPath, allowedBy }) => {
  if (!allowedBy) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
