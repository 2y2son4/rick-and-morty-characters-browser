import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

import '../../stylesheets/renderCharacters/CharacterList.scss';

import CharacterNotFound from './CharacterNotFound';

const CharacterList = (props) => {
  const { characters, resetBtn, search } = props;

  const characterElement = characters.map((character) => {
    const { id } = character;

    return (
      <li className="list__item" key={id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  if (characterElement.length > 0) {
    return (
      <article className="article">
        <ul className="list">{characterElement}</ul>
      </article>
    );
  } else {
    return <CharacterNotFound resetBtn={resetBtn} search={search} />;
  }
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  id: PropTypes.number,
};

export default CharacterList;
