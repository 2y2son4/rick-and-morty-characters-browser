import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  const characterElement = props.characters.map((character) => {
    const { id } = character;

    return (
      <li className="list__item" key={id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <article className="article">
      <ul className="list">{characterElement}</ul>
    </article>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  id: PropTypes.number,
};

export default CharacterList;
