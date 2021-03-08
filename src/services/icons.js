/* eslint-disable import/no-anonymous-default-export */

// icons
import { GiUnicorn } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri';
import { IoMdPlanet } from 'react-icons/io';

import poopyButthole from '../images/icons/poopy_icon.svg';

const alienIcon = <RiAliensFill />;
const animalIcon = <i className="fas fa-paw card__icon--species" title="Disease"></i>;
const cronenbergIcon = <i className="fas fa-pastafarianism card__icon--species" title="Cronenberg"></i>;
const diseaseIcon = <i className="fas fa-bacteria card__icon--species" title="Disease"></i>;
const humanIcon = <i className="fas fa-child card__icon--species" title="Human"></i>;
const humanoidIcon = <i className="fas fa-universal-access card__icon--species" title="Humanoid"></i>;
const mythologicalIcon = <GiUnicorn />;
const planetIcon = <IoMdPlanet />;
const poopyIcon = <img src={poopyButthole} alt="poopybutthole" className="card__icon--species card__icon--poopy" />;
const robotIcon = <i className="fas fa-robot card__icon--species" title="Robot"></i>;

const aliveIcon = <i className="fas fa-heartbeat card__icon--status" title="Dead"></i>;
const deadIcon = <i className="fas fa-skull card__icon--status" title="Dead"></i>;

const unknownIcon = <i className="fas fa-question-circle card__icon--status" title="Status unknown"></i>;

const iconSpecies = (data) => {
  if (data === 'Alien') {
    return alienIcon;
  } else if (data === 'Human') {
    return humanIcon;
  } else if (data === 'Humanoid') {
    return humanoidIcon;
  } else if (data === 'Robot') {
    return robotIcon;
  } else if (data === 'Disease') {
    return diseaseIcon;
  } else if (data === 'Cronenberg') {
    return cronenbergIcon;
  } else if (data === 'Animal') {
    return animalIcon;
  } else if (data === 'Mythological Creature') {
    return mythologicalIcon;
  } else if (data === 'Planet') {
    return planetIcon;
  } else if (data === 'Poopybutthole') {
    return poopyIcon;
  } else {
    return unknownIcon;
  }
};

const iconStatus = (data) => {
  if (data === 'Alive') {
    return aliveIcon;
  } else if (data === 'Dead') {
    return deadIcon;
  } else {
    return unknownIcon;
  }
};

export default {
  species: iconSpecies,
  status: iconStatus,
};
