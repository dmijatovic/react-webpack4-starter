import React, { Component } from 'react';

import './Header.scss';
/**
 * Page header
 * @param {string} props.title header title
*/
export class Header extends Component {
  render() {
    //console.log("Header props...", this.props);
    return (
      <header className="app-header">
        <section className="app-header-body">
          <div className="app-logo"></div>
          <h1 className="app-title">{this.props.appTitle}</h1>
          <h2 className="app-page-title">{this.props.pageTitle}</h2>
        </section>
      </header>
    );
  }
}

export default Header;
