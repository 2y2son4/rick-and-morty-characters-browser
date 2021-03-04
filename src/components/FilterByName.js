import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  const { name, handleFilter } = props;

  const handleChange = (ev) => {
    handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="name">
        Name:
      </label>
      <input
        className="filter__list--input"
        type="text"
        name="name"
        value={name}
        id="characterSearch"
        onChange={handleChange}
      />
    </div>
  );
};

FilterByName.propTypes = {
  name: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterByName;
