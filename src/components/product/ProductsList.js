import React from 'react';
import { array, func } from 'prop-types';
import ProductCard from './ProductCard';

const ProductsList = ({ products, rateProduct }) => (
  <div className="products-list">
    { products.map((product, index) => (
      <ProductCard product={product} rateProduct={rateProduct} key={index} />
    ))
    }
  </div>
);

ProductsList.propTypes = {
  products: array.isRequired,
  rateProduct: func.isRequired
};

export default ProductsList;
