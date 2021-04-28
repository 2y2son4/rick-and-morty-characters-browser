// React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// icons fuction
import icons from '../.././services/icons';

// styles
import '../../stylesheets/renderCharacters/CharacterCard.scss';

const CharacterCard = (props) => {
  const { page } = props;
  const { name, image, species, id, status } = props.character;

  return (
    <Link to={`/page=${page}/character=${id}`}>
      <article className="card">
        <h4 className="card__name">{name}</h4>
        <img className="card__img" src={image} alt={name + ' ´s ugly face'} />
        <p className="card__text--species">{icons.species(species)}</p>{' '}
        <p className="card__text--status">{icons.status(status)}</p>
      </article>
    </Link>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
