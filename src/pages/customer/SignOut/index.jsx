import { useDispatch } from 'react-redux';
import {
  Navigate,
} from 'react-router-dom';

// Redux Actions
import { updateCustomer } from '../../../services/redux/Customer';

// Services
import Token from '../../../services/localStorage/Token';

const SignOut = () => {
  const dispatch = useDispatch();
  dispatch(updateCustomer(null));

  Token.removeCustomerToken();

  return (<Navigate to="/" replace />);
};

export default SignOut;
