// React
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// services
import api from '../services/api';
import localStorage from '.././services/localStorage';

// components
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterNotAvailable from './CharacterNotAvailable';

// styles
import '.././stylesheets/App.scss';

function App() {
  // hooks
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState(localStorage.get('name', ''));

  // call to API
  useEffect(() => {
    api().then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    localStorage.set('name', name);
  }, [name]);

  // handler function for search
  const handleFilter = (input) => {
    console.log(input.value, input.key);

    if (input.key === 'name') {
      // localStorage.get(input.key, input.value);
      setName(input.value);
    }
  };

  // filtered array
  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
  // ordenamos con .sort()
  // console.log(filterCharacters);

  // function to render character detailed card
  const renderDetail = (props) => {
    console.log(props.match.params);
    const id = parseInt(props.match.params.id);

    const selectedCharacter = characters.find((character) => {
      console.log(typeof id);
      return character.id === id;
    });
    if (selectedCharacter) {
      console.log(selectedCharacter);
      return <CharacterDetail character={selectedCharacter} />;
    } else {
      return <CharacterNotAvailable />;
    }
  };

  return (
    <div className="App App-header">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters name={name} handleFilter={handleFilter} />
          <CharacterList characters={filterCharacters} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
