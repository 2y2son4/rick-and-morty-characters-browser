// React
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// services
import api from '../services/api';
import localStorage from '.././services/localStorage';
import sortFunc from '.././services/sortFunctions';

// components

import Header from './Header';
import Footer from './Footer';
import Filters from './filters/Filters';
import CharacterList from './generateCharacters/CharacterList';
import CharacterDetail from './generateCharacters/CharacterDetail';
import CharacterNotAvailable from './generateCharacters/CharacterNotAvailable';

// styles
import '.././stylesheets/App.scss';

function App() {
  // hooks
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [sortDirection, setSortDirection] = useState('AtoZ');
  // const [sortAZ, setSortAZ] = useState(true);
  const [name, setName] = useState(localStorage.get('name', ''));
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  // call to API
  useEffect(() => {
    api().then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    localStorage.set('name', name);
  }, [name]);

  useEffect(() => {
    const filteredArray = characters
      // by name
      .filter((character) => {
        return character.name.toLowerCase().includes(name.toLowerCase());
      })
      // by species
      .filter((character) => {
        return character.species.toLowerCase().includes(species);
      })
      // by status
      .filter((character) => {
        return character.status.toLowerCase().includes(status);
      })
      .filter((character) => {
        // debugger;
        return !gender || character.gender.toLowerCase() === gender;
      });

    // order by name
    sortDirection === 'AtoZ' ? sortFunc.sortAZ(filteredArray) : sortFunc.sortZA(filteredArray);

    setFilteredCharacters(filteredArray);
  }, [characters, name, species, status, gender, sortDirection]);

  // reset button
  const resetSearch = () => {
    setCharacters(characters);
    setName('');
    setSpecies('');
    setStatus('');
    setGender('');
  };

  // handler function for search
  const handleFilter = (input) => {
    if (input.key === 'name') {
      setName(input.value);
    } else if (input.key === 'species') {
      setSpecies(input.value);
    } else if (input.key === 'status') {
      setStatus(input.value);
    } else if (input.key === 'gender') {
      setGender(input.value);
    } else if (input.key === 'sort') {
      setSortDirection(input.value);
    }
  };

  // function to render character detailed card and url id
  const renderDetail = (props) => {
    // parse id to be strictly equal to character.id
    const id = parseInt(props.match.params.id);

    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    if (selectedCharacter) {
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
          <Filters
            name={name}
            status={status}
            gender={gender}
            species={species}
            sortDirection={sortDirection}
            handleFilter={handleFilter}
            resetBtn={resetSearch}
          />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
