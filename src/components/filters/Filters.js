import React from 'react';
import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import '../../stylesheets/Filters.scss';
import FilterBySpecies from './FilterBySpecies';
// import FilterByGender from './FilterByGender';
import FilterByStatus from './FilterByStatus';
import ResetBtn from '../reset/ResetBtn';
import FilterByGender from './FilterByGender';

const Filters = (props) => {
  // prevent submit form
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const { name, species, status, gender, handleFilter, resetBtn } = props;

  return (
    <section className="filter">
      <h2 className="filter__title">Show me what you got</h2>
      <form className="filter__container" onSubmit={handleForm}>
        <FilterByName name={name} handleFilter={handleFilter} />
        <FilterBySpecies species={species} handleFilter={handleFilter} />
        <FilterByStatus status={status} handleFilter={handleFilter} />
        <FilterByGender gender={gender} handleFilter={handleFilter} />
        <ResetBtn resetBtn={resetBtn} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  name: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
