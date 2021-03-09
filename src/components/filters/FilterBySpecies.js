// React
import React from 'react';
import PropTypes from 'prop-types';

// functions

const FilterBySpecies = (props) => {
  const { species, filteredCharacters, handleFilter } = props;

  const filteredSpecies = filteredCharacters.map((data) => data.species);
  const speciesMapped = [...new Set(filteredSpecies)];

  speciesMapped.sort();

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const speciesOption = speciesMapped.map((specie, i) => (
    <option key={i} value={specie.toLowerCase()}>
      {toTitleCase(specie)}
    </option>
  ));

  const handleChange = (ev) => {
    handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };

  return (
    <fieldset className="filter__list">
      <label className="filter__list--label" htmlFor="species">
        Species:
      </label>
      <select className="filter__list--input" name="species" id="species" value={species} onChange={handleChange}>
        <option value="">All</option>
        {speciesOption}
      </select>
    </fieldset>
  );
};

FilterBySpecies.propTypes = {
  species: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterBySpecies;
