import { useDispatch } from 'react-redux';
import {
  Navigate,
} from 'react-router-dom';

// Redux Actions
import { updateAdmin } from '../../../services/redux/Admin';

const SignOut = () => {
  const dispatch = useDispatch();

  dispatch(updateAdmin(null));

  return (<Navigate to="/admin" replace />);
};

export default SignOut;
