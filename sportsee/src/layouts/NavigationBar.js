import React, { Component } from 'react'
import logo from '../assets/images/logo.png';

class NavigationBar extends Component {
    render() {
      return (
        <header className="header">
          <div className="header__logo"> <img src={logo} alt="logo" /> </div>
          <nav>
            <ul className="header__nav">
                <li> Home </li>
                <li> Profile </li>
                <li> Settings </li>
                <li> Community </li>
            </ul>
          </nav>
        </header>
      );
    }
  }
export default NavigationBar;