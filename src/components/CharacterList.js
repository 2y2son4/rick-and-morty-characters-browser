import React from 'react';
import Character from './Character';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  const characterElement = props.characters.map((character) => {
    // console.log(user);
    const { id } = character;
    return (
      <li className="list__item card" key={id}>
        <Character character={character} />
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
