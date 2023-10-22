import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-control/inputField';
import { Avatar, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-control/passwordField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    width: '100%',
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm(props) {
  const classes = useStyles();
  const { onSubmit } = props;
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('please enter your full name.')
      .test('should enter two characters', 'please enter two characters', (value) => {
        console.log(value);
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('please enter your email').email('please enter a valid email address'),
    password: yup.string().required('please enter your password').min(6, 'please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required('please retype your password')
      .oneOf([yup.ref('password')], 'password the not match'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    if (onSubmit) {
      await onSubmit(value);
    }
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h1" variant="h5">
        <pre>          Create an account         </pre>
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
