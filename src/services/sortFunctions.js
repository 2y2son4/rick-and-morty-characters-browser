/* eslint-disable import/no-anonymous-default-export */

// from a to z
const sortAtoZ = (arr) => {
  return arr.sort((a, b) => {
    let characterA = a.name.toUpperCase();
    let characterB = b.name.toUpperCase();
    if (characterA < characterB) {
      return -1;
    }
    if (characterA > characterB) {
      return 1;
    }
    return 0;
  });
};

// from z to a
const sortZtoA = (arr) => {
  return arr.sort((a, b) => {
    let characterA = a.name.toUpperCase();
    let characterB = b.name.toUpperCase();
    if (characterA > characterB) {
      return -1;
    }
    if (characterA < characterB) {
      return 1;
    }
    return 0;
  });
};

export default {
  sortAZ: sortAtoZ,
  sortZA: sortZtoA,
};
