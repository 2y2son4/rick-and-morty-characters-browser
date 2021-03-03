import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';

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

export default CharacterCard;
