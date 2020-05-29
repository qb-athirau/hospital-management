import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { LoginLayout, Header } from './style';
import { LoginForm } from './components/loginForm';
import validator from './validate';
import { useUserDispatch } from '../../context/UserContext';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape(validator),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.loginUser(values);
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Login Form',
})(LoginForm);
export const Login = (props) => {
  // global
  const userDispatch = useUserDispatch();

  const handleLogin = (payload) => {
    props.handleClose();
    props.loginUser(payload, userDispatch, props.history);
  };
  return (
    <LoginLayout>
      <Header>Login</Header>
      <EnhancedForm loginUser={(payload) => handleLogin(payload)} />
    </LoginLayout>
  );
};
