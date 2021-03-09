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
import ChangePage from './filters/ChangePage';
import CharacterList from './renderCharacters/CharacterList';
import CharacterDetail from './renderCharacters/CharacterDetail';
import CharacterNotAvailable from './renderCharacters/CharacterNotAvailable';
import NotFound from './404/NotFound';

// styles
import '.././stylesheets/App.scss';

function App() {
  // hooks

  // characters array from api
  const [characters, setCharacters] = useState([]);

  // filtered and sorted characters array
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [sortDirection, setSortDirection] = useState('AtoZ');

  const [name, setName] = useState(localStorage.get('name', ''));
  const [species, setSpecies] = useState(localStorage.get('species', ''));
  const [status, setStatus] = useState(localStorage.get('status', ''));
  const [gender, setGender] = useState(localStorage.get('gender', ''));

  const [page, setPage] = useState(localStorage.get('page', 1));

  // call to API
  useEffect(() => {
    api(page).then((data) => setCharacters(data));
  }, [page]);

  // local storage
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('species', species);
    localStorage.set('status', status);
    localStorage.set('gender', gender);
    localStorage.set('page', page);
  }, [name, species, status, gender, page]);

  // get filtered and sorted characters array
  useEffect(() => {
    const filteredArray = characters
      .filter((character) => {
        return character.name.toLowerCase().includes(name.toLowerCase());
      })
      .filter((character) => {
        return !species || character.species.toLowerCase() === species;
      })
      .filter((character) => {
        return character.status.toLowerCase().includes(status);
      })
      .filter((character) => {
        return !gender || character.gender.toLowerCase() === gender;
      });

    sortDirection === 'AtoZ' ? sortFunc.sortAZ(filteredArray) : sortFunc.sortZA(filteredArray);

    setFilteredCharacters(filteredArray);
  }, [characters, name, species, status, gender, sortDirection]);

  // reset button
  const resetSearch = () => {
    setCharacters(characters);
    setSortDirection('AtoZ');
    setPage(1);
    setName('');
    setSpecies('');
    setStatus('');
    setGender('');
  };

  // handler function for filters
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

  // handler functions to navigate through pages
  const handleLess = () => {
    counters.less(page, setPage);
  };
  const handleMore = () => {
    counters.more(page, setPage);
  };

  // function to render character detailed card and url id or notAvailable page
  const renderDetail = (props) => {
    // parse id (string) to be strictly equal to character.id (number)
    const id = parseInt(props.match.params.id);

    // find clicked character
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
            filteredCharacters={filteredCharacters}
            handleFilter={handleFilter}
            resetBtn={resetSearch}
          />
          <ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />
          <CharacterList characters={filteredCharacters} resetBtn={resetSearch} search={name} page={page} />
          <ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />
        </Route>
        <Route path="/character/:id&:page" render={renderDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
