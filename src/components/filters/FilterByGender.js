// React
import React from 'react';
import PropTypes from 'prop-types';

const FilterByGender = (props) => {
  const { gender, handleFilter, filteredCharacters } = props;

  const filteredGenders = filteredCharacters.map((data) => data.gender);
  const genderMapped = [...new Set(filteredGenders)];

  genderMapped.sort();

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const genderOption = genderMapped.map((gender, i) => (
    <option key={i} value={gender.toLowerCase()}>
      {toTitleCase(gender)}
    </option>
  ));

  const handleChange = (ev) => {
    handleFilter({
      key: 'gender',
      value: ev.target.value,
    });
  };

  return (
    <fieldset className="filter__list">
      <label htmlFor="gender" className="filter__list--label">
        Gender:
      </label>
      <select className="filter__list--input" name="gender" id="gender" value={gender} onChange={handleChange}>
        <option value="">All</option>
        {genderOption}
      </select>
    </fieldset>
  );
};

FilterByGender.propTypes = {
  gender: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterByGender;
