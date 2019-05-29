import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func, bool, number } from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Redirect } from 'react-router-dom';

import ProductsList from '../components/product/ProductsList';
import EndList from '../components/common/EndList';
import Loading from '../components/common/Loading';
import { getProducts, rateProduct } from '../actions/productActions';
import Navigation from '../components/common/Navigation';
import HomePageFooter from '../components/homepage/HomePageFooter';
import routes from './../constants/routesPaths';
import '../styles/components/products-list.scss';

class ProductsPage extends Component {
  constructor() {
    super();

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    const { getProducts, currentPage } = this.props;
    getProducts({ page: currentPage + 1 });
  }

  render() {
    const { finalPage, products, currentPage, loading, rateProduct, authenticated } = this.props;

    if (!authenticated) {
      return <Redirect to={routes.login} />;
    }

    return (
      <div>
        <Navigation />
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadMore}
          hasMore={!loading && !finalPage}
          loader={<Loading key={currentPage} />}
        >
          <ProductsList products={products} rateProduct={rateProduct} />
        </InfiniteScroll>
        {finalPage && <EndList />}
        <HomePageFooter />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: array.isRequired,
  getProducts: func.isRequired,
  rateProduct: func.isRequired,
  loading: bool.isRequired,
  currentPage: number.isRequired,
  finalPage: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  products: state.getIn(['products', 'productsList']).toJS(),
  currentPage: state.getIn(['products', 'currentPage']),
  finalPage: state.getIn(['products', 'finalPage']),
  loading: state.getIn(['products', 'loading'])
});

const mapDispatch = dispatch => ({
  getProducts: page => dispatch(getProducts(page)),
  rateProduct: (value, productId) => dispatch(rateProduct(value, productId))
});

export default connect(mapState, mapDispatch)(ProductsPage);
