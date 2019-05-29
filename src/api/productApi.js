import api from './apiService';
import { applyQueryParams } from '../utils/helpers';

class Product {
  static getProducts(page) {
    const props = { page };
    return api.get(applyQueryParams('/products', props));
  }

  static rateProduct(rate, productId) {
    const params = { rate: { value: rate } };
    return api.post(`/products/${productId}/rate`, params);
  }
}

export default Product;
