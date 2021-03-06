import React from 'react';

import '../.././stylesheets/filters/ChangePage.scss';

const ChangePage = (props) => {
  const { page, handleLess, handleMore } = props;

  return (
    <nav className="arrows">
      <span className="arrows__containerL" onClick={handleLess}>
        <i className="fas fa-angle-double-left arrows__prev"></i>
        <span className="arrows__text"> Previous page</span>
      </span>
      <span className="arrows__counter">| Page {page} |</span>
      <span className="arrows__containerR" onClick={handleMore}>
        <p className="arrows__text"> Next page </p>
        <i className="fas fa-angle-double-right arrows__next"></i>
      </span>
    </nav>
  );
};

export default ChangePage;
