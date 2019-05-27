import React, { Component } from 'react';
import { bool } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import FullscriptLogo from '../../assets/fullscript-icn.png';
import routes from '../../constants/routesPaths';
import '../../styles/common/_navigation.scss'

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
    const { black, isSticky } = this.props;

    return (
      <header
        style={{ position: isSticky ? 'fixed' : 'static' }}
        className={`navigation-guest ${openMenu ? 'navigation-guest-open' : ''} ${black || shadowHeader ? 'shadow-header' : ''}`}
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
          <NavLink to="#" activeClassName="active-link">How it works</NavLink>
          <NavLink to="#" activeClassName="active-link">Patients</NavLink>
          <NavLink to="#" activeClassName="active-link">Blog</NavLink>
          <NavLink to="#" className="button button-primary button-rate">Rate Products!</NavLink>
          <NavLink to="#" className="button button-logout">Log Out</NavLink>
        </div>
      </header>
    );
  }
}

Navigation.propTypes = {
  black: bool,
  isSticky: bool
};

Navigation.defaultProps = {
  black: false,
  isSticky: true
};

export default Navigation;
