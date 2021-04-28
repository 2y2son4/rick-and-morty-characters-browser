/* eslint-disable import/no-anonymous-default-export */

import apiInfo from '.././services/apiInfo';

const prev = (state, funcSetState) => {
  state = state - 1;
  return state < 1
    ? apiInfo().then((maxPage) => {
        console.log(maxPage);
        return funcSetState(maxPage);
      })
    : funcSetState(state);
};

const next = (state, funcSetState) => {
  state = state + 1;
  return state > 34 ? funcSetState(1) : funcSetState(state);
};

export default {
  prev: prev,
  next: next,
};
