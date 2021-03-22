import React from 'react';

import icons from '../.././services/icons';

import '../../stylesheets/layout/Key.scss';
import '../../stylesheets/renderCharacters/CharacterCard.scss';
import '../../stylesheets/renderCharacters/CharacterDetail.scss';

const Key = () => {
  const {
    alienIcon,
    animalIcon,
    cronenbergIcon,
    diseaseIcon,
    humanIcon,
    humanoidIcon,
    mythologicalIcon,
    planetIcon,
    poopyIcon,
    robotIcon,
    aliveIcon,
    deadIcon,
    unknownIcon,
    femaleIcon,
    maleIcon,
    genderlessIcon,
  } = icons;

  return (
    <article className="key__article">
      <p className="key__text">Species</p>
      <ul className="key__list">
        <li className="key__list--item">Alien: {alienIcon}</li>
        <li className="key__list--item">Animal: {animalIcon}</li>
        <li className="key__list--item">Cronenberg: {cronenbergIcon}</li>
        <li className="key__list--item">Disease: {diseaseIcon}</li>
        <li className="key__list--item">Human: {humanIcon}</li>
        <li className="key__list--item">Humanoid: {humanoidIcon}</li>
        <li className="key__list--item">Mythological creature: {mythologicalIcon}</li>
        <li className="key__list--item">Planet: {planetIcon}</li>
        <li className="key__list--item">Poopybutthole: {poopyIcon}</li>
        <li className="key__list--item">Robot: {robotIcon}</li>
        <li className="key__list--item">Unknown: {unknownIcon}</li>
      </ul>
      <p className="key__text">Status</p>
      <ul className="key__list">
        <li className="key__list--item">Alive: {aliveIcon}</li>
        <li className="key__list--item">Dead: {deadIcon}</li>
        <li className="key__list--item">Unknown: {unknownIcon}</li>
      </ul>
      <p className="key__text">Gender</p>
      <ul className="key__list">
        <li className="key__list--item">Female: {femaleIcon}</li>
        <li className="key__list--item">Male: {maleIcon}</li>
        <li className="key__list--item">Genderless: {genderlessIcon}</li>
        <li className="key__list--item">Unknown: {unknownIcon}</li>
      </ul>
    </article>
  );
};

export default Key;
