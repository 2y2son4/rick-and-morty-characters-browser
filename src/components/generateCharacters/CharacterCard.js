import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  const { name, image, species, id } = props.character;

  return (
    <Link to={`/character/${id}`}>
      <div className="card">
        <img className="card__img" src={image} alt={name} />
        <h4 className="card__name">{name}</h4>
        <p className="card__text--species">{species}</p>
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
