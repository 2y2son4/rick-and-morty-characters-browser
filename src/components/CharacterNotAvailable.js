import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterNotAvailable.scss';
import imageNotAvailable from '../images/cards/404-card-desktop.png';

const CharacterNotAvailable = (props) => {
  return (
    <div>
      <Link to="/">
        <span className="detail__close">X</span>
      </Link>
      <div className="notAvailable">
        <img className="notAvailable__img" src={imageNotAvailable} alt="Character not found. Aw geez" />
      </div>
    </div>
  );
};

export default CharacterNotAvailable;
