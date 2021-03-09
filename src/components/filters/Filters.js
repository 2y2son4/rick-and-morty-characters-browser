// React
import React from 'react';
import PropTypes from 'prop-types';

// components
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByGender from './FilterByGender';
import FilterByStatus from './FilterByStatus';
import ResetBtn from '../reset/ResetBtn';
import SortByName from './SortByName';

// styles
import '../.././stylesheets/filters/Filters.scss';

// images
import iconSearch from '../.././images/search/search_icon.png';

const Filters = (props) => {
  // prevent submit form
  const HandleForm = (ev) => {
    ev.preventDefault();
  };

  const { name, species, status, gender, sortDirection, filteredCharacters, handleFilter, resetBtn } = props;

  return (
    <section className="filter">
      <h2 className="filter__title">
        <img src={iconSearch} alt="Search icon" className="filter__icon" />
        Show me what you got
        <img src={iconSearch} alt="Search icon" className="filter__icon" />
      </h2>
      <form className="filter__container" onSubmit={HandleForm}>
        <FilterByName name={name} handleFilter={handleFilter} />
        <FilterBySpecies species={species} handleFilter={handleFilter} filteredCharacters={filteredCharacters} />
        <FilterByStatus status={status} handleFilter={handleFilter} filteredCharacters={filteredCharacters} />
        <FilterByGender gender={gender} handleFilter={handleFilter} filteredCharacters={filteredCharacters} />
        <SortByName sortDirection={sortDirection} handleFilter={handleFilter} />
        <ResetBtn resetBtn={resetBtn} classResetBtn={'reset'} classResetIcon={'reset__icon'} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  sortDirection: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
  resetBtn: PropTypes.func,
};

export default Filters;
