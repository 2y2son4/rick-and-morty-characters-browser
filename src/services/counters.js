/* eslint-disable import/no-anonymous-default-export */

const handleCounterLess = (state, funcSetState) => {
  state = state - 1;
  return state < 1 ? funcSetState(34) : funcSetState(state);
};

const handleCounterMore = (state, funcSetState) => {
  state = state + 1;
  return state > 34 ? funcSetState(1) : funcSetState(state);
};

export default {
  less: handleCounterLess,
  more: handleCounterMore,
};
