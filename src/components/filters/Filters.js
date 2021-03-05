import React from 'react';
import PropTypes from 'prop-types';

import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByGender from './FilterByGender';
import FilterByStatus from './FilterByStatus';
import ResetBtn from '../reset/ResetBtn';

import SortByName from './SortByName';

import '../../stylesheets/filters/Filters.scss';

const Filters = (props) => {
  // prevent submit form
  const HandleForm = (ev) => {
    ev.preventDefault();
  };

  const { name, species, status, gender, sortDirection, handleFilter, resetBtn } = props;

  return (
    <section className="filter">
      <h2 className="filter__title">Show me what you got</h2>
      <form className="filter__container" onSubmit={HandleForm}>
        <FilterByName name={name} handleFilter={handleFilter} />
        <FilterBySpecies species={species} handleFilter={handleFilter} />
        <FilterByStatus status={status} handleFilter={handleFilter} />
        <FilterByGender gender={gender} handleFilter={handleFilter} />
        <ResetBtn resetBtn={resetBtn} classResetBtn={'reset'} classResetIcon={'reset__icon'} />
        <SortByName sortDirection={sortDirection} handleFilter={handleFilter} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  name: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
