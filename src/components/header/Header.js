import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <div id="header-main">
          <Link to={'/'}>
            <img src={require('../../assets/home-icon.jpeg')}></img>
          </Link>
        </div>
      </>
    );
  }
}
