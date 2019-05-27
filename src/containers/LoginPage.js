import React, { memo } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginForm from 'components/user/LoginForm';
import { login } from 'actions/sessionActions';
import routes from 'constants/routesPaths';
import sideImage from '../assets/login-picture.png';
import greenLogo from '../assets/logo-green.png';
import SideImage from '../components/common/SideImage';
import '../styles/login.scss';

const LoginPage = ({ login, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div>
      <div className="side-image-container">
        <SideImage src={sideImage} placeholder="login-side-image.jpg"/>
      </div>
      <div className="form-container">
        <SideImage className="logo-img" src={greenLogo} placeholder="green-logo.png" delay={2000} />
        <h1><FormattedMessage id="login.title" /></h1>
        <LoginForm onSubmit={login} />
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: func.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(mapState, mapDispatch)(memo(LoginPage));
