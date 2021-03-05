import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import alive from '../../images/icons/alive-icon.png';
import '../../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  const { name, image, species, id, status } = props.character;

  const alienIcon = <i className="fas fa-pastafarianism card__icon--species" title="Alien"></i>;
  const humanIcon = <i className="fas fa-user card__icon--species" title="Human"></i>;
  const aliveIcon = <img src={alive} alt="Alive" className="fas fa-kiss card__icon--status" title="Alive" />;
  const DeadIcon = <i className="fas fa-dizzy card__icon--status" title="Dead"></i>;
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
