import React from 'react';
import { object, bool } from 'prop-types';
import StarIcon from '../icons/StarIcon';

const ProductInfo = ({ product, listView = false }) => (
  <div className={listView ? 'product-info-content' : ''}>
    <div className={listView ? 'product-title list-view' : 'product-title'}> {product.name}</div>
    <div className="product-description" >
      <StarIcon disabled={product.rating === 0} style={{ flexShrink: 0 }} />
      {(product.rating && product.rating !== 0) ?
        <div className="stars">{product.rating.toFixed(1)}</div> :
        <div className="stars na-stars">N/A</div>
      }
      <div className="point" />
      <div className="price">$$</div>
      <div className="point" />
    </div>
  </div>
);

ProductInfo.propTypes = {
  product: object.isRequired,
  listView: bool
};

export default ProductInfo;
