import React, { Component } from 'react';

import './Footer.scss';

/**
 * Page footer
 * @param {string} props.left text to show on left
 * @param {string} props.right text to show on right
 */
export class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="footer-left">
          {this.props.left}
        </div>
        <div className="footer-right">
          {this.props.right}
        </div>
      </footer>
    );
  }
}

export default Footer;