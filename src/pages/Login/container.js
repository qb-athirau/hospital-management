import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/loginAction';
import { Login } from './component';

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (payload, userDispatch, history) =>
      dispatch(loginUser(payload, userDispatch, history)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
