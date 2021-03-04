import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  const { name, image, species, id, status } = props.character;

  const iconSpecies = () => {
    return species === 'Alien' ? <i className="fas fa-pastafarianism"></i> : <i className="fas fa-user"></i>;
  };

  const iconStatus = () => {
    if (status === 'Alive') {
      return <i className="fas fa-user"></i>;
    } else if (status === 'Dead') {
      return <i className="fas fa-dizzy"></i>;
    } else {
      return <i className="fas fa-question"></i>;
    }
  };

  return (
    <Link to={`/character/${id}`}>
      <div className="card">
        <img className="card__img" src={image} alt={name} />
        <h4 className="card__name">
          {name} {iconStatus()}
        </h4>
        <p className="card__text--species">
          {species} {iconSpecies()}
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
