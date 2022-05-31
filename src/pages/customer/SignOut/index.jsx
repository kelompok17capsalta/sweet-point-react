import { useDispatch } from 'react-redux';
import {
  Navigate,
} from 'react-router-dom';

// Redux Actions
import { updateUser } from '../../../services/redux/User';

const SignOut = () => {
  const dispatch = useDispatch();

  dispatch(updateUser(null));

  return (<Navigate to="/" replace />);
};

export default SignOut;
