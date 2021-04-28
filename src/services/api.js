const Api = (page) => {
  return fetch('//rickandmortyapi.com/api/character?page=' + page)
    .then((response) => response.json())
    .then((data) => {
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
