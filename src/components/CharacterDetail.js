import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  console.log(props);
  const { name, image, gender, status, origin, location, species } = props.character;
  return (
    <div className="detail">
      <Link to="/">
        <span className="detail__close">X</span>
      </Link>
      <img className="detail__img" src={image} alt={name} />
      <h4 className="detail__name">{name}</h4>
      <p className="detail__text--status">{status}</p>
      <p className="detail__text--gender">
        {gender} / {species}
      </p>
      <p className="detail__text--origin">Origin: {origin}</p>
      <p className="detail__text--location">Location: {location}</p>
    </div>
  );
};

export default CharacterDetail;
