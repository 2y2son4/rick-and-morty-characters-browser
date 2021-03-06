// React
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// services
import api from '.././services/api';
import localStorage from '.././services/localStorage';
import sortFunc from '.././services/sortFunctions';
import counters from '.././services/counters';

// components

import Header from './layout/Header';
import Footer from './layout/Footer';
import Filters from './filters/Filters';
import CharacterList from './renderCharacters/CharacterList';
import CharacterDetail from './renderCharacters/CharacterDetail';
import CharacterNotAvailable from './renderCharacters/CharacterNotAvailable';
import ChangePage from './filters/ChangePage';

// styles
import '.././stylesheets/App.scss';

function App() {
  // hooks
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [sortDirection, setSortDirection] = useState('AtoZ');
  const [name, setName] = useState(localStorage.get('name', ''));
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  // call to API
  useEffect(() => {
    api(page).then((data) => setCharacters(data));
  }, [page]);

  const handleLess = () => {
    counters.less(page, setPage);
  };

  const handleMore = () => {
    counters.more(page, setPage);
  };

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
    setSortDirection('AtoZ');
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
          <ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />
          <CharacterList characters={filteredCharacters} resetBtn={resetSearch} search={name} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
