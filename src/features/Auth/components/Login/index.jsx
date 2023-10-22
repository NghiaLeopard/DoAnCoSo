import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';
import { login } from 'features/Auth/userSlice';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { closeDialog } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleTodoFormSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar('Login successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return <LoginForm onSubmit={handleTodoFormSubmit} />;
}

export default Login;
