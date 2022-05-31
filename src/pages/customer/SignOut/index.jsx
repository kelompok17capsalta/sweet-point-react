import { useDispatch } from 'react-redux';
import {
  Navigate,
} from 'react-router-dom';

// Redux Actions
import { updateCustomer } from '../../../services/redux/Customer';

const SignOut = () => {
  const dispatch = useDispatch();

  dispatch(updateCustomer(null));

  return (<Navigate to="/" replace />);
};

export default SignOut;
