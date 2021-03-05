import React from 'react';
import PropTypes from 'prop-types';

const FilterBySpecies = (props) => {
  const { species, handleForm } = props;

  const handleChange = (ev) => {
    handleForm({
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
      </select>
    </fieldset>
  );
};

FilterBySpecies.propTypes = {
  handleForm: PropTypes.func,
};

export default FilterBySpecies;
