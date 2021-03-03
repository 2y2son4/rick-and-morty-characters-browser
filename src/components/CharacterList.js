import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  const characterElement = props.characters.map((character) => {
    // console.log(character);
    const { id } = character;
    return (
      <li className="list__item card" key={id}>
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

export default CharacterList;
