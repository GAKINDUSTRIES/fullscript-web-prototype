import productApi from './../api/productApi';

import * as types from './actionTypes';

export const fetchProductsSuccess = (products, page) => ({
  products,
  page,
  type: types.FETCH_PRODUCTS_SUCCESS
});

export const ratingProductSuccess = () => ({
  type: types.RATE_PRODUCT_SUCCESS
});

export const ratingProduct = () => ({
  type: types.RATE_PRODUCT
});

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS
});

export const getProducts = ({ page }) =>
  (dispatch) => {
    dispatch(fetchProducts());
    productApi.getProducts(page).then(({ products }) => {
      dispatch(fetchProductsSuccess(products, page));
    });
  };

export const rateProduct = (rate, productId) =>
  (dispatch) => {
    dispatch(ratingProduct());
    productApi.rateProduct(rate, productId).then(() => {
      dispatch(ratingProductSuccess());
    });
  };
