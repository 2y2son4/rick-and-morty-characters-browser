import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  const { name, image, gender, status, origin, location } = props.character;
  return (
    <>
      <Link to={`/user${props.character.id}`} />
      <img className="card__img" src={image} alt="User" />
      <h4 className="card__name">{name}</h4>
      <p className="card__text--status">{status}</p>
      <p className="card__text--gender">{gender}</p>
      <p className="card__text--origin">Origin: {origin}</p>
      <p className="card__text--location">Location: {location}</p>
    </>
  );
};

export default CharacterCard;
