import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  console.log(props);
  const { name, image, gender, status, origin, location, species, episodes } = props.character;

  return (
    <div>
      <Link to="/">
        <span className="detail__close">X</span>
      </Link>
      <div className="detail">
        <h4 className="detail__name">
          {name} <span className="detail__lower">({gender})</span>
        </h4>
        <img className="detail__img" src={image} alt={name} />
        <span className="detail__icons"></span>
        <p className="detail__text--species">
          <span className="detail__bold">Species:</span> <span className="detail__lower">{species}</span>
        </p>
        <p className="detail__text--status">
          <span className="detail__bold">Status:</span> <span className="detail__lower">{status}</span>
        </p>
        <p className="detail__text--origin">
          <span className="detail__bold">Origin:</span> {origin}
        </p>
        <p className="detail__text--location">
          <span className="detail__bold">Location:</span> {location}
        </p>
        <p className="detail__text--episodes">
          <span className="detail__bold">Episodes:</span> {episodes}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
