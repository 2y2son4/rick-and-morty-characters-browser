// React
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
    <fieldset className="filter__list">
      <label className="filter__list--label" htmlFor="species">
        Species:
      </label>
      <select className="filter__list--input" name="species" id="species" value={species} onChange={handleChange}>
        <option value="">All</option>
        <option value="alien">Alien</option>
        <option value="animal">Animal</option>
        <option value="cronenberg">Cronenberg</option>
        <option value="disease">Disease</option>
        <option value="human">Human</option>
        <option value="humanoid">Humanoid</option>
        <option value="mythological creature">Mythological creature</option>
        <option value="poopybutthole">Poopybutthole</option>
        <option value="robot">Robot</option>
        <option value="unknown">Unknown</option>
      </select>
    </fieldset>
  );
};

FilterBySpecies.propTypes = {
  species: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterBySpecies;
