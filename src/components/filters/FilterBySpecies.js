import React from 'react';
import PropTypes from 'prop-types';

const FilterBySpecies = (props) => {
  const { species, handleFilter } = props;

  const handleChange = (ev) => {
    handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };
  return (
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="species">
        Species:
      </label>
      <select className="filter__list--input" name="species" id="species" value={species} onChange={handleChange}>
        <option value="">All</option>
        <option value="alien">Alien</option>
        <option value="human">Human</option>
      </select>
    </div>
  );
};

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterBySpecies;
