import React from 'react';
import { bool, string, func } from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component, exact = false, path }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (React.createElement(component, props))}
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired,
  path: string.isRequired,
  exact: bool
};

export default PrivateRoute;
