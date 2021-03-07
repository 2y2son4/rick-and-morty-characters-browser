// React
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../../stylesheets/renderCharacters/CharacterNotAvailable.scss';

const CharacterNotAvailable = () => {
  return (
    <div>
      <Link to="/">
        <span className="detail__span">
          <i className="fas fa-times detail__span--close"></i>
        </span>
      </Link>
      <div className="notAvailable">
        <div className="notAvailable__img" alt="Character not found. Aw geez"></div>
      </div>
    </div>
  );
};

export default CharacterNotAvailable;
