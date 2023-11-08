import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from 'components/form-control/inputField';
import { Button } from '@material-ui/core';
import QuantitySellCart from 'components/form-control/quantityField/QuantitySellCart';

SellCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function SellCartForm({ onSubmit = {} }) {
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
    <form onChange={form.handleSubmit(handleSubmit)}>
      <QuantitySellCart name="quantity" label="quantity" form={form} />
    </form>
  );
}

export default SellCartForm;
