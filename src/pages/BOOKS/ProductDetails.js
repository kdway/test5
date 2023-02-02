import React from 'react';

import {products} from './products';
import EBOOK from './EBOOK'

const currency = number => {
  return number.toLocaleString("en", {style: "currency", currency: "USD", minimumFractionDigits: 2});
}

const ProductDetails = ({ name, match }) => {
  const { params: { productName }} = match;
  const product = products[productName];

  return (
    <div className="product-deatils">
      <h2>Product Details</h2>
      <div>
        <h3>{ product.name }</h3>
        <h4>{ currency(product.price) }</h4>
        <p>{ product.description }</p>
      </div>
    </div>
  )
};

export default ProductDetails;