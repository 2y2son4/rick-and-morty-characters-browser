import React from 'react';
import PropTypes from 'prop-types';

const FilterByGender = (props) => {
  const { handleFilter } = props;

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
      <select className="filter__list--input" name="gender" id="gender" onChange={handleChange}>
        <option value="">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Unknown">Unknown</option>
      </select>
    </fieldset>
  );
};

FilterByGender.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterByGender;
