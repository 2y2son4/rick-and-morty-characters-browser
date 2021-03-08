const ApiInfo = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      return data.info.pages;
    });
};

export default ApiInfo;
