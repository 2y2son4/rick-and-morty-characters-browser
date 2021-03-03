import React from 'react';
// import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  const { name, image, species } = props.character;
  return (
    <>
      {/* <Link to={`/user${props.character.id}`} /> */}
      <img className="card__img" src={image} alt={name} />
      <h4 className="card__name">{name}</h4>
      <p className="card__text--species">{species}</p>
    </>
  );
};

export default CharacterCard;
