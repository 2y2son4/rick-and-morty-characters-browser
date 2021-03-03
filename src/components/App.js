import React, { useEffect, useState } from 'react';
import '.././stylesheets/App.scss';
// import PropTypes from 'prop-types';
// import { Link, Route, Switch } from 'react-router-dom';
import Api from '../services/api';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import CharacterList from './CharacterList';

function App() {
  // hooks
  const [characters, setCharacters] = useState([]);

  const [name, setName] = useState([]);

  // call to API
  useEffect(() => {
    Api().then((data) => setCharacters(data));
  }, []);

  // handler function
  const handleFilter = (input) => {
    console.log('Me han cambiado', input.value, input.key);

    if (input.key === 'name') {
      setName(input.value);
    }
  };

  // filter array
  const filterCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(name.toUpperCase());
  });
  console.log(filterCharacters);
  return (
    <div className="App App-header">
      <Header />
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filterCharacters} />
      <Footer />
    </div>
  );
}

export default App;
