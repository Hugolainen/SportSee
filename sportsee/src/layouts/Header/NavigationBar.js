import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo.png';

class NavigationBar extends Component {
    render() {
      return (
        <header className="header">
            <div className="header__logo"> <img src={logo} alt="logo" /> </div>
            <nav>
                <ul className="header__nav">
                    <li>
                      <NavLink 
                        activeClassName="active"
                        exact
                        to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink 
                        activeClassName="active"
                        to="/about">About</NavLink>
                    </li>
                </ul>
              </nav>
        </header>
      );
    }
  }
export default NavigationBar;