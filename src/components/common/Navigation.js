import React, { Component } from 'react';
import { bool } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import FullscriptLogo from '../../assets/fullscript-icn.png';
import routes from '../../constants/routesPaths';
import '../../styles/common/_navigation.scss';
import LogoutButton from './../user/LogoutButton';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      openMenu: false,
      shadowHeader: false
    };

    this.burgerToggle = this.burgerToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ shadowHeader: window.pageYOffset >= 50 });
  }

  burgerToggle() {
    const { openMenu } = this.state;
    this.setState({ openMenu: !openMenu });
  }

  render() {
    const { openMenu, shadowHeader } = this.state;
    const { isSticky } = this.props;

    return (
      <header
        style={{ position: isSticky ? 'fixed' : 'static' }}
        className={`navigation-guest ${openMenu ? 'navigation-guest-open' : ''} ${shadowHeader ? 'shadow-header' : ''}`}
      >
        <div className="navigation-top">
          <Link to={routes.index}>
            <img className="fullscript-icn" src={FullscriptLogo} alt="" />
          </Link>
          <div
            onClick={this.burgerToggle}
            className={`nav-icon ${openMenu ? 'open' : ''}`}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={`right-content ${openMenu ? 'open' : ''}`}>
          <NavLink to="https://fullscript.com/how-it-works" activeClassName="active-link">How it works</NavLink>
          <NavLink to="https://fullscript.com/patients" activeClassName="active-link">Patients</NavLink>
          <NavLink to="https://fullscript.com/blog" activeClassName="active-link">Blog</NavLink>
          <NavLink to="/products" className="button button-primary button-rate">Rate Products!</NavLink>
          <LogoutButton />
        </div>
      </header>
    );
  }
}

Navigation.propTypes = {
  isSticky: bool
};

Navigation.defaultProps = {
  isSticky: true
};

export default Navigation;
