import React, { Component } from 'react';
import { object, func } from 'prop-types';
import Rater from 'react-rater';
import './../../styles/common/react-rater.scss';

import ProductInfo from './ProductInfo';

class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      disabled: false,
      rate: 0
    };

    this.rateProduct = this.rateProduct.bind(this);
  }

  componentWillMount() {
    this.setState({ disabled: this.props.product.rated });
    this.setState({ rate: this.props.product.rateValue });
  }

  rateProduct(value) {
    const { rating } = value;
    this.props.rateProduct(rating, this.props.product.id);
    this.setState({ disabled: true });
    this.setState({ rate: rating });
  }

  render() {
    const { product } = this.props;
    const { disabled, rate } = this.state;

    return (
      <div
        className={`product-card ${disabled ? 'disabled' : ''} `}
      >
        <div className="product-card-image-header">
          <Rater rating={rate} total={5} interactive={!disabled} onRate={this.rateProduct} />
        </div>

        <div
          className="product-card-image-logo"
          style={{
            backgroundImage: `url(${product.image})` }}
        />
        <ProductInfo product={product} listView />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: object.isRequired,
  rateProduct: func.isRequired,
};

export default ProductCard;
