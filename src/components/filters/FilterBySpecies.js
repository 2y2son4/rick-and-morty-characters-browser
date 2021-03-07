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
        <option className="filter__list--option" value="">
          All
        </option>
        <option className="filter__list--option" value="alien">
          Alien
        </option>
        <option className="filter__list--option" value="human">
          Human
        </option>
        <option className="filter__list--option" value="humanoid">
          Humanoid
        </option>
        <option className="filter__list--option" value="disease">
          Disease
        </option>
        <option className="filter__list--option" value="cronenberg">
          Cronenberg
        </option>
        <option className="filter__list--option" value="mythological creature">
          Mythological creature
        </option>
        <option className="filter__list--option" value="poopybutthole">
          Poopybutthole
        </option>
        <option className="filter__list--option" value="unknown">
          Unknown
        </option>
      </select>
    </fieldset>
  );
};

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterBySpecies;
