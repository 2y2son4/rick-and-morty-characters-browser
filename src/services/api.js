const Api = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          location: character.location.name,
          image: character.image,
          episodes: character.episode.length,
        };
      });
    });
};

export default Api;
