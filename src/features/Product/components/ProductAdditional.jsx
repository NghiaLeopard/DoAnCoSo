import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

ProductAdditional.propTypes = {};

function ProductAdditional({ product }) {
  console.log(product);
  // const safeDescription = DOMPurify.sanitize(product.shortDescription);
  // return <div dangerouslySetInnerHTML={{ __html: safeDescription }} />;
  return <div>{product.shortDescription}</div>;
}

export default ProductAdditional;
