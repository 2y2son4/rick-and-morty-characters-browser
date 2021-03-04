/* eslint-disable import/no-anonymous-default-export */
const get = (key, defaultData) => {
  const data = JSON.parse(localStorage.getItem(key));
  console.log(data, defaultData);
  return data === null ? defaultData : data;
};

const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export default {
  get: get,
  set: set,
};
