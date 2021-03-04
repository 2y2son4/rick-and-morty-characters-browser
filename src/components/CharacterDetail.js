import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { name, image, gender, status, origin, location, species, episodes } = props.character;

  return (
    <div>
      <Link to="/">
        <span className="detail__span">
          <i className="fas fa-times detail__close"></i>
        </span>
      </Link>
      <div className="detail">
        <h4 className="detail__name">
          {name} <span className="detail__lower">({gender})</span>
        </h4>
        <span className="detail__img--parent">
          <img className="detail__img--child" src={image} alt={'Ugly face of ' + name} />
        </span>
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

CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  species: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
};

export default CharacterDetail;
