import React, { useEffect, useState } from 'react';
import '.././stylesheets/App.scss';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import Api from '../services/api';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Api().then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  return (
    <div className="App App-header">
      <Header></Header>
      <Filters />
      <CharacterList characters={characters} />
      <Footer />
    </div>
  );
}

export default App;
