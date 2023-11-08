import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

QuantitySellCart.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const useStyles = makeStyles(() => ({
  root: {},

  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    maxWidth: '180px',
    maxHeight: '30px',
    marginTop: '-10px',
  },
}));

function QuantitySellCart(props) {
  const classes = useStyles();
  const { form, name, label, disable } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];

  return (
    <FormControl error={hasError} margin="normal" fullWidth variant="outlined" size="small">
      <Controller
        control={form.control}
        name={name}
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            {/* giá trị trong input là string  */}
            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              disable={disable}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />

            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />

      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantitySellCart;
