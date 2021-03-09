import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/404/NotFound.scss';

import image404 from '../../images/gifs/peace-among-worlds.gif';

const NotFound = (props) => {
  return (
    <div className="notFound">
      <Link to="/">
        <span className="page404__span">
          <i className="fas fa-times page404__span--close"></i>
        </span>
      </Link>
      <p className="page404__text">Error 404 or... "Peace among the worlds to you".</p>
      <img src={image404} alt="Not found 404" className="page404__img" />
    </div>
  );
};

export default NotFound;
