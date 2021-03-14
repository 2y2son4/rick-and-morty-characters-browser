import React from 'react';

import icons from '../.././services/icons';

import '../../stylesheets/layout/Key.scss';

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
  } = icons;

  return (
    <article className="key__article">
      <p className="key__text">Species</p>
      <ul className="key__list">
        <li className="key__list--item">
          Alien: <span className="key__icon">{alienIcon}</span>
        </li>
        <li className="key__list--item">
          Animal: <span className="key__icon">{animalIcon}</span>
        </li>
        <li className="key__list--item">
          Cronenberg: <span className="key__icon">{cronenbergIcon}</span>
        </li>
        <li className="key__list--item">
          Disease: <span className="key__icon">{diseaseIcon}</span>
        </li>
        <li className="key__list--item">
          Human: <span className="key__icon">{humanIcon}</span>
        </li>
        <li className="key__list--item">
          Humanoid: <span className="key__icon">{humanoidIcon}</span>
        </li>
        <li className="key__list--item">
          Mythological creature: <span className="key__icon">{mythologicalIcon}</span>
        </li>
        <li className="key__list--item">
          Planet: <span className="key__icon">{planetIcon}</span>
        </li>
        <li className="key__list--item">
          Poopybutthole: <span className="key__icon">{poopyIcon}</span>
        </li>
        <li className="key__list--item">
          Robot: <span className="key__icon">{robotIcon}</span>
        </li>
        <li className="key__list--item">
          Unknown: <span className="key__icon">{unknownIcon}</span>
        </li>
      </ul>
      <p className="key__text">Status</p>
      <ul className="key__list">
        <li className="key__list--item">
          Alive: <span className="key__icon">{aliveIcon}</span>
        </li>
        <li className="key__list--item">
          Dead: <span className="key__icon">{deadIcon}</span>
        </li>
        <li className="key__list--item">
          Unknown: <span className="key__icon">{unknownIcon}</span>
        </li>
      </ul>
    </article>
  );
};

export default Key;
