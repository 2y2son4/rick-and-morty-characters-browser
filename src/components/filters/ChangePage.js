import React from 'react';

import '../.././stylesheets/filters/ChangePage.scss';

const ChangePage = () => {
  return (
    <div className="arrows">
      <span className="arrows__containerL">
        <i className="fas fa-angle-double-left arrows__prev"></i>
        <span className="arrows__text"> Previous page</span>
      </span>
      <span className="arrows__containerR">
        <span className="arrows__text"> Next page</span>
        <i className="fas fa-angle-double-right arrows__next"></i>
      </span>
    </div>
  );
};

export default ChangePage;
