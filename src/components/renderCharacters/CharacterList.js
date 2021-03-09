// React
import React from 'react';
import PropTypes from 'prop-types';

// components
import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';

// styles
import '../../stylesheets/renderCharacters/CharacterList.scss';

const CharacterList = (props) => {
  const { characters, resetBtn, search, page } = props;

  const characterElement = characters.map((character) => {
    const { id } = character;

    return (
      <li className="list__item" key={id}>
        <CharacterCard page={page} character={character} />
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
  search: PropTypes.string,
  characters: PropTypes.array.isRequired,
  resetBtn: PropTypes.func,
};

export default CharacterList;
