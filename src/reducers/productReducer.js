import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  productsList: Immutable.List(),
  currentPage: 0,
  finalPage: false,
  loading: false
});

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS: {
      return state.set('loading', true);
    }
    case types.FETCH_PRODUCTS_SUCCESS: {
      const { products, page } = action;
      let newState = state.set('productsList', state.get('productsList').concat(Immutable.fromJS(products)));
      newState = newState.set('currentPage', page);
      if (products.length === 0) {
        newState = newState.set('finalPage', true);
      }
      return newState.set('loading', false);
    }
    case types.RATE_PRODUCT: {
      return state.set('loading', true);
    }
    case types.RATE_PRODUCT_SUCCESS: {
      return state.set('loading', false);
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
