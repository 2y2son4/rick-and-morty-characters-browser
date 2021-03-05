import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import icons from '../.././services/icons';

import '../../stylesheets/generateCharacters/CharacterCard.scss';

const CharacterCard = (props) => {
  const { name, image, species, id, status } = props.character;

  return (
    <Link to={`/character/${id}`}>
      <div className="card">
        <h4 className="card__name">
          {name} {icons.status(status)}
        </h4>
        <img className="card__img" src={image} alt={name} />
        <p className="card__text--species">
          {species} {icons.species(species)}
        </p>
      </div>
    </Link>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterCard;
