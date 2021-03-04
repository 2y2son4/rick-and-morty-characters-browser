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
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="gender">
        Gender:
      </label>
      <select className="filter__list--input" name="gender" id="gender" onChange={handleChange}>
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
  );
};

FilterByGender.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterByGender;
