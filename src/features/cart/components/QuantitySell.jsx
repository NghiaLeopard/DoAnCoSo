import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from 'components/form-control/inputField';
import { Button } from '@material-ui/core';
import QuantitySellCart from 'components/form-control/quantityField/QuantitySellCart';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../cartSelector';

QuantitySell.propTypes = {
  onSubmit: PropTypes.func,
};

function QuantitySell({ cartItem }) {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Please enter at least 1')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      quantity: cartItem.quantity,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (quantity) => {
    const action = setQuantity({
      id: cartItem.product.id,
      quantity,
    });
    dispatch(action);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantitySellCart name="quantity" label="quantity" form={form} onSubmit={handleSubmit} />
    </form>
  );
}

export default QuantitySell;
