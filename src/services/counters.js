/* eslint-disable import/no-anonymous-default-export */

import apiInfo from '.././services/apiInfo';

const handleCounterLess = (state, funcSetState) => {
  state = state - 1;
  return state < 1 ? apiInfo().then((data) => funcSetState(data)) : funcSetState(state);
};

const handleCounterMore = (state, funcSetState) => {
  state = state + 1;
  return state > 34 ? funcSetState(1) : funcSetState(state);
};

export default {
  less: handleCounterLess,
  more: handleCounterMore,
};
