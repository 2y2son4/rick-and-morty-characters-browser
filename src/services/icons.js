/* eslint-disable import/no-anonymous-default-export */

// icons
import { GiUnicorn } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri';
import { IoMdPlanet } from 'react-icons/io';

import poopyButthole from '../images/icons/poopy_icon.svg';

const alienIcon = <RiAliensFill title="Alien" />;
const animalIcon = <i className="fas fa-paw card__icon--species" title="Disease"></i>;
const cronenbergIcon = <i className="fas fa-pastafarianism card__icon--species" title="Cronenberg"></i>;
const diseaseIcon = <i className="fas fa-bacteria card__icon--species" title="Disease"></i>;
const humanIcon = <i className="fas fa-child card__icon--species" title="Human"></i>;
const humanoidIcon = <i className="fas fa-universal-access card__icon--species" title="Humanoid"></i>;
const mythologicalIcon = <GiUnicorn title="Mythological creature" />;
const planetIcon = <IoMdPlanet title="Planet" />;
const poopyIcon = (
  <img
    src={poopyButthole}
    alt="poopybutthole"
    className="card__icon--species card__icon--poopy"
    title="Poopybutthole"
  />
);
const robotIcon = <i className="fas fa-robot card__icon--species" title="Robot"></i>;

const aliveIcon = <i className="fas fa-heartbeat card__icon--status" title="Alive"></i>;
const deadIcon = <i className="fas fa-skull card__icon--status" title="Dead"></i>;

const femaleIcon = <i className="fas fa-venus card__icon--gender" title="Female"></i>;
const maleIcon = <i className="fas fa-mars card__icon--gender" title="Male"></i>;
const genderlessIcon = <i className="fas fa-genderless card__icon--gender" title="Genderless"></i>;

const unknownIcon = <i className="fas fa-question-circle card__icon--status" title="Unknown"></i>;

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

const iconGender = (data) => {
  if (data === 'Female') {
    return femaleIcon;
  } else if (data === 'Male') {
    return maleIcon;
  } else if (data === 'Genderless') {
    return genderlessIcon;
  } else {
    return unknownIcon;
  }
};

export default {
  species: iconSpecies,
  status: iconStatus,
  gender: iconGender,
  alienIcon: alienIcon,
  animalIcon: animalIcon,
  cronenbergIcon: cronenbergIcon,
  diseaseIcon: diseaseIcon,
  humanIcon: humanIcon,
  humanoidIcon: humanoidIcon,
  mythologicalIcon: mythologicalIcon,
  planetIcon: planetIcon,
  poopyIcon: poopyIcon,
  robotIcon: robotIcon,
  aliveIcon: aliveIcon,
  deadIcon: deadIcon,
  unknownIcon: unknownIcon,
  femaleIcon: femaleIcon,
  maleIcon: maleIcon,
  genderlessIcon: genderlessIcon,
};
