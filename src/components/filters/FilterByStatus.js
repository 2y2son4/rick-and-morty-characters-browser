import React from 'react';
import PropTypes from 'prop-types';

const FilterByStatus = (props) => {
  const { status, handleFilter } = props;

  const handleChange = (ev) => {
    handleFilter({
      key: 'status',
      value: ev.target.value,
    });
  };
  return (
    <fieldset className="filter__list">
      <label className="filter__list--label" htmlFor="status">
        Status:
      </label>
      <select className="filter__list--input" name="status" id="status" value={status} onChange={handleChange}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </fieldset>
  );
};

FilterByStatus.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterByStatus;
