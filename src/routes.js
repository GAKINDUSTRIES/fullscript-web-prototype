import routesPaths from 'constants/routesPaths';
import HomePage from 'containers/HomePage';
import ProductsPage from 'containers/ProductsPage';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: HomePage,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: LoginPage
  },
  {
    path: routesPaths.products,
    component: ProductsPage
  },
  {
    component: NotFoundPage
  }
];

export default routes;
