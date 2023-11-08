import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px',
    marginTop: '-18px',
    marginLeft: '10px',
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled, onSubmit } = props;
  const { errors } = form.formState;
  const { setValue, getValues } = form;
  const hasError = errors[name];

  const handleQuantitySubmit = (value) => {
    if (!onSubmit) return;
    onSubmit(value);
  };

  const handleQuantityChange = (e, value, type) => {
    e.preventDefault();
    let newValue;

    switch (type) {
      case 'desc': {
        newValue = Number.parseInt(value) ? Number.parseInt(value) - 1 : 1;
        break;
      }
      case 'asc': {
        newValue = Number.parseInt(value) ? Number.parseInt(value) + 1 : 1;
        break;
      }

      default:
        newValue = Number.parseInt(getValues(name)) ? Number.parseInt(getValues(name)) : Number.parseInt(value);
    }

    return newValue;
  };

  return (
    <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined" size="small">
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={(e) => {
                const values = handleQuantityChange(e, value, 'desc');
                setValue(name, values);
                handleQuantitySubmit(values);
              }}
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <IconButton
              onClick={(e) => {
                const values = handleQuantityChange(e, value, 'asc');
                setValue(name, values);
                handleQuantitySubmit(values);
              }}
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />

      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
