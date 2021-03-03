const Api = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          status: user.status,
          species: user.species,
          gender: user.gender,
          origin: user.origin.name,
          location: user.location.name,
          image: user.image,
        };
      });
    });
};

export default Api;
