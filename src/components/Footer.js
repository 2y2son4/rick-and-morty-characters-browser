import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <span className="footer__span fly-in-bottom">
        Design & code by {''}
        <a className="footer__span--link" href="https://github.com/2y2son4" target="_blank" rel="noreferrer">
          2y2son4{''}
        </a>
        👽
      </span>
    </footer>
  );
};

export default Footer;
