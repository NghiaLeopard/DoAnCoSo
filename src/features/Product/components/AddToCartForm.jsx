import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from 'components/form-control/inputField';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-control/quantityField';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = {} }) {
  const schema = yup.object().shape({
    quantity: yup.number().min(1, 'please enter at least 1').required('please enter quantity'),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="quantity" form={form} />

      <Button type="submit" variant="contained" color="primary" fullWidth size="large" style={{ width: '250px' }}>
        ADD TO CART
      </Button>
    </form>
  );
}

export default AddToCartForm;
