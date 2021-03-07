import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import icons from '../.././services/icons';

import '../../stylesheets/renderCharacters/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { name, image, gender, status, origin, location, species, episodes } = props.character;

  return (
    <div>
      <Link to="/">
        <span className="detail__span">
          <i className="fas fa-times detail__span--close"></i>
        </span>
      </Link>
      <div className="detail">
        <h4 className="detail__name">
          {name} <span className="detail__lower">({gender})</span>
        </h4>
        <span className="detail__img--parent">
          <img className="detail__img--child" src={image} alt={name + ' ´s ugly face'} />
        </span>
        <p className="detail__text--species">
          <span className="detail__bold">Species:</span>{' '}
          <span className="detail__lower">
            {species} {icons.species(species)}
          </span>
        </p>
        <p className="detail__text--status">
          <span className="detail__bold">Status:</span>{' '}
          <span className="detail__lower">
            {status} {icons.status(status)}
          </span>
        </p>
        <p className="detail__text--origin">
          <span className="detail__bold">Origin:</span> {origin}
        </p>
        <p className="detail__text--location">
          <span className="detail__bold">Location:</span> {location}
        </p>
        <p className="detail__text--episodes">
          <span className="detail__bold">Number of episodes:</span> {episodes}
        </p>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetail;
