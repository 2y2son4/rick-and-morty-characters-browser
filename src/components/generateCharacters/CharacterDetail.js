import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { name, image, gender, status, origin, location, species, episodes } = props.character;

  const alienIcon = <i className="fas fa-pastafarianism card__icon--species" title="Alien"></i>;
  const humanIcon = <i className="fas fa-user card__icon--species" title="Human"></i>;
  const aliveIcon = <i className="fas fa-heart card__icon--status" title="Dead"></i>;
  const DeadIcon = <i className="fas fa-skull card__icon--status" title="Dead"></i>;
  const unknownIcon = <i className="fas fa-question-circle card__icon--status" title="Status unknown"></i>;

  const iconSpecies = () => {
    return species === 'Alien' ? alienIcon : humanIcon;
  };

  const iconStatus = () => {
    if (status === 'Alive') {
      return aliveIcon;
    } else if (status === 'Dead') {
      return DeadIcon;
    } else {
      return unknownIcon;
    }
  };

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
          <img className="detail__img--child" src={image} alt={'Ugly face of ' + name} />
        </span>
        <p className="detail__text--species">
          <span className="detail__bold">Species:</span>{' '}
          <span className="detail__lower">
            {species} {iconSpecies()}
          </span>
        </p>
        <p className="detail__text--status">
          <span className="detail__bold">Status:</span>{' '}
          <span className="detail__lower">
            {status} {iconStatus()}
          </span>
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
