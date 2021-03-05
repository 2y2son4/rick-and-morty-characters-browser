/* eslint-disable import/no-anonymous-default-export */

const alienIcon = <i className="fas fa-pastafarianism card__icon--species" title="Alien"></i>;
const humanIcon = <i className="fas fa-universal-access card__icon--species" title="Human"></i>;
const aliveIcon = <i className="fas fa-heartbeat card__icon--status" title="Dead"></i>;
const DeadIcon = <i className="fas fa-skull card__icon--status" title="Dead"></i>;
const unknownIcon = <i className="fas fa-question-circle card__icon--status" title="Status unknown"></i>;

const iconSpecies = (data) => {
  return data === 'Alien' ? alienIcon : humanIcon;
};

const iconStatus = (data) => {
  if (data === 'Alive') {
    return aliveIcon;
  } else if (data === 'Dead') {
    return DeadIcon;
  } else {
    return unknownIcon;
  }
};

export default {
  species: iconSpecies,
  status: iconStatus,
};
