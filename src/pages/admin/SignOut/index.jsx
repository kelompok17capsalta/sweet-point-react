import { useDispatch } from 'react-redux';
import {
  Navigate,
} from 'react-router-dom';

// Redux Actions
import { updateAdmin } from '../../../services/redux/Admin';

// Services
import Token from '../../../services/localStorage/Token';

const SignOut = () => {
  const dispatch = useDispatch();
  dispatch(updateAdmin(null));

  Token.removeAdminToken();

  return (<Navigate to="/admin" replace />);
};

export default SignOut;
